const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const mongooseIncrement = require('mongoose-increment');
const increment = mongooseIncrement(mongoose);

const claimSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    serviceDate: {
        type: Date,
        required: 'Service date is required'
    },
    amount: {
        type: Number,
        required: 'Amount is required'
    },
    isApproved: {
        type: Boolean || null
    },
    receipt:{
        type: String,
        required: 'Name is required'
    },
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'Employer'
    },
    consumer: {
        type: Schema.Types.ObjectId,
        ref: 'Consumer'
    },
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package'
    }
});

claimSchema.plugin(increment, {
    unique: true,
    type: String,
    modelName: 'increment',
    fieldName: 'claimNumber',
    prefix: 'CL'
})

module.exports = model('Claim', claimSchema);