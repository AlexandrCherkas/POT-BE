const express = require("express");
const claimController = require("../controllers/ClaimController");
const router = express.Router();

router.post("/:consumerId/add", claimController.create);
router.get("/all", claimController.getClaims);
router.get("/:id", claimController.getClaimById);
router.patch("/:id/update", claimController.update);
router.delete("/:id/delete", claimController.delete);
router.delete("/deleteMultiple", claimController.deleteMultiple);
router.get("", claimController.search);

module.exports = router;