const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/trail/", require("./trailRoute.js"));
router.use("/api/review/", require("./reviewRoute.js"));

// router.all("*", (req, res) => {
//   res.status(400).send();
// });

module.exports = router;
