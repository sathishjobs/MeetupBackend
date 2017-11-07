'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllMeetups = exports.createMeetup = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createMeetup = exports.createMeetup = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, title, description, newMeetup;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, title = _req$body.title, description = _req$body.description;
                        newMeetup = new _model2.default({ title: title, description: description });
                        _context.prev = 2;
                        _context.t0 = res.status(201);
                        _context.next = 6;
                        return newMeetup.save();

                    case 6:
                        _context.t1 = _context.sent;
                        _context.t2 = {
                            meetup: _context.t1
                        };
                        return _context.abrupt('return', _context.t0.json.call(_context.t0, _context.t2));

                    case 11:
                        _context.prev = 11;
                        _context.t3 = _context['catch'](2);
                        return _context.abrupt('return', res.status(_context.t3.status).json({ error: true, message: 'Error with Meetup' }));

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 11]]);
    }));

    return function createMeetup(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var getAllMeetups = exports.getAllMeetups = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.t0 = res.status(200);
                        _context2.next = 4;
                        return _model2.default.find({});

                    case 4:
                        _context2.t1 = _context2.sent;
                        _context2.t2 = {
                            meetups: _context2.t1
                        };
                        return _context2.abrupt('return', _context2.t0.json.call(_context2.t0, _context2.t2));

                    case 9:
                        _context2.prev = 9;
                        _context2.t3 = _context2['catch'](0);
                        return _context2.abrupt('return', res.status(_context2.t3.status).json({ error: true, message: 'Error with meetups' }));

                    case 13:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 9]]);
    }));

    return function getAllMeetups(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL21lZXR1cHMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNZWV0dXAiLCJyZXEiLCJyZXMiLCJib2R5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5ld01lZXR1cCIsInN0YXR1cyIsInNhdmUiLCJtZWV0dXAiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0QWxsTWVldHVwcyIsImZpbmQiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUE7QUFBQSx1RUFBZSxpQkFBTUMsR0FBTixFQUFVQyxHQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FDS0QsSUFBSUUsSUFEVCxFQUNqQkMsS0FEaUIsYUFDakJBLEtBRGlCLEVBQ1ZDLFdBRFUsYUFDVkEsV0FEVTtBQUVsQkMsaUNBRmtCLEdBRU4sb0JBQVcsRUFBQ0YsWUFBRCxFQUFPQyx3QkFBUCxFQUFYLENBRk07QUFBQTtBQUFBLHNDQUtiSCxJQUFJSyxNQUFKLENBQVcsR0FBWCxDQUxhO0FBQUE7QUFBQSwrQkFLdUJELFVBQVVFLElBQVYsRUFMdkI7O0FBQUE7QUFBQTtBQUFBO0FBS1NDLGtDQUxUO0FBQUE7QUFBQSxxRUFLR0MsSUFMSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFPYlIsSUFBSUssTUFBSixDQUFXLFlBQUVBLE1BQWIsRUFBcUJHLElBQXJCLENBQTBCLEVBQUNDLE9BQVEsSUFBVCxFQUFjQyxTQUFVLG1CQUF4QixFQUExQixDQVBhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFZQSxJQUFNQztBQUFBLHdFQUFnQixrQkFBT1osR0FBUCxFQUFXQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUVkQSxJQUFJSyxNQUFKLENBQVcsR0FBWCxDQUZjO0FBQUE7QUFBQSwrQkFFd0IsZ0JBQU9PLElBQVAsQ0FBWSxFQUFaLENBRnhCOztBQUFBO0FBQUE7QUFBQTtBQUVRQyxtQ0FGUjtBQUFBO0FBQUEsdUVBRUVMLElBRkY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBSWRSLElBQUlLLE1BQUosQ0FBVyxhQUFFQSxNQUFiLEVBQXFCRyxJQUFyQixDQUEwQixFQUFDQyxPQUFRLElBQVQsRUFBZUMsU0FBVSxvQkFBekIsRUFBMUIsQ0FKYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOIiwiZmlsZSI6ImNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lZXR1cCA9IGFzeW5jKHJlcSxyZXMpID0+IHtcbiAgICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9ufSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IG5ld01lZXR1cCA9IG5ldyBNZWV0dXAoe3RpdGxlLGRlc2NyaXB0aW9ufSk7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe21lZXR1cDogYXdhaXQgbmV3TWVldHVwLnNhdmUoKX0pO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdFcnJvciB3aXRoIE1lZXR1cCd9KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEFsbE1lZXR1cHMgPSBhc3luYyAocmVxLHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVldHVwcyA6IGF3YWl0IE1lZXR1cC5maW5kKHt9KX0pXG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKHtlcnJvciA6IHRydWUsIG1lc3NhZ2UgOiAnRXJyb3Igd2l0aCBtZWV0dXBzJ30pOztcbiAgICB9XG59Il19