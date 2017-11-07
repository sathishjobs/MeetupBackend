'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginWithAuth0 = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _createToken = require('./utils/createToken');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var loginWithAuth0 = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var args, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = _objectWithoutProperties(req.body, []);
                        _context.prev = 1;
                        _context.next = 4;
                        return _model2.default.create(args);

                    case 4:
                        user = _context.sent;


                        console.log(user);

                        return _context.abrupt('return', res.status(200).json({
                            success: true,
                            user: user,
                            token: 'JWT ' + (0, _createToken.createToken)(user)
                        }));

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](1);
                        return _context.abrupt('return', res.status(400).json({ error: true, errorMessage: 'Something wrong with auth' }));

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[1, 9]]);
    }));

    return function loginWithAuth0(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
exports.loginWithAuth0 = loginWithAuth0;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsibG9naW5XaXRoQXV0aDAiLCJyZXEiLCJyZXMiLCJhcmdzIiwiYm9keSIsImNyZWF0ZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJ0b2tlbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7QUFFTyxJQUFNQTtBQUFBLHVFQUFpQixpQkFBTUMsR0FBTixFQUFVQyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsNEJBRGdCLDRCQUNSRixJQUFJRyxJQURJO0FBQUE7QUFBQTtBQUFBLCtCQUlILGdCQUFLQyxNQUFMLENBQVlGLElBQVosQ0FKRzs7QUFBQTtBQUloQkcsNEJBSmdCOzs7QUFNdEJDLGdDQUFRQyxHQUFSLENBQVlGLElBQVo7O0FBTnNCLHlEQVFmSixJQUFJTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJDLHFDQUFVLElBRGM7QUFFeEJMLHNDQUZ3QjtBQUd4Qk0sNENBQWEsOEJBQVlOLElBQVo7QUFIVyx5QkFBckIsQ0FSZTs7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFjZkosSUFBSU8sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUNHLE9BQVEsSUFBVCxFQUFjQyxjQUFlLDJCQUE3QixFQUFyQixDQWRlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU4iLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVsXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVRva2VuIH0gZnJvbSAnLi91dGlscy9jcmVhdGVUb2tlbic7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhBdXRoMCA9IGFzeW5jKHJlcSxyZXMpID0+IHtcbiAgICBjb25zdCB7Li4uYXJnc30gPSByZXEuYm9keTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZShhcmdzKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzcyA6IHRydWUsXG4gICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgdG9rZW46YEpXVCAke2NyZWF0ZVRva2VuKHVzZXIpfWBcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogdHJ1ZSxlcnJvck1lc3NhZ2UgOiAnU29tZXRoaW5nIHdyb25nIHdpdGggYXV0aCd9KVxuICAgIH1cbn1cblxuIl19