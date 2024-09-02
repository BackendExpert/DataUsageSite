const express = require('express');
const PackageController = require('../Controllers/PackageController');

const router = express.Router();

router.post('/CreatePackage', PackageController.CreatePackage)

module.exports = router;