const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema(
  {
    from: { type: String, required: true },
    to: { type: String, required: true },
    distanceKm: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Route", routeSchema);
