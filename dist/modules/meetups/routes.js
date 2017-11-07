'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var MeetupController = _interopRequireWildcard(_controller);

var _requireJwtAuth = require('../../utils/requireJwtAuth');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = new _express.Router();

routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', _requireJwtAuth.requireJwtAuth, MeetupController.getAllMeetups);
exports.default = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL21lZXR1cHMvcm91dGVzLmpzIl0sIm5hbWVzIjpbIk1lZXR1cENvbnRyb2xsZXIiLCJyb3V0ZXMiLCJwb3N0IiwiY3JlYXRlTWVldHVwIiwiZ2V0IiwiZ2V0QWxsTWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0lBQVlBLGdCOztBQUVaOzs7O0FBRUEsSUFBTUMsU0FBUyxxQkFBZjs7QUFFQUEsT0FBT0MsSUFBUCxDQUFZLFVBQVosRUFBdUJGLGlCQUFpQkcsWUFBeEM7QUFDQUYsT0FBT0csR0FBUCxDQUFXLFVBQVgsa0NBQXFDSixpQkFBaUJLLGFBQXREO2tCQUNlSixNIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgTWVldHVwQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyByZXF1aXJlSnd0QXV0aCB9IGZyb20gXCIuLi8uLi91dGlscy9yZXF1aXJlSnd0QXV0aFwiO1xuXG5jb25zdCByb3V0ZXMgPSBuZXcgUm91dGVyKCk7XG5cbnJvdXRlcy5wb3N0KCcvbWVldHVwcycsTWVldHVwQ29udHJvbGxlci5jcmVhdGVNZWV0dXApO1xucm91dGVzLmdldCgnL21lZXR1cHMnLHJlcXVpcmVKd3RBdXRoLE1lZXR1cENvbnRyb2xsZXIuZ2V0QWxsTWVldHVwcyk7XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7ICJdfQ==