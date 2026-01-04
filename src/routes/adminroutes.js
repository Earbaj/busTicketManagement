const router = require("express").Router();
const auth = require("../middlewares/authmiddleware");
const role = require("../middlewares/rolemiddleware");

router.get("/dashboard", auth, role("ADMIN"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
