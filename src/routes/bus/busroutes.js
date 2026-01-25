const router = require("express").Router();
const auth = require("../../middlewares/authmiddleware");
const role = require("../../middlewares/rolemiddleware");
const { createBus, getBuses } = require("../../controller/bus/buscontroller");

router.post("/", auth, role("ADMIN"), createBus);
router.get("/", auth, role("ADMIN"), getBuses);

module.exports = router;
