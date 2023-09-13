const express = require("express");
const consumerController = require("../controllers/ConsumerController");
const router = express.Router();

router.post("/:employerId/add", consumerController.create);
router.get("/all", consumerController.getConsumers);
router.get("/:employerId/all", consumerController.getConsumersByEmployerId);
router.get("/:id", consumerController.getConsumerById);

router.patch("/:id/update", consumerController.update);
router.delete("/:id/delete/:consumerId", consumerController.deleteConsumer);
router.delete("/deleteMultiple", consumerController.deleteMultiple);
router.get("/search", consumerController.search);
router.get("", consumerController.searchConsumerFromEmployer);
router.get("/:consumerId/package/:packageId", consumerController.getPackageFromConsumer);

module.exports = router;