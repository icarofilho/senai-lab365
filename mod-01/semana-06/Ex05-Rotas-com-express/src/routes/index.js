const router = require("express").Router();

const ReturnObj = require("../controller/ReturnObj");

router.post("/", ReturnObj.returnObj);

module.exports = router;
