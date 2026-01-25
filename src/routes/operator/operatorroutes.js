const router = require("express").Router();
const auth = require("../../middlewares/authmiddleware");
const role = require("../../middlewares/rolemiddleware");
const {
  createOperator,
  getOperators,
} = require("../../controller/operator/operatorcontroller");

router.post("/", auth, role("ADMIN"), createOperator);
router.get("/", auth, role("ADMIN"), getOperators);

module.exports = router;
