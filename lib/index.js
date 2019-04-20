'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
    (0, _classCallCheck2.default)(this, Hypergiant);
    (0, _defineProperty2.default)(this, "tasks", new Set());
  }

  (0, _createClass2.default)(Hypergiant, [{
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
            this.tasks.delete(task);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
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

exports.default = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwidGFza3MiLCJhZGQiLCJUYXNrIiwidGFzayIsInJ1biIsImRlbGV0ZSIsImZuVG9TdHJpbmciLCJ0b1N0cmluZyIsInRhc2tGblRvU3RyaW5nIiwiY2xlYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQVVxQkEsVTs7Ozs7aURBU08sSUFBSUMsR0FBSixFOzs7Ozs7QUFFM0I7Ozs7Ozs7Ozs7d0JBVUlDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1CO0FBRXBELFdBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLElBQUlDLGFBQUosQ0FBU0osRUFBVCxFQUFhQyxJQUFiLENBQWY7QUFFQSxhQUFPLElBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7OzsrQkFRc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFckIsNkJBQW1CLEtBQUtDLEtBQXhCLDhIQUErQjtBQUFBLGNBQXBCRyxJQUFvQjtBQUU5QkEsVUFBQUEsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksWUFBSjtBQUVBLGNBQUlBLElBQUksQ0FBQ0UsTUFBVCxFQUFpQixLQUFLTCxLQUFMLENBQVdLLE1BQVgsQ0FBa0JGLElBQWxCO0FBRWpCO0FBUm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVcEI7QUFFRDs7Ozs7Ozs7Ozs7OzJCQVNPTCxFLEVBQTBCO0FBRS9CLFVBQU1RLFVBQWtCLEdBQUdSLEVBQUUsQ0FBQ1MsUUFBSCxFQUEzQjtBQUYrQjtBQUFBO0FBQUE7O0FBQUE7QUFJL0IsOEJBQW1CLEtBQUtQLEtBQXhCLG1JQUErQjtBQUFBLGNBQXBCRyxJQUFvQjtBQUU3QixjQUFNSyxjQUFzQixHQUFHTCxJQUFJLENBQUNMLEVBQUwsQ0FBUVMsUUFBUixFQUEvQjs7QUFFQSxjQUFJRCxVQUFVLEtBQUtFLGNBQW5CLEVBQW1DO0FBRWpDLGlCQUFLUixLQUFMLENBQVdLLE1BQVgsQ0FBa0JGLElBQWxCO0FBRUE7QUFFRDtBQUVGO0FBaEI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCL0IsYUFBTyxJQUFQO0FBRUQ7QUFFRDs7Ozs7Ozs7OztnQ0FPd0I7QUFFdEIsV0FBS0gsS0FBTCxDQUFXUyxLQUFYO0FBRUEsYUFBTyxJQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuXG4vKipcbiAqIEh5cGVyZ2lhbnQgaXMgdXNlZCB0byBjcmVhdGUgc2lnbmFscyB0aGF0IHJ1biBhIHRhc2sgd2hlbiBlbWl0dGVkLlxuICpcbiAqIE9uZSBvZiB0aGUgYmlnZ2VzdCBhZHZ0YW50YWdlcyB0aGF0IHNpZ25hbHMgaGF2ZSBvdmVyIG5hdGl2ZSBKYXZhU2NyaXB0IGV2ZW50c1xuICogaXMgdGhhdCB0aGV5IGRvbid0IHJlbHkgb24gY29ycmVjdCB0eXBpbmcuXG4gKlxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2lcbiAqIFxuICogQHZlcnNpb24gMi4zLjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlwZXJnaWFudCB7XG5cbiAgLyoqXG4gICAqIFRoZSB0YXNrcyB0aGF0IGFyZSBzZXQgdG8gcnVuIHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgc2lnbmFsIGlzIGRpc3BhdGNoZWQuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogXG5cdCAqIEBwcm9wZXJ0eSB7U2V0fVxuXHQgKi9cblx0cHJpdmF0ZSB0YXNrczogU2V0PFRhc2s+ID0gbmV3IFNldCgpO1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBuZXcgc2lnbmFsLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cblx0ICogQHBhcmFtIHtib29sZWFufSBbb25jZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBzaWduYWwgc2hvdWxkIG9ubHkgYmUgZGlzcGF0Y2hlZCBvbmNlIGFuZCB0aGVuIGRlbGV0ZWQuXG5cdCAqIFxuXHQgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cblx0ICovXG5cdGFkZChmbjogRnVuY3Rpb24sIG9uY2U6IGJvb2xlYW4gPSBmYWxzZSk6IEh5cGVyZ2lhbnQge1xuXG5cdFx0dGhpcy50YXNrcy5hZGQobmV3IFRhc2soZm4sIG9uY2UpKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHQvKipcblx0ICogRGlzcGF0Y2ggdGhpcyBIeXBlcmdpYW50IGV2ZW50IGFuZCBydW4gYWxsIG9mIHRoZSB0YXNrcyBhc3NvY2lhdGVkXG5cdCAqIHdpdGggaXQgYWxvbmcgd2l0aCBhbnkgZGF0YSBwYXNzZWQgdG8gaXQuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogXG5cdCAqIEBwYXJhbSB7Li4uKn0gYXJncyBBbnkgb3RoZXIgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIEh5cGVyZ2lhbnQgaW5zdGFuY2UuXG5cdCAqL1xuXHRkaXNwYXRjaCguLi5hcmdzOiBbXSkge1xuXG5cdFx0Zm9yIChjb25zdCB0YXNrIG9mIHRoaXMudGFza3MpIHtcblxuXHRcdFx0dGFzay5ydW4oLi4uYXJncyk7XG5cblx0XHRcdGlmICh0YXNrLmRlbGV0ZSkgdGhpcy50YXNrcy5kZWxldGUodGFzayk7XG5cblx0XHR9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdGFzayBmcm9tIHRoaXMgc2lnbmFsIGJ5IG5hbWUuXG4gICAqXG4gICAqIEBzaW5jZSAyLjMuMFxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBUaGUgdGFzayB0byByZW1vdmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxuICAgKi9cbiAgcmVtb3ZlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xuXG4gICAgY29uc3QgZm5Ub1N0cmluZzogc3RyaW5nID0gZm4udG9TdHJpbmcoKTtcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XG5cbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xuXG4gICAgICAgIHRoaXMudGFza3MuZGVsZXRlKHRhc2spO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHRhc2tzIGZyb20gdGhpcyBzaWduYWwuXG4gICAqXG4gICAqIEBzaW5jZSAyLjMuMFxuICAgKlxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cbiAgICovXG4gIHJlbW92ZUFsbCgpOiBIeXBlcmdpYW50IHtcblxuICAgIHRoaXMudGFza3MuY2xlYXIoKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG5cbiAgfVxuXG59XG4iXX0=