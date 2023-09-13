require("dotenv").config();
const mongoose = require('mongoose');
const Employer = require("../models/Employer");
const Consumer = require("../models/Consumer");
const Claim = require("../models/Claim");
const Plan = require("../models/Plan");
const {
    UNPROCESSABLE_ENTRY_STATUS,
    SUCCESS_STATUS,
} = require("../assets/variables");

exports.create = async function (req, res) {

    const {
        companyName,
        loginName,
        password,
        countryCode,
        address,
        permissions,
        logo
    } = req.body;

    try {
        const newEmployer = new Employer({
            _id: new mongoose.Types.ObjectId(),
            companyName,
            loginName,
            password,
            countryCode,
            logo,
            address,
            permissions,
            
        });

        await newEmployer.save();
    } catch {
        return res
            .status(UNPROCESSABLE_ENTRY_STATUS)
            .json({error: "Oops! Something went Wrong"});
    }

    return res.status(SUCCESS_STATUS).json({createdEmployer: true});
};

exports.getEmployers = async function (req, res) {
    const employers = await Employer.find({});
    res.send(employers)
    
};

exports.getNames = async function (req, res) {
    const names = await Employer
        .find(
            {},
            {'companyName': true}
        );

    res.send(names);
};

exports.getEmployerById = async function (req, res) {
    const employerId = req.params.id;

    const employer = await Employer.find({
        _id: employerId
    },{
        'password': false
    });

    res.send(employer);
};


exports.getPlans = async function (req, res) {
    const employerId = req.params.id;

    const packages = await Employer
        .find(
            {_id: employerId},
            {
                companyName: true,
                countryCode: true,
                plans: true
            }
        )
        .populate("plans")

        res.send(packages);
};

exports.getEmployerPlanById = async function (req, res) {
    const planId = req.params.planId;
 
    const plan = await Plan
        .findOne({'_id': planId} )

    res.send(plan);
};

exports.update = async function (req, res) {
    const employerId = req.params.id;
    const body = req.body;

    const employer = await Employer.findOneAndUpdate({
        _id: employerId
    }, body, {returnDocument: "after"});

    await employer.save();

    res.send(employer);
};

exports.updateEmployersPlanByPlanId = async function (req, res) {
    const planId = req.params.planId;
    const body = req.body;

    const plan =  await Plan.findOneAndUpdate({
        _id: planId 
    }, body, {returnDocument: "after"});

    res.send(plan);
};


exports.addPlan = async function (employerId, newPlanId) {
    const update = {
        $push: {
            plans: newPlanId
        }
    }
    const employer = await Employer.findOneAndUpdate({
        _id: employerId
    }, update);


}


exports.removePlan = async function (req, res) {
    const planId = req.params.planId;
    const employerId = req.params.id;

    const employer = await Employer.findOneAndUpdate( 
        { _id: employerId }, 
        {$pull: 
            { plans: new mongoose.Types.ObjectId(planId)}
        }
    )

    const plan = await Plan.deleteOne({
        _id: planId
    });

    res.send({message: `The  plan has been removed`});
};


exports.delete = async function (req, res) {
    const employerId = req.params.id;

    const deletedEmployer = await Employer.find(
        { _id: employerId }, 
        { companyName: true}
        );

    const employer = await Employer.deleteOne({
        _id: employerId
    });

    const consumer = await Consumer.deleteMany(
        { employer: new mongoose.Types.ObjectId(employerId)}
    );

    const claims = await Claim.deleteMany(
        { employer: new mongoose.Types.ObjectId(employerId)}
    );
    
    res.send({employer , deletedEmployer });
};

exports.deleteMultiple = async function (req, res) {
    const body = req.body;

    const employer = await Employer.deleteMany({
        _id: { $in: body }                              // body is Array ['employerId_1', 'employerId_2', ..., employerId_N]
    });

    res.send(employer);
};

exports.search = async function (req, res) {
    const companyName = req.query.companyName;
    const countryCode = req.query.countryCode;
    const page = req.query.page;
    const size = req.query.size;
    const sortValue = req.query.sort;
    const order = req.query.order;
    const query = {};
    const sortReq = {}
    
    if(sortValue){
        sortReq[sortValue] = order
    }

    if (companyName) {
        query.companyName = new RegExp(req.query.companyName, 'gi');
    }

    if (countryCode) {
        query.countryCode = new RegExp(req.query.countryCode, 'gi');
    }

    const result = await Employer
        .find(
            query, 
            {password: false}
        )
        .sort(sortReq)    
        .skip(page * size)
        .limit(size);

    const length = await Employer
        .find(query)
        .count();

    res.send({
        result,
        length
    });
};

exports.addConsumer = async function (employerId, newConsumerId) {
    const update = {
        $push: {
            consumers: newConsumerId
        }
    }

    const employer = await Employer.findOneAndUpdate({
        _id: employerId
    }, update);
}

exports.checkDatePlan = async function (employerId, newConsumerId) {

}