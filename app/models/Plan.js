const { Schema, model } = require('mongoose');
const bcrypt = require("bcryptjs");

const planSchema = new Schema({
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
    type: {
        type: String,
        required: 'Name is required'
    }
      
});

module.exports = model('Plan', planSchema);