const router = require("express").Router();
const auth = require("../../middlewares/authmiddleware");
const role = require("../../middlewares/rolemiddleware");
const {
  createTrip,
  getTrips,
  delayTrip,
  cancelTrip,
} = require("../../controller/trip/tripcontroller");

// Public dashboard
router.get("/", getTrips);

// Admin only
router.post("/", auth, role("ADMIN"), createTrip);
router.patch("/:id/delay", auth, role("ADMIN"), delayTrip);
router.patch("/:id/cancel", auth, role("ADMIN"), cancelTrip);

module.exports = router;
