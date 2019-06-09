'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Task = _interopRequireDefault(require("./task/Task"));

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events
 * is that they don't rely on correct typing.
 *
 * @author Robert Corponoi
 * 
 * @version 2.3.0
 */
var Hypergiant =
/*#__PURE__*/
function () {
  function Hypergiant() {
    (0, _classCallCheck2["default"])(this, Hypergiant);
    (0, _defineProperty2["default"])(this, "tasks", new Set());
  }

  (0, _createClass2["default"])(Hypergiant, [{
    key: "add",

    /**
     * Add a new signal.
     * 
     * @since 0.1.0
     * 
     * @param {Function} fn The method that should be called when the signal is dispatched.
     * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.tasks.add(new _Task["default"](fn, once));
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
          if (task["delete"]) this.tasks["delete"](task);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Removes a task from this signal by name.
     *
     * @since 2.3.0
     *
     * @param {Function} The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this.tasks["delete"](task);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this;
    }
    /**
     * Removes all tasks from this signal.
     *
     * @since 2.3.0
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this.tasks.clear();
      return this;
    }
  }]);
  return Hypergiant;
}();

exports["default"] = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwidGFza3MiLCJhZGQiLCJUYXNrIiwidGFzayIsInJ1biIsImZuVG9TdHJpbmciLCJ0b1N0cmluZyIsInRhc2tGblRvU3RyaW5nIiwiY2xlYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQVVxQkEsVTs7Ozs7b0RBU08sSUFBSUMsR0FBSixFOzs7Ozs7QUFFM0I7Ozs7Ozs7Ozs7d0JBVUlDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1CO0FBRXBELFdBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLElBQUlDLGdCQUFKLENBQVNKLEVBQVQsRUFBYUMsSUFBYixDQUFmO0FBRUEsYUFBTyxJQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7K0JBUXNCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRXJCLDZCQUFtQixLQUFLQyxLQUF4Qiw4SEFBK0I7QUFBQSxjQUFwQkcsSUFBb0I7QUFFOUJBLFVBQUFBLElBQUksQ0FBQ0MsR0FBTCxPQUFBRCxJQUFJLFlBQUo7QUFFQSxjQUFJQSxJQUFJLFVBQVIsRUFBaUIsS0FBS0gsS0FBTCxXQUFrQkcsSUFBbEI7QUFFakI7QUFSb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVwQjtBQUVEOzs7Ozs7Ozs7Ozs7MkJBU09MLEUsRUFBMEI7QUFFL0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRitCO0FBQUE7QUFBQTs7QUFBQTtBQUkvQiw4QkFBbUIsS0FBS04sS0FBeEIsbUlBQStCO0FBQUEsY0FBcEJHLElBQW9CO0FBRTdCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakMsaUJBQUtQLEtBQUwsV0FBa0JHLElBQWxCO0FBRUE7QUFFRDtBQUVGO0FBaEI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCL0IsYUFBTyxJQUFQO0FBRUQ7QUFFRDs7Ozs7Ozs7OztnQ0FPd0I7QUFFdEIsV0FBS0gsS0FBTCxDQUFXUSxLQUFYO0FBRUEsYUFBTyxJQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcclxuXHJcbi8qKlxyXG4gKiBIeXBlcmdpYW50IGlzIHVzZWQgdG8gY3JlYXRlIHNpZ25hbHMgdGhhdCBydW4gYSB0YXNrIHdoZW4gZW1pdHRlZC5cclxuICpcclxuICogT25lIG9mIHRoZSBiaWdnZXN0IGFkdnRhbnRhZ2VzIHRoYXQgc2lnbmFscyBoYXZlIG92ZXIgbmF0aXZlIEphdmFTY3JpcHQgZXZlbnRzXHJcbiAqIGlzIHRoYXQgdGhleSBkb24ndCByZWx5IG9uIGNvcnJlY3QgdHlwaW5nLlxyXG4gKlxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaVxyXG4gKiBcclxuICogQHZlcnNpb24gMi4zLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVyZ2lhbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGFza3MgdGhhdCBhcmUgc2V0IHRvIHJ1biB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7U2V0fVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdGFza3M6IFNldDxUYXNrPiA9IG5ldyBTZXQoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgbmV3IHNpZ25hbC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHNpZ25hbCBzaG91bGQgb25seSBiZSBkaXNwYXRjaGVkIG9uY2UgYW5kIHRoZW4gZGVsZXRlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuXHQgKi9cclxuXHRhZGQoZm46IEZ1bmN0aW9uLCBvbmNlOiBib29sZWFuID0gZmFsc2UpOiBIeXBlcmdpYW50IHtcclxuXHJcblx0XHR0aGlzLnRhc2tzLmFkZChuZXcgVGFzayhmbiwgb25jZSkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BhdGNoIHRoaXMgSHlwZXJnaWFudCBldmVudCBhbmQgcnVuIGFsbCBvZiB0aGUgdGFza3MgYXNzb2NpYXRlZFxyXG5cdCAqIHdpdGggaXQgYWxvbmcgd2l0aCBhbnkgZGF0YSBwYXNzZWQgdG8gaXQuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHsuLi4qfSBhcmdzIEFueSBvdGhlciBkYXRhIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgSHlwZXJnaWFudCBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRkaXNwYXRjaCguLi5hcmdzOiBbXSkge1xyXG5cclxuXHRcdGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XHJcblxyXG5cdFx0XHR0YXNrLnJ1biguLi5hcmdzKTtcclxuXHJcblx0XHRcdGlmICh0YXNrLmRlbGV0ZSkgdGhpcy50YXNrcy5kZWxldGUodGFzayk7XHJcblxyXG5cdFx0fVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0YXNrIGZyb20gdGhpcyBzaWduYWwgYnkgbmFtZS5cclxuICAgKlxyXG4gICAqIEBzaW5jZSAyLjMuMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIHRhc2sgdG8gcmVtb3ZlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudGFza3MpIHtcclxuXHJcbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoZm5Ub1N0cmluZyA9PT0gdGFza0ZuVG9TdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy50YXNrcy5kZWxldGUodGFzayk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCB0YXNrcyBmcm9tIHRoaXMgc2lnbmFsLlxyXG4gICAqXHJcbiAgICogQHNpbmNlIDIuMy4wXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICByZW1vdmVBbGwoKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgdGhpcy50YXNrcy5jbGVhcigpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=