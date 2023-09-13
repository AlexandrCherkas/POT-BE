require("dotenv").config();
const mongoose = require('mongoose');
const Package = require("../models/Package");
const Consumer = require("../models/Consumer")
const ConsumerController = require("../controllers/ConsumerController");
const {
    UNPROCESSABLE_ENTRY_STATUS,
    SUCCESS_STATUS,
} = require("../assets/variables");
const send = require("send");



exports.create = async function (req, res) {
    const consumerId = req.params.id;
    const electionNewPackage = req.body.election
    const {
        name,
        isActive,
        startDate,
        endDate,
        payrollFrequency,
        contribution,
        type,
        election
    } = req.body;

    const consumer = await Consumer.find({_id: consumerId});

    if(consumer[0].balance > electionNewPackage || Math.round(consumer[0].balance) == Math.round(electionNewPackage)){

        try {

            const newPackage = new Package({
                _id: new mongoose.Types.ObjectId(),
                name,
                isActive,
                startDate,
                endDate,
                payrollFrequency,
                contribution,
                availableAmount: contribution,
                election,
                type
            })
            await newPackage.save();
            await ConsumerController.addPackage(consumerId, newPackage._id);
            await Consumer.updateOne(
                {_id: consumerId},
                { $set: 
                    { "balance":  consumer[0].balance - electionNewPackage}
            })
    
        } catch (e) {
            return res
                .status(UNPROCESSABLE_ENTRY_STATUS)
                .json({error: "Oops! Something went Wrong"});
        }
    
        return res.status(SUCCESS_STATUS).json({ status: true, message: `Add New Enrollment: ${req.body.name}` });

    } else{
        res.send({status: false});
    }
    
};

exports.getPackages = async function (req, res) {
    const package = await Package.find({});

    res.send(package);
};

exports.getPackageById = async function (req, res) {
    const packageId = req.params.id;
    const package = await Package
        .find({
            _id: packageId
        });

    res.send(package);
};

exports.update = async function (req, res) {
    const packageId = req.params.id;
    const consumerId = req.body.consumerId
    const newElection = req.body.election

    const package = await Package.find({_id: packageId});
    const increaseValue = Math.round(package[0].contribution / package[0].election);
    const newContribution = Math.round(newElection * increaseValue);

    const consumer = await Consumer.find({_id: consumerId});
    const priceDifference = Math.round(newElection - package[0].election);
    const newBalance = Math.round(consumer[0].balance - priceDifference);

    if(newBalance < 0 || newBalance == 0 ){
        res.send({status: false});
    } else{
        await Package.updateOne(
            {_id: packageId}, 
            { $set: {
                 "election": newElection,
                 "contribution": newContribution
                 }
        })

        await Consumer.updateOne(
                {_id: consumerId},
                { $set: 
                    { "balance": newBalance }
        })

        res.send(
            {   status: true,
                package: package
            });
    }
   
};

exports.delete = async function (req, res) {
    const packageId = req.params.id;

    const package = await Package.deleteOne({
        _id: packageId
    });

    res.send(package);
};

exports.deleteMultiple = async function (req, res) {
    const body = req.body;
    const package = await Package.deleteMany({
        _id: { $in: body }                              // body is Array ['packageId_1', 'packageId_2', ..., packageId_N]
    });

    res.send(package);
};


exports.checkDate = async function(currentDate){
    const packages = await Package.find({})

    packages.forEach(async function(package){
        if(package.endDate < currentDate){
            const updatePackage = await package.findOneAndUpdate(
                {_id: package._id},
                { $set: {"isActive": false }}
            );
        }
    })
}