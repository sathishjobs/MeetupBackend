'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./config/db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('./config/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _modules = require('./modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/**
 * Database
 */
(0, _db2.default)();

/**
 * Middlewares
 */
(0, _middleware2.default)(app);

app.use('/api', [_modules.MeetupRoutes, _modules.GroupRoutes, _modules.userRoutes]);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('App listen to port' + PORT);
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImxpc3RlbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBLElBQU1BLE1BQU0sd0JBQVo7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQSwwQkFBa0JBLEdBQWxCOztBQUVBQSxJQUFJQyxHQUFKLENBQVEsTUFBUixFQUFlLGtFQUFmOztBQUVBLElBQU1DLE9BQU9DLFFBQVFDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQzs7QUFFQUYsSUFBSUssTUFBSixDQUFXSCxJQUFYLEVBQWdCLGVBQU07QUFDbEIsUUFBR0ksR0FBSCxFQUFPO0FBQ0hDLGdCQUFRQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxLQUZELE1BRU87QUFDSEMsZ0JBQVFFLEdBQVIsd0JBQWlDUCxJQUFqQztBQUNIO0FBQ0osQ0FORCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGRiQ29uZmlnIGZyb20gJy4vY29uZmlnL2RiJztcbmltcG9ydCBtaWRkbGV3YXJlc0NvbmZpZyBmcm9tICcuL2NvbmZpZy9taWRkbGV3YXJlJztcbmltcG9ydCB7IE1lZXR1cFJvdXRlcyxHcm91cFJvdXRlcyx1c2VyUm91dGVzIH0gZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vKipcbiAqIERhdGFiYXNlXG4gKi9cbmRiQ29uZmlnKCk7XG5cbi8qKlxuICogTWlkZGxld2FyZXNcbiAqL1xubWlkZGxld2FyZXNDb25maWcoYXBwKTtcblxuYXBwLnVzZSgnL2FwaScsW01lZXR1cFJvdXRlcyxHcm91cFJvdXRlcyx1c2VyUm91dGVzXSk7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4oUE9SVCxlcnIgPT57XG4gICAgaWYoZXJyKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBcHAgbGlzdGVuIHRvIHBvcnQke1BPUlR9YClcbiAgICB9XG59KSJdfQ==