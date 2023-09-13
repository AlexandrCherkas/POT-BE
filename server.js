require("dotenv").config();
const express = require("express");
const task = require("./scheduler")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./app/routes/UserRoute");
const employerRoute = require("./app/routes/EmployerRoute");
const consumerRoute = require("./app/routes/ConsumerRoute");
const packageRoute = require("./app/routes/PackageRoute");
const claimRoute = require("./app/routes/ClaimRoute");
const planRoute = require("./app/routes/PlanRoute");
const upload = require("./app/routes/Upload");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
let gfs;

app.use(express.static(path.join(__dirname, "public/ctcfpg7-fe")));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use("/api/users", userRoute);
app.use("/api/employers", employerRoute);
app.use("/api/consumers", consumerRoute);
app.use("/api/packages", packageRoute);
app.use("/api/claims", claimRoute);
app.use("/api/plans", planRoute);

app.use("/file", upload);

app.get("/file/:filename", (req, res) => {
  gfs
  .find( { filename: req.params.filename } )
  .toArray((err, file) => {
    gfs
    .openDownloadStreamByName(req.params.filename)
    .pipe(res);
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/ctcfpg7-fe/index.html"));
});

mongoose.connect(process.env.DBURL).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

const dbConnection = mongoose.connection;
dbConnection.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(dbConnection.db, {
    bucketName: 'uploads'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});




