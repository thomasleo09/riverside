const express = require('express');
const testCtrl = require('../controllers/test.controller');
const router = express.Router();

router.get('/', testCtrl.testFunction);

module.exports = router;
