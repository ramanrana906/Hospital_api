
const express = require("express");
const router = express.Router();
const patientApi = require('../../../controllers/api/v1/patients_api')
const passport = require('passport');



router.post('/register',patientApi.create);

router.post('/:id/create_report', patientApi.createReport);

router.post('/:id/create_report', patientApi.createReport);

router.get("/:id/all_reports",patientApi.allReports);

module.exports = router;