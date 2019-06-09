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
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely 
 * on correct typing.
 *
 * @author Robert Corponoi
 * 
 * @version 2.4.1
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
     * @param {Function} task The task to remove.
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
    /**
     * Pauses a task attached to this signal until it is unpaused.
     * 
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     * 
     * @since 2.4.0
     * 
     * @param {Function} task The task to pause.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "pause",
    value: function pause(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var task = _step3.value;
          var taskFnToString = task.fn.toString();

          if (!task.paused && fnToString === taskFnToString) {
            task.paused = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this;
    }
    /**
     * Resumes a task from a paused state.
     * 
     * @since 2.4.0
     * 
     * @param {Function} task The paused task.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "resume",
    value: function resume(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var task = _step4.value;
          var taskFnToString = task.fn.toString();

          if (task.paused && fnToString === taskFnToString) {
            task.paused = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return this;
    }
  }]);
  return Hypergiant;
}();

exports["default"] = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwidGFza3MiLCJhZGQiLCJUYXNrIiwidGFzayIsInJ1biIsImZuVG9TdHJpbmciLCJ0b1N0cmluZyIsInRhc2tGblRvU3RyaW5nIiwiY2xlYXIiLCJwYXVzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQVVxQkEsVTs7Ozs7b0RBU1EsSUFBSUMsR0FBSixFOzs7Ozs7QUFFNUI7Ozs7Ozs7Ozs7d0JBVUtDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1CO0FBRW5ELFdBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLElBQUlDLGdCQUFKLENBQVNKLEVBQVQsRUFBYUMsSUFBYixDQUFmO0FBRUEsYUFBTyxJQUFQO0FBRUQ7QUFFRjs7Ozs7Ozs7Ozs7K0JBUXVCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRXBCLDZCQUFtQixLQUFLQyxLQUF4Qiw4SEFBK0I7QUFBQSxjQUFwQkcsSUFBb0I7QUFFN0JBLFVBQUFBLElBQUksQ0FBQ0MsR0FBTCxPQUFBRCxJQUFJLFlBQUo7QUFFQSxjQUFJQSxJQUFJLFVBQVIsRUFBaUIsS0FBS0gsS0FBTCxXQUFrQkcsSUFBbEI7QUFFbEI7QUFSbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVyQjtBQUVEOzs7Ozs7Ozs7Ozs7MkJBU09MLEUsRUFBMEI7QUFFL0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRitCO0FBQUE7QUFBQTs7QUFBQTtBQUkvQiw4QkFBbUIsS0FBS04sS0FBeEIsbUlBQStCO0FBQUEsY0FBcEJHLElBQW9CO0FBRTdCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakMsaUJBQUtQLEtBQUwsV0FBa0JHLElBQWxCO0FBRUE7QUFFRDtBQUVGO0FBaEI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCL0IsYUFBTyxJQUFQO0FBRUQ7QUFFRDs7Ozs7Ozs7OztnQ0FPd0I7QUFFdEIsV0FBS0gsS0FBTCxDQUFXUSxLQUFYO0FBRUEsYUFBTyxJQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OzBCQVlNVixFLEVBQTBCO0FBRTlCLFVBQU1PLFVBQWtCLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxFQUEzQjtBQUY4QjtBQUFBO0FBQUE7O0FBQUE7QUFJOUIsOEJBQW1CLEtBQUtOLEtBQXhCLG1JQUErQjtBQUFBLGNBQXBCRyxJQUFvQjtBQUU3QixjQUFNSSxjQUFzQixHQUFHSixJQUFJLENBQUNMLEVBQUwsQ0FBUVEsUUFBUixFQUEvQjs7QUFFQSxjQUFJLENBQUNILElBQUksQ0FBQ00sTUFBTixJQUFnQkosVUFBVSxLQUFLRSxjQUFuQyxFQUFtRDtBQUVqREosWUFBQUEsSUFBSSxDQUFDTSxNQUFMLEdBQWMsSUFBZDtBQUVBO0FBRUQ7QUFFRjtBQWhCNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQjlCLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7OzsyQkFTT1gsRSxFQUEwQjtBQUUvQixVQUFNTyxVQUFrQixHQUFHUCxFQUFFLENBQUNRLFFBQUgsRUFBM0I7QUFGK0I7QUFBQTtBQUFBOztBQUFBO0FBSS9CLDhCQUFtQixLQUFLTixLQUF4QixtSUFBK0I7QUFBQSxjQUFwQkcsSUFBb0I7QUFFN0IsY0FBTUksY0FBc0IsR0FBR0osSUFBSSxDQUFDTCxFQUFMLENBQVFRLFFBQVIsRUFBL0I7O0FBRUEsY0FBSUgsSUFBSSxDQUFDTSxNQUFMLElBQWVKLFVBQVUsS0FBS0UsY0FBbEMsRUFBa0Q7QUFFaERKLFlBQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLEtBQWQ7QUFFQTtBQUVEO0FBRUY7QUFoQjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0IvQixhQUFPLElBQVA7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyZ2lhbnQgaXMgdXNlZCB0byBjcmVhdGUgc2lnbmFscyB0aGF0IHJ1biBhIHRhc2sgd2hlbiBlbWl0dGVkLlxyXG4gKlxyXG4gKiBPbmUgb2YgdGhlIGJpZ2dlc3QgYWR2dGFudGFnZXMgdGhhdCBzaWduYWxzIGhhdmUgb3ZlciBuYXRpdmUgSmF2YVNjcmlwdCBldmVudHMgaXMgdGhhdCB0aGV5IGRvbid0IHJlbHkgXHJcbiAqIG9uIGNvcnJlY3QgdHlwaW5nLlxyXG4gKlxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaVxyXG4gKiBcclxuICogQHZlcnNpb24gMi40LjFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVyZ2lhbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGFza3MgdGhhdCBhcmUgc2V0IHRvIHJ1biB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7U2V0fVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgdGFza3M6IFNldDxUYXNrPiA9IG5ldyBTZXQoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgbmV3IHNpZ25hbC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHNpZ25hbCBzaG91bGQgb25seSBiZSBkaXNwYXRjaGVkIG9uY2UgYW5kIHRoZW4gZGVsZXRlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuXHQgKi9cclxuICBhZGQoZm46IEZ1bmN0aW9uLCBvbmNlOiBib29sZWFuID0gZmFsc2UpOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICB0aGlzLnRhc2tzLmFkZChuZXcgVGFzayhmbiwgb25jZSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BhdGNoIHRoaXMgSHlwZXJnaWFudCBldmVudCBhbmQgcnVuIGFsbCBvZiB0aGUgdGFza3MgYXNzb2NpYXRlZFxyXG5cdCAqIHdpdGggaXQgYWxvbmcgd2l0aCBhbnkgZGF0YSBwYXNzZWQgdG8gaXQuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHsuLi4qfSBhcmdzIEFueSBvdGhlciBkYXRhIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgSHlwZXJnaWFudCBpbnN0YW5jZS5cclxuXHQgKi9cclxuICBkaXNwYXRjaCguLi5hcmdzOiBbXSkge1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XHJcblxyXG4gICAgICB0YXNrLnJ1biguLi5hcmdzKTtcclxuXHJcbiAgICAgIGlmICh0YXNrLmRlbGV0ZSkgdGhpcy50YXNrcy5kZWxldGUodGFzayk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0YXNrIGZyb20gdGhpcyBzaWduYWwgYnkgbmFtZS5cclxuICAgKlxyXG4gICAqIEBzaW5jZSAyLjMuMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgdGFzayB0byByZW1vdmUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICByZW1vdmUoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgY29uc3QgZm5Ub1N0cmluZzogc3RyaW5nID0gZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xyXG5cclxuICAgICAgY29uc3QgdGFza0ZuVG9TdHJpbmc6IHN0cmluZyA9IHRhc2suZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLnRhc2tzLmRlbGV0ZSh0YXNrKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIHRhc2tzIGZyb20gdGhpcyBzaWduYWwuXHJcbiAgICpcclxuICAgKiBAc2luY2UgMi4zLjBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHJlbW92ZUFsbCgpOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICB0aGlzLnRhc2tzLmNsZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyBhIHRhc2sgYXR0YWNoZWQgdG8gdGhpcyBzaWduYWwgdW50aWwgaXQgaXMgdW5wYXVzZWQuXHJcbiAgICogXHJcbiAgICogVGhpcyBtZWFucyB0aGF0IHRoZSBwYXVzZWQgdGFzayB3aWxsIG5vdCBiZSBjYWxsZWQgYW5kIGp1c3QgYmUgc2lsZW50IHVudGlsIHRoZSBgZW5hYmxlYCBtZXRob2QgaXMgY2FsbGVkXHJcbiAgICogb24gaXQgcmV0dXJuaW5nIGl0IGJhY2sgdG8gaXRzIG5vcm1hbCBzdGF0ZS5cclxuICAgKiBcclxuICAgKiBAc2luY2UgMi40LjBcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0YXNrIFRoZSB0YXNrIHRvIHBhdXNlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHBhdXNlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudGFza3MpIHtcclxuXHJcbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoIXRhc2sucGF1c2VkICYmIGZuVG9TdHJpbmcgPT09IHRhc2tGblRvU3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRhc2sucGF1c2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3VtZXMgYSB0YXNrIGZyb20gYSBwYXVzZWQgc3RhdGUuXHJcbiAgICogXHJcbiAgICogQHNpbmNlIDIuNC4wXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgcGF1c2VkIHRhc2suXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVzdW1lKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudGFza3MpIHtcclxuXHJcbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAodGFzay5wYXVzZWQgJiYgZm5Ub1N0cmluZyA9PT0gdGFza0ZuVG9TdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGFzay5wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==