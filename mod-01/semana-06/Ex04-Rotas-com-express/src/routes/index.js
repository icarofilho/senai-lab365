const router = require("express").Router();

const MyName = require("../controller/MyNameController");

router.get("/:name", MyName.myName);

module.exports = router;
