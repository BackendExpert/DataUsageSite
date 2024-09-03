const express = require('express');
const PackageController = require('../Controllers/PackageController');

const router = express.Router();

router.post('/CreatePackage', PackageController.CreatePackage)
router.post('/ViewPackage', PackageController.AllPackages)

module.exports = router;