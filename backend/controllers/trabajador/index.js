import create from "./create";
import read from "./read";
import update from "./update";
import eliminate from "./delete";
import authentication from "./authentication";

const worker = {
  create,
  read,
  update,
  eliminate,
  authentication,
};

module.exports = worker;
