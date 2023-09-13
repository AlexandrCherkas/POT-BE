require("dotenv").config();
const mongoose = require('mongoose');
const Claim = require("../models/Claim");
const Package = require("../models/Package");
const Consumer = require("../models/Consumer");
const ConsumerController = require("../controllers/ConsumerController")

const {
    UNPROCESSABLE_ENTRY_STATUS,
    SUCCESS_STATUS,
} = require("../assets/variables");

exports.create = async function (req, res) {
    const consumerId = req.params.consumerId;
    const {
        serviceDate,
        amount,
        receipt,
        package,
    } = req.body;

    try {
        const employerId = await ConsumerController.getEmployerId(consumerId);

        const newClaim = new Claim({
            _id: new mongoose.Types.ObjectId(),
            isApproved: null,
            employer: employerId,
            consumer: consumerId,
            receipt,
            serviceDate,
            amount,
            package
        });

        await newClaim.save();
        await ConsumerController.addClaim(consumerId, newClaim._id);
    } catch {
        return res
            .status(UNPROCESSABLE_ENTRY_STATUS)
            .json({error: "Oops! Something went Wrong"});
    }

    return res.status(SUCCESS_STATUS).json({createdClaim: true});
};

exports.getClaims = async function (req, res) {
    const claims = await Claim
        .find({})
        .populate({
            path : 'consumer',
            select: '-password',
            populate : {
                path : 'employer',
                select: 'companyName'
            }
        })
        .populate({
            path: 'package'
        });

    res.send(claims);
};

exports.getClaimById = async function (req, res) {
    const claimId = req.params.id;
    const claim = await Claim
        .find({
            _id: claimId
        })
        .populate({
            path : 'consumer',
            select: '-password',
            populate : {
                path : 'employer',
                select: 'companyName'
            }
        })
        .populate({
            path: 'package'
        });

    res.send(claim);
};

exports.update = async function (req, res) {
    const claimId = req.params.id;
    const body = req.body;

    try {
        if(body.isApproved){
            const claim = await Claim.findOneAndUpdate(
                {_id: claimId},
                { $set: {"isApproved": true }}
            )
            
            const packageId = claim.package.valueOf()
            
            const package = await Package.updateOne(
                { _id: packageId },
                { $inc: 
                    { availableAmount: - claim.amount }
                }
            )
        
        } else {
            const claim = await Claim.findOneAndUpdate(
                {_id: claimId},
                { $set: {"isApproved": false }}
            )
        }
        
       
    } catch {
        return res
            .status(UNPROCESSABLE_ENTRY_STATUS)
            .json({error: "Oops! Something went Wrong"});
    }

    return res.status(SUCCESS_STATUS).json({changedClaim: true});
};

exports.delete = async function (req, res) {
    const claimId = req.params.id;

    const claim = await Claim.deleteOne({
        _id: claimId
    });

    res.send(claim);
};

exports.deleteMultiple = async function (req, res) {
    const body = req.body;

    const claim = await Claim.deleteMany({
        _id: { $in: body }                              // body is Array ['claimId_1', 'claimId_2', ..., claimId_N]
    });

    res.send(claim);
};

exports.search = async function (req, res) {
    const claimNumber = req.query.claimNumber;
    const consumerId = req.query.consumer;
    const employerId = req.query.employer;
    const status = req.query.status;
    const page = req.query.page;
    const size = req.query.size;
    const sortValue = req.query.sort;
    const order = req.query.order;
    
   
    const dbQuery = {};
    const sortReq = {}

    if(sortValue){
        sortReq[sortValue] = order
    }
    
    if (claimNumber) {
        dbQuery.claimNumber = new RegExp(claimNumber, 'gi');
    }

    if (employerId) {
        dbQuery.employer = employerId;
    }
    if (consumerId) {
        dbQuery.consumer = consumerId;
    }

    if (status) {
        const statusValue = {
            pending: null,
            denied: false,
            approved: true
        }

        dbQuery.isApproved = statusValue[status.toLowerCase()];
    }
 
    const result = await Claim
        .find(dbQuery)
        .sort(sortReq)
        .skip(page * size)
        .limit(size)
        .populate({
            path : 'consumer',
            select: '-password',
        })
        .populate({
            path: 'package'
        })
        .populate({
            path : 'employer',
            select: 'companyName'
        });  

    const length = await Claim
        .find(dbQuery)
        .count();

    const permissions = await Consumer
        .find({
            _id: consumerId
        },
        {"permissions": true})    
        .populate({
            path: 'employer',
            select: [ "permissions"]
        })
    
    if(permissions.length){
        res.send({result, length, permissions});
    } else{ 
        res.send({result, length});
    } 
   
};