const mongoose = require('mongoose');

const busSchema = new mongoose.Schema(
    {
        busNumber: {type: String, required: true, unique: true},
        operator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Operator',
            required: true,
        },
        type: {
            type: String,
            enum: ['AC', 'NON_AC'],
            required: true,
        },
        totalSeats: {type: Number, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model('Bus', busSchema);