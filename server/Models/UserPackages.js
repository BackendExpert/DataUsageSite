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
});

const UserPackages = mongoose.model('UserPackages', UserPackagesSchema);

module.exports = UserPackages;