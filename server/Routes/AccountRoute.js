const express = require('express');
const AccountController = require('../Controllers/AccountController');

const router = express.Router();

router.get('/ViewAllAccounts', AccountController.ViewAccounts)
router.get('/ViewOneAccount/:id', AccountController.ViewOneAccout)

module.exports = router;