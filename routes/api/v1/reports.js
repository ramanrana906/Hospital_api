const express = require("express");
const router = express.Router();
const reportsController = require("../../../controllers/api/v1/reports_api");

router.get("/:status", reportsController.status);

module.exports = router;