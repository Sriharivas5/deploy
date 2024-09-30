const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.post("/postdummy", controllers.createDummy);
router.get("/getdummies", controllers.getDummy);

module.exports = router;
