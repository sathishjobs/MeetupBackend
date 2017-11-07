'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('passport-jwt');

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _config = require('../../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * JWT STRATEGY
 */

var jwtOpts = {
    // Tell passport to take the jwt token from the Authorization headers
    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: _config2.default.JWT_SECRET
};

var jwtStrategy = new _passportJwt.Strategy(jwtOpts, function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, done) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        console.log("fromhere");
                        _context.next = 4;
                        return _model2.default.findById(payload.id);

                    case 4:
                        user = _context.sent;


                        if (user) {
                            done(null, user);
                        } else {
                            done(null, false);
                        }
                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', done(_context.t0, false));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

_passport2.default.use(jwtStrategy);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3V0aWxzL3Bhc3Nwb3J0LmpzIl0sIm5hbWVzIjpbImp3dE9wdHMiLCJqd3RGcm9tUmVxdWVzdCIsImZyb21BdXRoSGVhZGVyV2l0aFNjaGVtZSIsInNlY3JldE9yS2V5IiwiSldUX1NFQ1JFVCIsImp3dFN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJjb25zb2xlIiwibG9nIiwiZmluZEJ5SWQiLCJpZCIsInVzZXIiLCJ1c2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0FBSUMsSUFBTUEsVUFBVTtBQUNaO0FBQ0RDLG9CQUFpQix3QkFBV0Msd0JBQVgsQ0FBb0MsS0FBcEMsQ0FGSjtBQUdiQyxpQkFBYyxpQkFBT0M7QUFIUixDQUFoQjs7QUFNQSxJQUFNQyxjQUFjLDBCQUFnQkwsT0FBaEI7QUFBQSx1RUFBd0IsaUJBQU9NLE9BQVAsRUFBZUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFcENDLGdDQUFRQyxHQUFSLENBQVksVUFBWjtBQUZvQztBQUFBLCtCQUdqQixnQkFBS0MsUUFBTCxDQUFjSixRQUFRSyxFQUF0QixDQUhpQjs7QUFBQTtBQUc5QkMsNEJBSDhCOzs7QUFLcEMsNEJBQUdBLElBQUgsRUFBUTtBQUNKTCxpQ0FBSyxJQUFMLEVBQVVLLElBQVY7QUFDSCx5QkFGRCxNQUVPO0FBQ0hMLGlDQUFLLElBQUwsRUFBVSxLQUFWO0FBQ0g7QUFUbUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFXN0JBLGtCQUFPLEtBQVAsQ0FYNkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBcEI7O0FBZUEsbUJBQVNNLEdBQVQsQ0FBYVIsV0FBYiIsImZpbGUiOiJwYXNzcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQge1N0cmF0ZWd5IGFzIEpXVFN0cmF0ZWd5LCBFeHRyYWN0Snd0fSBmcm9tICdwYXNzcG9ydC1qd3QnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnO1xuXG4vKipcbiAqIEpXVCBTVFJBVEVHWVxuICovXG5cbiBjb25zdCBqd3RPcHRzID0ge1xuICAgICAvLyBUZWxsIHBhc3Nwb3J0IHRvIHRha2UgdGhlIGp3dCB0b2tlbiBmcm9tIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlcnNcbiAgICBqd3RGcm9tUmVxdWVzdCA6IEV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJXaXRoU2NoZW1lKCdqd3QnKSxcbiAgICBzZWNyZXRPcktleSA6IGNvbmZpZy5KV1RfU0VDUkVUXG4gICAgfVxuXG4gY29uc3Qgand0U3RyYXRlZ3kgPSBuZXcgSldUU3RyYXRlZ3koand0T3B0cyxhc3luYyAocGF5bG9hZCxkb25lKT0+e1xuICAgICB0cnl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcImZyb21oZXJlXCIpO1xuICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocGF5bG9hZC5pZCk7XG4gICAgICAgICBcbiAgICAgICAgIGlmKHVzZXIpeyAgICAgICAgICAgIFxuICAgICAgICAgICAgIGRvbmUobnVsbCx1c2VyKTtcbiAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgZG9uZShudWxsLGZhbHNlKVxuICAgICAgICAgfVxuICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgcmV0dXJuIGRvbmUoZSxmYWxzZSk7XG4gICAgIH1cbiB9KTtcblxuIHBhc3Nwb3J0LnVzZShqd3RTdHJhdGVneSk7Il19