"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _controller = require("./controller");

var UserController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = new _express.Router();

routes.post('/users/auth0', UserController.loginWithAuth0);

exports.default = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udHJvbGxlciIsInJvdXRlcyIsInBvc3QiLCJsb2dpbldpdGhBdXRoMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7O0lBQVlBLGM7Ozs7QUFFWixJQUFNQyxTQUFTLHFCQUFmOztBQUVBQSxPQUFPQyxJQUFQLENBQVksY0FBWixFQUEyQkYsZUFBZUcsY0FBMUM7O2tCQUVlRixNIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgKiBhcyBVc2VyQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmNvbnN0IHJvdXRlcyA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVzLnBvc3QoJy91c2Vycy9hdXRoMCcsVXNlckNvbnRyb2xsZXIubG9naW5XaXRoQXV0aDApO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7Il19