const Bus = require("../../models/bus/busmodel");

exports.createBus = async (req, res) => {
  const bus = await Bus.create(req.body);
  res.status(201).json(bus);
};

exports.getBuses = async (req, res) => {
  const buses = await Bus.find().populate("operator");
  res.json(buses);
};
