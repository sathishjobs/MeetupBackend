'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    _mongoose2.default.Promise = global.Promise;
    _mongoose2.default.connect(_config2.default.DB_URL);
    _mongoose2.default.set('debug', true);
    _mongoose2.default.connection.once('open', function () {
        return console.log('Mongodb running');
    }).on('error', function (err) {
        return console.error(err);
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGIuanMiXSwibmFtZXMiOlsiUHJvbWlzZSIsImdsb2JhbCIsImNvbm5lY3QiLCJEQl9VUkwiLCJzZXQiLCJjb25uZWN0aW9uIiwib25jZSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImVycm9yIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBQ2UsWUFBTTtBQUNqQix1QkFBU0EsT0FBVCxHQUFtQkMsT0FBT0QsT0FBMUI7QUFDQSx1QkFBU0UsT0FBVCxDQUFpQixpQkFBT0MsTUFBeEI7QUFDQSx1QkFBU0MsR0FBVCxDQUFhLE9BQWIsRUFBcUIsSUFBckI7QUFDQSx1QkFBU0MsVUFBVCxDQUNTQyxJQURULENBQ2MsTUFEZCxFQUNxQjtBQUFBLGVBQUtDLFFBQVFDLEdBQVIsQ0FBWSxpQkFBWixDQUFMO0FBQUEsS0FEckIsRUFFU0MsRUFGVCxDQUVZLE9BRlosRUFFb0I7QUFBQSxlQUFPRixRQUFRRyxLQUFSLENBQWNDLEdBQWQsQ0FBUDtBQUFBLEtBRnBCO0FBR0gsQyIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgbW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuICAgIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLkRCX1VSTCk7XG4gICAgbW9uZ29vc2Uuc2V0KCdkZWJ1ZycsdHJ1ZSk7XG4gICAgbW9uZ29vc2UuY29ubmVjdGlvblxuICAgICAgICAgICAgLm9uY2UoJ29wZW4nLCgpPT4gY29uc29sZS5sb2coJ01vbmdvZGIgcnVubmluZycpKVxuICAgICAgICAgICAgLm9uKCdlcnJvcicsZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59OyJdfQ==