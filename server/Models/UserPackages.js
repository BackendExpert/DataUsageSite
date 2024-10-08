const mongoose = require('mongoose');

const UserPackagesSchema = new mongoose.Schema({
    UserEmail: {
        type: String,
        required: true,
    },
    PackageName: {
        type: Number,
        required: true,
    },
    PackageStartAt: {
        type: Date,
        required: true,
    },
    PackageEndAt: {
        type: Date,
        required: true,
    },
    State: {
        type: String,
        required: true,
        default: 'Active',
    }
});

const UserPackages = mongoose.model('UserPackages', UserPackagesSchema);

module.exports = UserPackages;