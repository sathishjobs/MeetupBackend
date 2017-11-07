'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGroupMeetups = exports.createGroupMeetup = exports.createGroup = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _meetups = require('../meetups');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createGroup = exports.createGroup = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, name, description, group;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, name = _req$body.name, description = _req$body.description;

                        if (name) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'Name must be provided!' }));

                    case 5:
                        if (!(typeof name !== 'string')) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'Name must be string!' }));

                    case 9:
                        if (!(name.length < 5)) {
                            _context.next = 11;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'Name must have 5 characters long!' }));

                    case 11:
                        if (description) {
                            _context.next = 15;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'description must be provided!' }));

                    case 15:
                        if (!(typeof description !== 'string')) {
                            _context.next = 19;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'description must be string!' }));

                    case 19:
                        if (!(description.length < 5)) {
                            _context.next = 21;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'description must have 10 characters long!' }));

                    case 21:
                        group = new _model2.default({ name: name, description: description });
                        _context.prev = 22;
                        _context.t0 = res.status(200);
                        _context.next = 26;
                        return group.save();

                    case 26:
                        _context.t1 = _context.sent;
                        _context.t2 = {
                            error: false,
                            group: _context.t1
                        };
                        return _context.abrupt('return', _context.t0.json.call(_context.t0, _context.t2));

                    case 31:
                        _context.prev = 31;
                        _context.t3 = _context['catch'](22);
                        return _context.abrupt('return', res.status(400).json({ error: true, message: 'Error when created group!' }));

                    case 34:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[22, 31]]);
    }));

    return function createGroup(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createGroupMeetup = exports.createGroupMeetup = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$body2, title, description, groupId, _ref3, meetup;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
                        groupId = req.params.groupId;

                        if (title) {
                            _context2.next = 6;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'title must be provided!' }));

                    case 6:
                        if (!(typeof title !== 'string')) {
                            _context2.next = 10;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'title must be string!' }));

                    case 10:
                        if (!(title.length < 5)) {
                            _context2.next = 12;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'title must have 5 characters long!' }));

                    case 12:
                        if (description) {
                            _context2.next = 16;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'description must be provided!' }));

                    case 16:
                        if (!(typeof description !== 'string')) {
                            _context2.next = 20;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'description must be string!' }));

                    case 20:
                        if (!(description.length < 5)) {
                            _context2.next = 22;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'description must have 10 characters long!' }));

                    case 22:
                        if (groupId) {
                            _context2.next = 24;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'Group id must be provided' }));

                    case 24:
                        _context2.prev = 24;
                        _context2.next = 27;
                        return _model2.default.addMeetup(groupId, { title: title, description: description });

                    case 27:
                        _ref3 = _context2.sent;
                        meetup = _ref3.meetup;
                        return _context2.abrupt('return', res.status(200).json({ error: false, meetup: meetup, group: group }));

                    case 32:
                        _context2.prev = 32;
                        _context2.t0 = _context2['catch'](24);
                        return _context2.abrupt('return', res.status(400).json({ error: true, message: 'Meetup cannot be created!', e: _context2.t0 }));

                    case 35:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[24, 32]]);
    }));

    return function createGroupMeetup(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var getGroupMeetups = exports.getGroupMeetups = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var groupId, group;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        groupId = req.params.groupId;

                        if (groupId) {
                            _context3.next = 3;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).json({ error: true, message: 'You need to provided a group id' }));

                    case 3:
                        _context3.next = 5;
                        return _model2.default.findById(groupId);

                    case 5:
                        group = _context3.sent;

                        if (group) {
                            _context3.next = 8;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).json({ error: true, message: 'Group not exist' }));

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = res.status(200);
                        _context3.next = 12;
                        return _meetups.Meetup.find({ group: groupId }).populate('group', 'name');

                    case 12:
                        _context3.t1 = _context3.sent;
                        _context3.t2 = {
                            error: false,
                            meetups: _context3.t1
                        };
                        return _context3.abrupt('return', _context3.t0.json.call(_context3.t0, _context3.t2));

                    case 17:
                        _context3.prev = 17;
                        _context3.t3 = _context3['catch'](8);
                        return _context3.abrupt('return', res.status(400).json({ error: true, message: 'Cannot fetch meetup' }));

                    case 20:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[8, 17]]);
    }));

    return function getGroupMeetups(_x5, _x6) {
        return _ref4.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2dyb3Vwcy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUdyb3VwIiwicmVxIiwicmVzIiwiYm9keSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJncm91cCIsInNhdmUiLCJjcmVhdGVHcm91cE1lZXR1cCIsInRpdGxlIiwiZ3JvdXBJZCIsInBhcmFtcyIsImFkZE1lZXR1cCIsIm1lZXR1cCIsImUiLCJnZXRHcm91cE1lZXR1cHMiLCJmaW5kQnlJZCIsImZpbmQiLCJwb3B1bGF0ZSIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDTyxJQUFNQTtBQUFBLHVFQUFjLGlCQUFPQyxHQUFQLEVBQVdDLEdBQVg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUluQkQsSUFBSUUsSUFKZSxFQUVuQkMsSUFGbUIsYUFFbkJBLElBRm1CLEVBR25CQyxXQUhtQixhQUduQkEsV0FIbUI7O0FBQUEsNEJBT25CRCxJQVBtQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSx5REFRWkYsSUFBSUksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUNDLE9BQVEsSUFBVCxFQUFjQyxTQUFVLHdCQUF4QixFQUFyQixDQVJZOztBQUFBO0FBQUEsOEJBU1osT0FBT0wsSUFBUCxLQUFnQixRQVRKO0FBQUE7QUFBQTtBQUFBOztBQUFBLHlEQVVaRixJQUFJSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsT0FBUSxJQUFULEVBQWNDLFNBQVUsc0JBQXhCLEVBQXJCLENBVlk7O0FBQUE7QUFBQSw4QkFXYkwsS0FBS00sTUFBTCxHQUFjLENBWEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEseURBWVpSLElBQUlJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFD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b0I7O0FBQUEsNEJBR3ZCQSxPQUh1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwwREFJaEJiLElBQUlJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDQyxPQUFRLElBQVQsRUFBY0MsU0FBVSxpQ0FBeEIsRUFBckIsQ0FKZ0I7O0FBQUE7QUFBQTtBQUFBLCtCQVFQLGdCQUFNWSxRQUFOLENBQWVOLE9BQWYsQ0FSTzs7QUFBQTtBQVFyQkosNkJBUnFCOztBQUFBLDRCQVV2QkEsS0FWdUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMERBV2hCVCxJQUFJSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsT0FBUSxJQUFULEVBQWNDLFNBQVUsaUJBQXhCLEVBQXJCLENBWGdCOztBQUFBO0FBQUE7QUFBQSx1Q0FlaEJQLElBQUlJLE1BQUosQ0FBVyxHQUFYLENBZmdCO0FBQUE7QUFBQSwrQkFpQkgsZ0JBQU9nQixJQUFQLENBQVksRUFBQ1gsT0FBTUksT0FBUCxFQUFaLEVBQTZCUSxRQUE3QixDQUFzQyxPQUF0QyxFQUE4QyxNQUE5QyxDQWpCRzs7QUFBQTtBQUFBO0FBQUE7QUFnQm5CZixpQ0FoQm1CLEVBZ0JYLEtBaEJXO0FBaUJuQmdCLG1DQWpCbUI7QUFBQTtBQUFBLHVFQWVBakIsSUFmQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFvQmhCTCxJQUFJSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsT0FBUSxJQUFULEVBQWNDLFNBQVUscUJBQXhCLEVBQXJCLENBcEJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOIiwiZmlsZSI6ImNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JvdXAgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQge01lZXR1cH0gZnJvbSBcIi4uL21lZXR1cHNcIjtcbmV4cG9ydCBjb25zdCBjcmVhdGVHcm91cCA9IGFzeW5jIChyZXEscmVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICB9ID0gcmVxLmJvZHk7XG5cblxuICAgIGlmKCFuYW1lKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdOYW1lIG11c3QgYmUgcHJvdmlkZWQhJ30pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdOYW1lIG11c3QgYmUgc3RyaW5nISd9KTtcbiAgICB9IGVsc2UgaWYobmFtZS5sZW5ndGggPCA1KXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdOYW1lIG11c3QgaGF2ZSA1IGNoYXJhY3RlcnMgbG9uZyEnfSk7XG4gICAgfVxuXG4gICAgaWYoIWRlc2NyaXB0aW9uKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdkZXNjcmlwdGlvbiBtdXN0IGJlIHByb3ZpZGVkISd9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXNjcmlwdGlvbiE9PSAnc3RyaW5nJyl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3IgOiB0cnVlLG1lc3NhZ2UgOiAnZGVzY3JpcHRpb24gbXVzdCBiZSBzdHJpbmchJ30pO1xuICAgIH0gZWxzZSBpZihkZXNjcmlwdGlvbi5sZW5ndGggPCA1KXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdkZXNjcmlwdGlvbiBtdXN0IGhhdmUgMTAgY2hhcmFjdGVycyBsb25nISd9KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoe25hbWUsZGVzY3JpcHRpb259KTtcbiAgICBcbiAgICB0cnl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7ZXJyb3IgOiBmYWxzZSxncm91cDphd2FpdCBncm91cC5zYXZlKCl9KTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogdHJ1ZSxtZXNzYWdlIDogJ0Vycm9yIHdoZW4gY3JlYXRlZCBncm91cCEnfSk7XG4gICAgfVxuICAgIFxufVxuXG5cblxuXG5leHBvcnQgY29uc3QgY3JlYXRlR3JvdXBNZWV0dXAgPSBhc3luYyAocmVxLHJlcykgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9ufSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHsgZ3JvdXBJZCB9ID0gcmVxLnBhcmFtcztcbiAgICBcbiAgICBpZighdGl0bGUpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogdHJ1ZSxtZXNzYWdlIDogJ3RpdGxlIG11c3QgYmUgcHJvdmlkZWQhJ30pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRpdGxlIT09ICdzdHJpbmcnKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICd0aXRsZSBtdXN0IGJlIHN0cmluZyEnfSk7XG4gICAgfSBlbHNlIGlmKHRpdGxlLmxlbmd0aCA8IDUpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogdHJ1ZSxtZXNzYWdlIDogJ3RpdGxlIG11c3QgaGF2ZSA1IGNoYXJhY3RlcnMgbG9uZyEnfSk7XG4gICAgfVxuXG4gICAgaWYoIWRlc2NyaXB0aW9uKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdkZXNjcmlwdGlvbiBtdXN0IGJlIHByb3ZpZGVkISd9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXNjcmlwdGlvbiE9PSAnc3RyaW5nJyl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3IgOiB0cnVlLG1lc3NhZ2UgOiAnZGVzY3JpcHRpb24gbXVzdCBiZSBzdHJpbmchJ30pO1xuICAgIH0gZWxzZSBpZihkZXNjcmlwdGlvbi5sZW5ndGggPCA1KXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvciA6IHRydWUsbWVzc2FnZSA6ICdkZXNjcmlwdGlvbiBtdXN0IGhhdmUgMTAgY2hhcmFjdGVycyBsb25nISd9KTtcbiAgICB9XG4gICAgXG4gICAgaWYoIWdyb3VwSWQpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogdHJ1ZSxtZXNzYWdlIDogJ0dyb3VwIGlkIG11c3QgYmUgcHJvdmlkZWQnfSk7XG4gICAgfVxuICAgIFxuICAgIHRyeXtcbiAgICAgICAgY29uc3Qge21lZXR1cH0gPSBhd2FpdCBHcm91cC5hZGRNZWV0dXAoZ3JvdXBJZCx7dGl0bGUsZGVzY3JpcHRpb259KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvciA6IGZhbHNlLG1lZXR1cCxncm91cH0pOyAgICAgIFxuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3IgOiB0cnVlLG1lc3NhZ2UgOiAnTWVldHVwIGNhbm5vdCBiZSBjcmVhdGVkIScsZSA6IGV9KTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBjb25zdCBnZXRHcm91cE1lZXR1cHMgPSBhc3luYyhyZXEscmVzKSA9PiB7XG4gICAgY29uc3Qge2dyb3VwSWR9ID0gcmVxLnBhcmFtcztcbiAgICBcbiAgICBpZighZ3JvdXBJZCl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3IgOiB0cnVlLG1lc3NhZ2UgOiAnWW91IG5lZWQgdG8gcHJvdmlkZWQgYSBncm91cCBpZCd9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gU2VhcmNoIGZvciBzZWUgaWYgZ3JvdXAgZXhpc3QgXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kQnlJZChncm91cElkKTtcbiAgICBcbiAgICBpZighZ3JvdXApe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogdHJ1ZSxtZXNzYWdlIDogJ0dyb3VwIG5vdCBleGlzdCd9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgZXJyb3IgOiBmYWxzZSxcbiAgICAgICAgICAgIG1lZXR1cHMgOiBhd2FpdCBNZWV0dXAuZmluZCh7Z3JvdXA6Z3JvdXBJZH0pLnBvcHVsYXRlKCdncm91cCcsJ25hbWUnKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3IgOiB0cnVlLG1lc3NhZ2UgOiAnQ2Fubm90IGZldGNoIG1lZXR1cCd9KTtcbiAgICB9XG59XG5cbiJdfQ==