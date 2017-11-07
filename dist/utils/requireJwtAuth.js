'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireJwtAuth = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

require('../modules/users/utils/passport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireJwtAuth = exports.requireJwtAuth = _passport2.default.authenticate('jwt', { session: false });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9yZXF1aXJlSnd0QXV0aC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlSnd0QXV0aCIsImF1dGhlbnRpY2F0ZSIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBRU8sSUFBTUEsMENBQWlCLG1CQUFTQyxZQUFULENBQXNCLEtBQXRCLEVBQTRCLEVBQUNDLFNBQVEsS0FBVCxFQUE1QixDQUF2QiIsImZpbGUiOiJyZXF1aXJlSnd0QXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5cbmltcG9ydCAnLi4vbW9kdWxlcy91c2Vycy91dGlscy9wYXNzcG9ydCc7XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlSnd0QXV0aCA9IHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0Jyx7c2Vzc2lvbjpmYWxzZX0pO1xuXG4iXX0=