const Route = require("../../models//route/routemodel");

exports.createRoute = async (req, res) => {
  const route = await Route.create(req.body);
  res.status(201).json(route);
};

exports.getRoutes = async (req, res) => {
  const routes = await Route.find();
  res.json(routes);
};
