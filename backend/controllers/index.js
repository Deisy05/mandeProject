import client from "./client";
import worker from "./worker";
import labor from "./labor";
import payroll from "./payroll";
import payment_method from "./payment_method";
import workerLabor from "./workerLabor";

const controller = {
  client,
  worker,
  labor,
  payroll,
  payment_method,
  workerLabor,
};

module.exports = controller;
