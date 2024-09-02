const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    PackageName: {
        type: String,
        required: true,
        unique:true,
    },
    pkData: {
        type: Number,
        required: true,
    },
    pkDesc: {
        type: String,
        required: true,
    },
    pkFreeData: {
        type: Number,
        required: true,
    },
    pkStadndedData: {
        type: Number,
        required: true,
    },
    pkPrice: {
        type: Number,
        required: true,
    },
    pkFor: {
        type: String,
        required: true,
    },
});

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;