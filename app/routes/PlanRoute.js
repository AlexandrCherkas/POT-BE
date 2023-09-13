const express = require("express");
const planController = require("../controllers/PlanController");
const router = express.Router();

router.patch("/:id/addPlan", planController.create);

module.exports = router;