const express = require('express');
const { createEnquiry } = require('../controller/enquiry');
const router = express.Router();

router.post('/enquiries', createEnquiry);

module.exports = router;
