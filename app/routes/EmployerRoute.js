const express = require("express");
const employerController = require("../controllers/EmployerController");
const router = express.Router();

router.post("/add", employerController.create);

router.get("/names", employerController.getNames);
router.get("/:id", employerController.getEmployerById);
router.get("/:id/plans", employerController.getPlans); 
router.get("/allEmployers", employerController.getEmployers);
router.get("/:id/plans/:planId", employerController.getEmployerPlanById); // update

router.patch("/:id/update", employerController.update);
router.patch("/:id/plans/:planId/update", employerController.updateEmployersPlanByPlanId);
router.patch("/:id/removePlan/:planId", employerController.removePlan);
router.patch("/:id/addPlan", employerController.addPlan);
router.delete("/delete/:id", employerController.delete);
router.delete("/deleteMultiple", employerController.deleteMultiple);
router.get("", employerController.search);

module.exports = router;