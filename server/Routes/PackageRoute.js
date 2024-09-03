const express = require('express');
const PackageController = require('../Controllers/PackageController');

const router = express.Router();

router.post('/CreatePackage', PackageController.CreatePackage)
router.get('/AllPackages', PackageController.AllPackages)
router.get('/ViewOnPackge/:id', PackageController.OnePackage)

module.exports = router;