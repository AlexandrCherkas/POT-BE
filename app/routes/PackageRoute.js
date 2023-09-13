const express = require("express");
const packageController = require("../controllers/PackageController");
const router = express.Router();

router.patch("/:id/add", packageController.create);
router.get("/all", packageController.getPackages);
router.get("/:id", packageController.getPackageById);
router.patch("/:id/update", packageController.update);
router.delete("/:id/delete", packageController.delete);
router.delete("/deleteMultiple", packageController.deleteMultiple);

module.exports = router;