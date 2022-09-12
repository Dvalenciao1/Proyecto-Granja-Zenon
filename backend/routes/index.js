var express = require("express");
var router = express.Router();

const humedad = require("../components/humedad/routes");

/* GET home page. */
router.use("/humedad", humedad);

module.exports = router;
