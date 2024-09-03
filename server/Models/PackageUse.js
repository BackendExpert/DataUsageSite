const mongoose = require('mongoose');

const PackageUsageSchema = new mongoose.Schema({
    UserEmail: {
        type: String,
        required: true,
        unique:true,
    },
    PackageName: {
        type: Number,
        required: true,
    },
});

const PackageUsage = mongoose.model('PackageUsage', PackageUsageSchema);

module.exports = PackageUsage;