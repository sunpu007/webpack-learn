"use strict";

var _add = _interopRequireDefault(require("./add"));

var _minus = require("./minus");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

var sum = (0, _add["default"])(1, 2);
var division = (0, _minus.minus)(2, 1);
console.log(sum);
console.log(division);