const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({

});

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;