require("dotenv").config();
const mongoose = require('mongoose');
const Consumer = require("../models/Consumer");
const Employer = require("../models/Employer");
const Claim = require("../models/Claim")
const EmployerController = require("../controllers/EmployerController");
const {
    UNPROCESSABLE_ENTRY_STATUS,
    SUCCESS_STATUS,
} = require("../assets/variables");

exports.create = async function (req, res) {
    const employerId = req.params.employerId;

    const {
        firstName,
        lastName,
        loginName,
        password,
        email,
        balance,
        ssn,
        permissions
    } = req.body;

    try {
        const newConsumer = new Consumer({
            _id: new mongoose.Types.ObjectId(),
            firstName,
            lastName,
            loginName,
            password,
            email,
            balance,
            ssn,
            permissions,
            employer: employerId
        })

        await newConsumer.save();
        await EmployerController.addConsumer(employerId, newConsumer._id);
    } catch (e) {
        return res
            .status(UNPROCESSABLE_ENTRY_STATUS)
            .json({error: "Oops! Something went Wrong"});
    }

    return res.status(SUCCESS_STATUS).json({createdConsumer: true});
};

exports.getConsumers = async function (req, res) {
    const consumers = await Consumer
        .find({})
        .select('-password')
        .populate('employer');

    res.send(consumers);
};

exports.getConsumersByEmployerId = async function (req, res) {
    const employerId = req.params.employerId;
    const page = req.query.page;
    const size = req.query.size;

    const result = await Consumer
    .find({  
        employer: {$eq :employerId},
    })
    .skip(page * size)
        .limit(size)
        .populate({
            path: 'employer'
        });   

    const length = await Consumer
        .find({  
            employer: {$eq :employerId}
        })
        .count();

    res.send({
        result,
        length
    });
};

exports.getConsumerById = async function (req, res) {
    const consumerId = req.params.id;
    const consumer = await Consumer
        .find({
            _id: consumerId
        },
        {"password": false})    
        .populate({
            path: 'employer',
            select: [
                "-consumers",
                "-address",
                "-companyName",
                "-loginName",
                "-countryCode",
                "-password",
                "-logo",
                "-role"
            ],
            populate: "plans"
        })
        .populate({
            path: 'packages'
        })
       
    res.send(consumer);
};

exports.getPackageFromConsumer = async function (req, res) {
    const consumerId = req.params.consumerId;
    const packageId = req.params.packageId;
    
    if (!consumerId && !packageId) {
        return res
          .status(UNPROCESSABLE_ENTRY_STATUS)
          .json({ error: "Invalid request" });
      }
    
    try{
        const package = await Consumer
            .find(
                { _id: consumerId },
                { packages: { $elemMatch: { _id: new mongoose.Types.ObjectId(packageId) }} }
                )

        res.send(package);
    }  catch {
        return res
          .status(UNPROCESSABLE_ENTRY_STATUS)
          .json({ error: "Oops! Something went Wrong" });
      }
};

exports.update = async function (req, res) {
    const consumerId = req.params.id;
    const body = req.body;
    const consumer = await Consumer
        .findOneAndUpdate({
            _id: consumerId
        }, body, {returnDocument: "after"})
        .populate('employer');

    res.send(consumer);
};

exports.deleteConsumer = async function (req, res) {
    const consumerId = req.params.consumerId;
    const employerId = req.params.id

    await Employer.findOneAndUpdate( 
        { _id: employerId }, 
        {$pull: 
            { consumers: new mongoose.Types.ObjectId(consumerId)}
        }
    )

    const consumer = await Consumer.deleteOne({
        _id: consumerId
    });

    await Claim.deleteMany(
        { employer: new mongoose.Types.ObjectId(employerId)}
    )

    res.send({message: `Consumer ${consumer.name} removed`});
};

exports.deleteMultiple = async function (req, res) {
    const body = req.body;

    const consumer = await Consumer.deleteMany({
        _id: { $in: body }                              // body is Array ['consumerId_1', 'consumerId_2', ..., consumerId_N]
    });
    res.send(consumer);
};

exports.search = async function (req, res) {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const socialSN = req.query.ssn;
    const page = req.query.page;
    const size = req.query.size;
    const sortValue = req.query.sort;
    const order = req.query.order;
    const dbQuery = {};
    const sortReq = {}
    
    if(sortValue){
        sortReq[sortValue] = order
    }

    if (firstName) {
        dbQuery.firstName = new RegExp(req.query.firstName, 'gi');
    }

    if (lastName) {
        dbQuery.lastName = new RegExp(req.query.lastName, 'gi');
    }

    if (socialSN) {
        dbQuery.ssn = new RegExp(req.query.ssn, 'gi');
    }

    const result = await Consumer
        .find(
            dbQuery, {
                password: false
            })
        .sort(sortReq) 
        .skip(page * size)
        .limit(size)
        .populate({
            path: 'employer',
            select: [
                '_id',
                'companyName',
                'countryCode'
            ]
        });

    const length = await Consumer
        .find(dbQuery)
        .count();

    res.send({
        result,
        length
    });
};

exports.getEmployerId = async function (consumerId) {
    const consumer = await Consumer
        .find({_id: consumerId})
        .populate({
            path: 'employer',
            select: '_id'
        });

    return consumer[0].employer._id
}

exports.searchConsumerFromEmployer = async function (req, res) {
    const employerId = req.query.employerId
    const firstName = new RegExp(req.query.firstName, 'gi');
    const lastName = new RegExp(req.query.lastName, 'gi');
    const socialSN = new RegExp(req.query.ssn, 'gi');
    const page = req.query.page;
    const size = req.query.size;
    const sortValue = req.query.sort;
    const order = req.query.order;
    const sortReq = {}
  
    if(sortValue){
        sortReq[sortValue] = order
    }

    const result = await Consumer
    .find({  
        employer: {$eq :employerId},
        firstName: {$regex: firstName},
        lastName: {$regex: lastName},
        ssn: {$regex: socialSN}
    })
    .sort(sortReq)  
    .skip(page * size)
    .limit(size)
    .populate({
        path: 'employer',
    });   

    const length = await Consumer
        .find({  
            employer: {$eq :employerId},
            firstName: {$regex: firstName},
            lastName: {$regex: lastName},
            ssn: {$regex: socialSN}
        })
        .count();

    res.send({
        result,
        length
    });
    
};

exports.addPackage = async function (consumerId, newPackageId) {
    const update = {
        $push: {
            packages: newPackageId
        }
    }
    
    const consumer = await Consumer.findOneAndUpdate({
        _id: consumerId
    }, update);
}

exports.addClaim = async function (consumerId, newClaimId) {
    const update = {
        $push: {
            claims: newClaimId
        }
    }
    
    const consumer = await Consumer.findOneAndUpdate({
        _id: consumerId
    }, update);
}