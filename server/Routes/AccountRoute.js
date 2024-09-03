const express = require('express');
const AccountController = require('../Controllers/AccountController');

const router = express.Router();

router.get('/ViewAllAccounts', AccountController.ViewAccounts)

module.exports = router;