"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({
    email: String
});

exports.default = _mongoose2.default.model("User", UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL21vZGVsLmpzIl0sIm5hbWVzIjpbIlVzZXJTY2hlbWEiLCJlbWFpbCIsIlN0cmluZyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxxQkFBVztBQUMxQkMsV0FBUUM7QUFEa0IsQ0FBWCxDQUFuQjs7a0JBSWUsbUJBQVNDLEtBQVQsQ0FBZSxNQUFmLEVBQXNCSCxVQUF0QixDIiwiZmlsZSI6Im1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7U2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGVtYWlsIDogU3RyaW5nXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsVXNlclNjaGVtYSk7Il19