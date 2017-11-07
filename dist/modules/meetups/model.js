'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MeetupSchema = new _mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [5, '5 characters long at least']
    },
    description: {
        type: String,
        required: true,
        minlength: [10, '10 characters long at least']
    },
    eventDate: {
        type: Date
    },
    group: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }
}, { timestamps: true });

exports.default = _mongoose2.default.model('Meetup', MeetupSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL21lZXR1cHMvbW9kZWwuanMiXSwibmFtZXMiOlsiTWVldHVwU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJkZXNjcmlwdGlvbiIsImV2ZW50RGF0ZSIsIkRhdGUiLCJncm91cCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJ0aW1lc3RhbXBzIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLHFCQUFXO0FBQzVCQyxXQUFRO0FBQ0pDLGNBQU9DLE1BREg7QUFFSkMsa0JBQVcsSUFGUDtBQUdKQyxtQkFBWSxDQUFDLENBQUQsRUFBRyw0QkFBSDtBQUhSLEtBRG9CO0FBTTVCQyxpQkFBYztBQUNWSixjQUFPQyxNQURHO0FBRVZDLGtCQUFXLElBRkQ7QUFHVkMsbUJBQVksQ0FBQyxFQUFELEVBQUksNkJBQUo7QUFIRixLQU5jO0FBVzVCRSxlQUFZO0FBQ1JMLGNBQU9NO0FBREMsS0FYZ0I7QUFjNUJDLFdBQVE7QUFDSlAsY0FBTyxpQkFBT1EsS0FBUCxDQUFhQyxRQURoQjtBQUVKQyxhQUFNO0FBRkY7QUFkb0IsQ0FBWCxFQWtCbkIsRUFBQ0MsWUFBVyxJQUFaLEVBbEJtQixDQUFyQjs7a0JBb0JlLG1CQUFTQyxLQUFULENBQWUsUUFBZixFQUF5QmQsWUFBekIsQyIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwge1NjaGVtYX0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNZWV0dXBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlLFxuICAgICAgICBtaW5sZW5ndGggOiBbNSwnNSBjaGFyYWN0ZXJzIGxvbmcgYXQgbGVhc3QnXVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb24gOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcbiAgICAgICAgbWlubGVuZ3RoIDogWzEwLCcxMCBjaGFyYWN0ZXJzIGxvbmcgYXQgbGVhc3QnXVxuICAgIH0sXG4gICAgZXZlbnREYXRlIDoge1xuICAgICAgICB0eXBlIDogRGF0ZVxuICAgIH0sXG4gICAgZ3JvdXAgOiB7XG4gICAgICAgIHR5cGUgOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZiA6ICdHcm91cCdcbiAgICB9XG59LHt0aW1lc3RhbXBzOnRydWV9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnTWVldHVwJywgTWVldHVwU2NoZW1hKTsiXX0=