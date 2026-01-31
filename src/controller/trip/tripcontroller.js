const Trip = require("../../models/trip/tripmodel");

exports.createTrip = async (req, res) => {
  const trip = await Trip.create(req.body);
  res.status(201).json(trip);
};

exports.getTrips = async (req, res) => {
  const trips = await Trip.find({ status: { $ne: "CANCELLED" } })
    .populate({
      path: "bus",
      populate: { path: "operator" },
    })
    .populate("route");

  res.json(trips);
};

exports.delayTrip = async (req, res) => {
  const { minutes } = req.body;

  const trip = await Trip.findByIdAndUpdate(
    req.params.id,
    {
      status: "DELAYED",
      delayMinutes: minutes,
    },
    { new: true }
  );

  res.json(trip);
};

exports.cancelTrip = async (req, res) => {
  const trip = await Trip.findByIdAndUpdate(
    req.params.id,
    { status: "CANCELLED" },
    { new: true }
  );

  res.json(trip);
};
