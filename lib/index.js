'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Task = _interopRequireDefault(require("./task/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Hypergiant is used to create signal-like events that run when the Hypergiant
 * is emitted.
 * 
 * One of the big advtanges that Hypergiant has over native JavaScript events is
 * the ability of using named events instead of relying on typing.
 * 
 * @author Robert Corponoi
 * 
 * @version 0.1.0
 */
var Hypergiant =
/*#__PURE__*/
function () {
  function Hypergiant() {
    _classCallCheck(this, Hypergiant);

    _defineProperty(this, "tasks", new Set());
  }

  _createClass(Hypergiant, [{
    key: "add",

    /**
     * Adds a new task for this instance of Hypergiant to run when emitted.
     * 
     * @since 0.1.0
     * 
     * @param {Function} fn The method that should be called when emitted.
     * @param {boolean} [once=false] Indicates whether this task should only be called once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.tasks.add(new _Task.default(fn, once));
      return this;
    }
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     * 
     * @since 0.1.0
     * 
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task.delete) this.tasks.delete(task);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Hypergiant;
}();

exports.default = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwidGFza3MiLCJhZGQiLCJUYXNrIiwidGFzayIsInJ1biIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxVOzs7Ozs7bUNBVU8sSUFBSUMsR0FBSixFOzs7Ozs7QUFFM0I7Ozs7Ozs7Ozs7d0JBVUlDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1CO0FBRXBELFdBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLElBQUlDLGFBQUosQ0FBU0osRUFBVCxFQUFhQyxJQUFiLENBQWY7QUFFQSxhQUFPLElBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7OzsrQkFRc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFckIsNkJBQW1CLEtBQUtDLEtBQXhCLDhIQUErQjtBQUFBLGNBQXBCRyxJQUFvQjtBQUU5QkEsVUFBQUEsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksWUFBSjtBQUVBLGNBQUlBLElBQUksQ0FBQ0UsTUFBVCxFQUFpQixLQUFLTCxLQUFMLENBQVdLLE1BQVgsQ0FBa0JGLElBQWxCO0FBRWpCO0FBUm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVckIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcclxuXHJcbi8qKlxyXG4gKiBIeXBlcmdpYW50IGlzIHVzZWQgdG8gY3JlYXRlIHNpZ25hbC1saWtlIGV2ZW50cyB0aGF0IHJ1biB3aGVuIHRoZSBIeXBlcmdpYW50XHJcbiAqIGlzIGVtaXR0ZWQuXHJcbiAqIFxyXG4gKiBPbmUgb2YgdGhlIGJpZyBhZHZ0YW5nZXMgdGhhdCBIeXBlcmdpYW50IGhhcyBvdmVyIG5hdGl2ZSBKYXZhU2NyaXB0IGV2ZW50cyBpc1xyXG4gKiB0aGUgYWJpbGl0eSBvZiB1c2luZyBuYW1lZCBldmVudHMgaW5zdGVhZCBvZiByZWx5aW5nIG9uIHR5cGluZy5cclxuICogXHJcbiAqIEBhdXRob3IgUm9iZXJ0IENvcnBvbm9pXHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlwZXJnaWFudCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbnN0YW5jZSBvZiBIeXBlcmdpYW50IHRoYXQgcnVuXHJcblx0ICogd2hlbiB0aGUgZXZlbnQgaXMgZW1pdHRlZC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge1NldH1cclxuXHQgKi9cclxuXHRwcml2YXRlIHRhc2tzOiBTZXQ8VGFzaz4gPSBuZXcgU2V0KCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSBuZXcgdGFzayBmb3IgdGhpcyBpbnN0YW5jZSBvZiBIeXBlcmdpYW50IHRvIHJ1biB3aGVuIGVtaXR0ZWQuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIG1ldGhvZCB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbiBlbWl0dGVkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgdGFzayBzaG91bGQgb25seSBiZSBjYWxsZWQgb25jZSBhbmQgdGhlbiBkZWxldGVkLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG5cdCAqL1xyXG5cdGFkZChmbjogRnVuY3Rpb24sIG9uY2U6IGJvb2xlYW4gPSBmYWxzZSk6IEh5cGVyZ2lhbnQge1xyXG5cclxuXHRcdHRoaXMudGFza3MuYWRkKG5ldyBUYXNrKGZuLCBvbmNlKSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGF0Y2ggdGhpcyBIeXBlcmdpYW50IGV2ZW50IGFuZCBydW4gYWxsIG9mIHRoZSB0YXNrcyBhc3NvY2lhdGVkXHJcblx0ICogd2l0aCBpdCBhbG9uZyB3aXRoIGFueSBkYXRhIHBhc3NlZCB0byBpdC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBIeXBlcmdpYW50IGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdGRpc3BhdGNoKC4uLmFyZ3M6IFtdKSB7XHJcblxyXG5cdFx0Zm9yIChjb25zdCB0YXNrIG9mIHRoaXMudGFza3MpIHtcclxuXHJcblx0XHRcdHRhc2sucnVuKC4uLmFyZ3MpO1xyXG5cclxuXHRcdFx0aWYgKHRhc2suZGVsZXRlKSB0aGlzLnRhc2tzLmRlbGV0ZSh0YXNrKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0iXX0=