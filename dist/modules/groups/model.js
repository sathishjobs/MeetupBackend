'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var GroupSchema = new _mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Name must be 5 characters long']
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be 10 characters long']
    },
    category: {
        type: String
    },
    meetups: [{
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'Meetup'
    }]
}, { timestamps: true });

/**
 *  create a meetup and add it to the meetups array in the group
 */

GroupSchema.statics.addMeetup = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, args) {
        var Meetup, meetup, group;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        Meetup = _mongoose2.default.model('Meetup');

                        //We add the group id to the meetup group element
                        //Finally this is the author of the meetup

                        _context.next = 3;
                        return new Meetup(Object.assign({}, args, { group: id }));

                    case 3:
                        meetup = _context.sent;
                        _context.next = 6;
                        return this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

                    case 6:
                        group = _context.sent;
                        _context.next = 9;
                        return meetup.save();

                    case 9:
                        _context.t0 = _context.sent;
                        return _context.abrupt('return', {
                            meetup: _context.t0
                        });

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = _mongoose2.default.model('Group', GroupSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2dyb3Vwcy9tb2RlbC5qcyJdLCJuYW1lcyI6WyJHcm91cFNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJtaW5sZW5ndGgiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwibWVldHVwcyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJ0aW1lc3RhbXBzIiwic3RhdGljcyIsImFkZE1lZXR1cCIsImlkIiwiYXJncyIsIk1lZXR1cCIsIm1vZGVsIiwiZ3JvdXAiLCJtZWV0dXAiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRwdXNoIiwic2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxxQkFBVztBQUMzQkMsVUFBTztBQUNIQyxjQUFPQyxNQURKO0FBRUhDLGtCQUFXLElBRlI7QUFHSEMsZ0JBQVMsSUFITjtBQUlIQyxtQkFBWSxDQUFDLENBQUQsRUFBRyxnQ0FBSDtBQUpULEtBRG9CO0FBTzNCQyxpQkFBYztBQUNWTCxjQUFPQyxNQURHO0FBRVZDLGtCQUFVLElBRkE7QUFHVkUsbUJBQVksQ0FBQyxFQUFELEVBQUssd0NBQUw7QUFIRixLQVBhO0FBWTNCRSxjQUFXO0FBQ1BOLGNBQU9DO0FBREEsS0FaZ0I7QUFlM0JNLGFBQVUsQ0FBQztBQUNQUCxjQUFPLGlCQUFPUSxLQUFQLENBQWFDLFFBRGI7QUFFUEMsYUFBTTtBQUZDLEtBQUQ7QUFmaUIsQ0FBWCxFQW1CbEIsRUFBQ0MsWUFBYSxJQUFkLEVBbkJrQixDQUFwQjs7QUFzQkE7Ozs7QUFJQWIsWUFBWWMsT0FBWixDQUFvQkMsU0FBcEI7QUFBQSx1RUFBZ0MsaUJBQWVDLEVBQWYsRUFBa0JDLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkMsOEJBRHNCLEdBQ2IsbUJBQVNDLEtBQVQsQ0FBZSxRQUFmLENBRGE7O0FBRzVCO0FBQ0E7O0FBSjRCO0FBQUEsK0JBS1AsSUFBSUQsTUFBSixtQkFBZUQsSUFBZixJQUFvQkcsT0FBTUosRUFBMUIsSUFMTzs7QUFBQTtBQUt0QkssOEJBTHNCO0FBQUE7QUFBQSwrQkFTUixLQUFLQyxpQkFBTCxDQUF1Qk4sRUFBdkIsRUFBMEIsRUFBQ08sT0FBTSxFQUFDZCxTQUFVWSxPQUFPTCxFQUFsQixFQUFQLEVBQTFCLENBVFE7O0FBQUE7QUFTdEJJLDZCQVRzQjtBQUFBO0FBQUEsK0JBYVRDLE9BQU9HLElBQVAsRUFiUzs7QUFBQTtBQUFBO0FBQUE7QUFheEJILGtDQWJ3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztrQkFpQmUsbUJBQVNGLEtBQVQsQ0FBZSxPQUFmLEVBQXVCbkIsV0FBdkIsQyIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwge1NjaGVtYX0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBHcm91cFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlIDogdHJ1ZSxcbiAgICAgICAgbWlubGVuZ3RoIDogWzUsJ05hbWUgbXVzdCBiZSA1IGNoYXJhY3RlcnMgbG9uZyddXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbiA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQgOnRydWUsXG4gICAgICAgIG1pbmxlbmd0aCA6IFsxMCwgJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMTAgY2hhcmFjdGVycyBsb25nJ11cbiAgICB9LFxuICAgIGNhdGVnb3J5IDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nXG4gICAgfSxcbiAgICBtZWV0dXBzIDogW3tcbiAgICAgICAgdHlwZSA6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmIDogJ01lZXR1cCdcbiAgICB9XVxufSx7dGltZXN0YW1wcyA6IHRydWV9KVxuXG5cbi8qKlxuICogIGNyZWF0ZSBhIG1lZXR1cCBhbmQgYWRkIGl0IHRvIHRoZSBtZWV0dXBzIGFycmF5IGluIHRoZSBncm91cFxuICovXG5cbkdyb3VwU2NoZW1hLnN0YXRpY3MuYWRkTWVldHVwID0gYXN5bmMgZnVuY3Rpb24oaWQsYXJncyl7XG4gICAgY29uc3QgTWVldHVwID0gbW9uZ29vc2UubW9kZWwoJ01lZXR1cCcpO1xuXG4gICAgLy9XZSBhZGQgdGhlIGdyb3VwIGlkIHRvIHRoZSBtZWV0dXAgZ3JvdXAgZWxlbWVudFxuICAgIC8vRmluYWxseSB0aGlzIGlzIHRoZSBhdXRob3Igb2YgdGhlIG1lZXR1cFxuICAgIGNvbnN0IG1lZXR1cCA9IGF3YWl0IG5ldyBNZWV0dXAoey4uLmFyZ3MsZ3JvdXA6aWR9KTtcblxuICAgIC8vV2UgZm91bmQgdGhlIGdyb3VwIHdpdGggdGhlIGlkIHByb3ZpZGUgaW4gdGhlIHVybFxuICAgIC8vQW5kIHdlIHB1c2ggdGhlIG1lZXR1cCBpZCBpbiB0aGUgbWVldHVwcyBlbGVtZW50XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLmZpbmRCeUlkQW5kVXBkYXRlKGlkLHskcHVzaDp7bWVldHVwcyA6IG1lZXR1cC5pZH19KTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVldHVwIDogYXdhaXQgbWVldHVwLnNhdmUoKSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdHcm91cCcsR3JvdXBTY2hlbWEpOyJdfQ==