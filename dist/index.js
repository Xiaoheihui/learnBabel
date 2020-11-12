"use strict";

var _dayjs = _interopRequireDefault(require("dayjs"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log((0, _dayjs["default"])().format('YYYY-MM-DD HH:mm:ss'));
var a = 1;

function decoratorFunc(target) {
  target.prototype.a = 1;
}

var b = decoratorFunc(_class = function b() {
  _classCallCheck(this, b);
}) || _class;