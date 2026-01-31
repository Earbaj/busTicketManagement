const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authroutes");
const operatorRoutes = require("./routes/operator/operatorroutes");
const busRoutes = require("./routes/bus/busroutes");
const routeRoutes = require("./routes/route/routeroutes");
const tripRoutes = require("./routes/trip/triproutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/operators", operatorRoutes);
app.use("/api/buses", busRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/trips", tripRoutes);

module.exports = app;
