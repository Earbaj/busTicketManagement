
const Operator = require("../../models/operator/operatormodel");

exports.createOperator = async (req, res) => {
  const operator = await Operator.create(req.body);
  res.status(201).json(operator);
};

exports.getOperators = async (req, res) => {
  const operators = await Operator.find();
  res.json(operators);
};
