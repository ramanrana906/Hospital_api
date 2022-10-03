const express = require("express");
const router = express.Router();
const doctorApi = require("../../../controllers/api/v1/doctors_api")

router.get('/register',doctorApi.create);
router.post('/login',doctorApi.createSession);
module.exports = router;