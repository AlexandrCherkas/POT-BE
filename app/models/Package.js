const { Schema, model } = require('mongoose');

const packageSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    isActive: {
        type: Boolean
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    payrollFrequency: {
        type: String,
        required: 'Name is required'
    },
    contribution: {
        type: Number
    },
    availableAmount: {
        type: Number
    },
    type: {
        type: String,
        required: 'Name is required'
    },
    election: {
        type: Number
    }
   
});

module.exports = model('Package', packageSchema);