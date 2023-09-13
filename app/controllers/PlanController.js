require("dotenv").config();
const mongoose = require('mongoose');
const Plan = require("../models/Plan");
const EmployerController = require("../controllers/EmployerController");
const {
    UNPROCESSABLE_ENTRY_STATUS,
    SUCCESS_STATUS,
} = require("../assets/variables");

exports.create = async function (req, res) {
    const employerId = req.params.id;
        const {
            name,
            isActive,
            startDate,
            endDate,
            payrollFrequency,
            contribution,
            type
        } = req.body;
    
        try {
            const newPlan = new Plan({
                _id: new mongoose.Types.ObjectId(),
                name,
                isActive,
                startDate,
                endDate,
                payrollFrequency,
                contribution,
                type,
                employer: employerId
            })
            await newPlan.save();
            await EmployerController.addPlan(employerId, newPlan._id);

        } catch (e) {
            return res
                .status(UNPROCESSABLE_ENTRY_STATUS)
                .json({error: "Oops! Something went Wrong"});
        }
    
        return res.status(SUCCESS_STATUS).json({createdConsumer: true});
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
    const body = req.body;

    const plan = await Plan.findOneAndUpdate({
        _id: packageId
    }, body, {returnDocument: "after"});

    res.send(plan);
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
    const plans = await Plan.find({})

    plans.forEach(async function(plan){
        if(plan.endDate < currentDate){
            const updatePlan = await Plan.findOneAndUpdate(
                {_id: plan._id},
                { $set: {"isActive": false }}
            );
        }
    })
}