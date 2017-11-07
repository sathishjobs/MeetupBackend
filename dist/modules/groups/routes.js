'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var GroupController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

router.post('/groups/new/', GroupController.createGroup);
router.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);
router.get('/groups/:groupId/meetups', GroupController.getGroupMeetups);
exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2dyb3Vwcy9yb3V0ZXMuanMiXSwibmFtZXMiOlsiR3JvdXBDb250cm9sbGVyIiwicm91dGVyIiwicG9zdCIsImNyZWF0ZUdyb3VwIiwiY3JlYXRlR3JvdXBNZWV0dXAiLCJnZXQiLCJnZXRHcm91cE1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztJQUFZQSxlOzs7O0FBRVosSUFBTUMsU0FBUyxxQkFBZjs7QUFFQUEsT0FBT0MsSUFBUCxDQUFZLGNBQVosRUFBMkJGLGdCQUFnQkcsV0FBM0M7QUFDQUYsT0FBT0MsSUFBUCxDQUFZLDhCQUFaLEVBQTJDRixnQkFBZ0JJLGlCQUEzRDtBQUNBSCxPQUFPSSxHQUFQLENBQVcsMEJBQVgsRUFBc0NMLGdCQUFnQk0sZUFBdEQ7a0JBQ2VMLE0iLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBHcm91cENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL2dyb3Vwcy9uZXcvJyxHcm91cENvbnRyb2xsZXIuY3JlYXRlR3JvdXApO1xucm91dGVyLnBvc3QoJy9ncm91cHMvOmdyb3VwSWQvbWVldHVwcy9uZXcnLEdyb3VwQ29udHJvbGxlci5jcmVhdGVHcm91cE1lZXR1cCk7XG5yb3V0ZXIuZ2V0KCcvZ3JvdXBzLzpncm91cElkL21lZXR1cHMnLEdyb3VwQ29udHJvbGxlci5nZXRHcm91cE1lZXR1cHMpO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==