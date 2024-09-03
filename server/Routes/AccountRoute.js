const express = require('express');
const AccountController = require('../Controllers/AccountController');

const router = express.Router();

router.get('/ViewAllAccountes', AccountController.ViewAccounts)

module.exports = router;