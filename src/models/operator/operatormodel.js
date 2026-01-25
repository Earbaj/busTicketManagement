const mongoose = require('mongoose');

const OperatorSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        contactPhone: String,
        contactEmail: String,
    },
    { timestamps: true}
);

module.exports = mongoose.model('Operator', OperatorSchema);