const router = require("express").Router();
const auth = require("../../middlewares/authmiddleware");
const role = require("../../middlewares/rolemiddleware");
const { createRoute, getRoutes } = require("../../controller/route/routecontroller");

router.post("/", auth, role("ADMIN"), createRoute);
router.get("/", auth, role("ADMIN"), getRoutes);

module.exports = router;
