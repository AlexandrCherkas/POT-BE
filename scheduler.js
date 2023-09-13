const cron = require("node-cron")

const PlanController = require("./app/controllers/PlanController");
const PackageController = require("./app/controllers/PackageController");

 cron.schedule("0 0 * * *",() => {
    const date = new Date();

    PlanController.checkDate(date);
    PackageController.checkDate(date);
  });