'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: false }));
    app.use((0, _morgan2.default)('dev'));
    app.use(_passport2.default.initialize());
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiaW5pdGlhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsZUFBTztBQUNsQkEsUUFBSUMsR0FBSixDQUFRLHFCQUFXQyxJQUFYLEVBQVI7QUFDQUYsUUFBSUMsR0FBSixDQUFRLHFCQUFXRSxVQUFYLENBQXNCLEVBQUNDLFVBQVMsS0FBVixFQUF0QixDQUFSO0FBQ0FKLFFBQUlDLEdBQUosQ0FBUSxzQkFBTyxLQUFQLENBQVI7QUFDQUQsUUFBSUMsR0FBSixDQUFRLG1CQUFTSSxVQUFULEVBQVI7QUFDSCxDIiwiZmlsZSI6Im1pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhcHAgPT4ge1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDpmYWxzZX0pKTtcbiAgICBhcHAudXNlKG1vcmdhbignZGV2JykpO1xuICAgIGFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbn0iXX0=