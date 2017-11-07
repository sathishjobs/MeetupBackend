"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require("../../../config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createToken = exports.createToken = function createToken(args) {

    var token = _jsonwebtoken2.default.sign({ id: args._id }, _config2.default.JWT_SECRET);
    console.log(token);
    return token;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3V0aWxzL2NyZWF0ZVRva2VuLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVRva2VuIiwidG9rZW4iLCJzaWduIiwiaWQiLCJhcmdzIiwiX2lkIiwiSldUX1NFQ1JFVCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7QUFFTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLE9BQU87O0FBRTlCLFFBQU1DLFFBQVEsdUJBQUlDLElBQUosQ0FBUyxFQUFDQyxJQUFHQyxLQUFLQyxHQUFULEVBQVQsRUFBdUIsaUJBQU9DLFVBQTlCLENBQWQ7QUFDQUMsWUFBUUMsR0FBUixDQUFZUCxLQUFaO0FBQ0EsV0FBT0EsS0FBUDtBQUNILENBTE0iLCJmaWxlIjoiY3JlYXRlVG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRva2VuID0gYXJncyA9PntcbiAgICBcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtpZDphcmdzLl9pZH0sY29uZmlnLkpXVF9TRUNSRVQpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICByZXR1cm4gdG9rZW47XG59XG5cbiAgICAiXX0=