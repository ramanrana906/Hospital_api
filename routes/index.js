const express = require("express");
const { model } = require("mongoose");
const router = express.Router();


router.use('/api',require('./api'));


module.exports = router;