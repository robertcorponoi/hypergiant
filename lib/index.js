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
    /**
     * Makes a task a noop function.
     * 
     * @param {Function} task The task to make noop.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "noop",
    value: function noop(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var task = _step5.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            task.fn = function () {};

            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return this;
    }
  }]);
  return Hypergiant;
}();

exports["default"] = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwidGFza3MiLCJhZGQiLCJUYXNrIiwidGFzayIsInJ1biIsImZuVG9TdHJpbmciLCJ0b1N0cmluZyIsInRhc2tGblRvU3RyaW5nIiwiY2xlYXIiLCJwYXVzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7O0lBTXFCQSxVOzs7OztvREFPUSxJQUFJQyxHQUFKLEU7Ozs7OztBQUU1Qjs7Ozs7Ozs7d0JBUUtDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1CO0FBRW5ELFdBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLElBQUlDLGdCQUFKLENBQVNKLEVBQVQsRUFBYUMsSUFBYixDQUFmO0FBRUEsYUFBTyxJQUFQO0FBRUQ7QUFFRjs7Ozs7Ozs7OytCQU11QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVwQiw2QkFBbUIsS0FBS0MsS0FBeEIsOEhBQStCO0FBQUEsY0FBcEJHLElBQW9CO0FBRTdCQSxVQUFBQSxJQUFJLENBQUNDLEdBQUwsT0FBQUQsSUFBSSxZQUFKO0FBRUEsY0FBSUEsSUFBSSxVQUFSLEVBQWlCLEtBQUtILEtBQUwsV0FBa0JHLElBQWxCO0FBRWxCO0FBUm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVckI7QUFFRDs7Ozs7Ozs7OzsyQkFPT0wsRSxFQUEwQjtBQUUvQixVQUFNTyxVQUFrQixHQUFHUCxFQUFFLENBQUNRLFFBQUgsRUFBM0I7QUFGK0I7QUFBQTtBQUFBOztBQUFBO0FBSS9CLDhCQUFtQixLQUFLTixLQUF4QixtSUFBK0I7QUFBQSxjQUFwQkcsSUFBb0I7QUFFN0IsY0FBTUksY0FBc0IsR0FBR0osSUFBSSxDQUFDTCxFQUFMLENBQVFRLFFBQVIsRUFBL0I7O0FBRUEsY0FBSUQsVUFBVSxLQUFLRSxjQUFuQixFQUFtQztBQUVqQyxpQkFBS1AsS0FBTCxXQUFrQkcsSUFBbEI7QUFFQTtBQUVEO0FBRUY7QUFoQjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0IvQixhQUFPLElBQVA7QUFFRDtBQUVEOzs7Ozs7OztnQ0FLd0I7QUFFdEIsV0FBS0gsS0FBTCxDQUFXUSxLQUFYO0FBRUEsYUFBTyxJQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7OzswQkFVTVYsRSxFQUEwQjtBQUU5QixVQUFNTyxVQUFrQixHQUFHUCxFQUFFLENBQUNRLFFBQUgsRUFBM0I7QUFGOEI7QUFBQTtBQUFBOztBQUFBO0FBSTlCLDhCQUFtQixLQUFLTixLQUF4QixtSUFBK0I7QUFBQSxjQUFwQkcsSUFBb0I7QUFFN0IsY0FBTUksY0FBc0IsR0FBR0osSUFBSSxDQUFDTCxFQUFMLENBQVFRLFFBQVIsRUFBL0I7O0FBRUEsY0FBSSxDQUFDSCxJQUFJLENBQUNNLE1BQU4sSUFBZ0JKLFVBQVUsS0FBS0UsY0FBbkMsRUFBbUQ7QUFFakRKLFlBQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLElBQWQ7QUFFQTtBQUVEO0FBRUY7QUFoQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0I5QixhQUFPLElBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OzJCQU9PWCxFLEVBQTBCO0FBRS9CLFVBQU1PLFVBQWtCLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxFQUEzQjtBQUYrQjtBQUFBO0FBQUE7O0FBQUE7QUFJL0IsOEJBQW1CLEtBQUtOLEtBQXhCLG1JQUErQjtBQUFBLGNBQXBCRyxJQUFvQjtBQUU3QixjQUFNSSxjQUFzQixHQUFHSixJQUFJLENBQUNMLEVBQUwsQ0FBUVEsUUFBUixFQUEvQjs7QUFFQSxjQUFJSCxJQUFJLENBQUNNLE1BQUwsSUFBZUosVUFBVSxLQUFLRSxjQUFsQyxFQUFrRDtBQUVoREosWUFBQUEsSUFBSSxDQUFDTSxNQUFMLEdBQWMsS0FBZDtBQUVBO0FBRUQ7QUFFRjtBQWhCOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQi9CLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tYLEUsRUFBMEI7QUFFN0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRjZCO0FBQUE7QUFBQTs7QUFBQTtBQUk3Qiw4QkFBbUIsS0FBS04sS0FBeEIsbUlBQStCO0FBQUEsY0FBcEJHLElBQW9CO0FBRTdCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakNKLFlBQUFBLElBQUksQ0FBQ0wsRUFBTCxHQUFVLFlBQU0sQ0FBRyxDQUFuQjs7QUFFQTtBQUVEO0FBRUY7QUFoQjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0I3QixhQUFPLElBQVA7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyZ2lhbnQgaXMgdXNlZCB0byBjcmVhdGUgc2lnbmFscyB0aGF0IHJ1biBhIHRhc2sgd2hlbiBlbWl0dGVkLlxyXG4gKlxyXG4gKiBPbmUgb2YgdGhlIGJpZ2dlc3QgYWR2dGFudGFnZXMgdGhhdCBzaWduYWxzIGhhdmUgb3ZlciBuYXRpdmUgSmF2YVNjcmlwdCBldmVudHMgaXMgdGhhdCB0aGV5IGRvbid0IHJlbHkgXHJcbiAqIG9uIGNvcnJlY3QgdHlwaW5nLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlwZXJnaWFudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0YXNrcyB0aGF0IGFyZSBzZXQgdG8gcnVuIHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgc2lnbmFsIGlzIGRpc3BhdGNoZWQuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtTZXR9XHJcblx0ICovXHJcbiAgcHJpdmF0ZSB0YXNrczogU2V0PFRhc2s+ID0gbmV3IFNldCgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBuZXcgc2lnbmFsLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBtZXRob2QgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uY2U9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgc2lnbmFsIHNob3VsZCBvbmx5IGJlIGRpc3BhdGNoZWQgb25jZSBhbmQgdGhlbiBkZWxldGVkLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG5cdCAqL1xyXG4gIGFkZChmbjogRnVuY3Rpb24sIG9uY2U6IGJvb2xlYW4gPSBmYWxzZSk6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIHRoaXMudGFza3MuYWRkKG5ldyBUYXNrKGZuLCBvbmNlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGF0Y2ggdGhpcyBIeXBlcmdpYW50IGV2ZW50IGFuZCBydW4gYWxsIG9mIHRoZSB0YXNrcyBhc3NvY2lhdGVkXHJcblx0ICogd2l0aCBpdCBhbG9uZyB3aXRoIGFueSBkYXRhIHBhc3NlZCB0byBpdC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBIeXBlcmdpYW50IGluc3RhbmNlLlxyXG5cdCAqL1xyXG4gIGRpc3BhdGNoKC4uLmFyZ3M6IFtdKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudGFza3MpIHtcclxuXHJcbiAgICAgIHRhc2sucnVuKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgaWYgKHRhc2suZGVsZXRlKSB0aGlzLnRhc2tzLmRlbGV0ZSh0YXNrKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIHRhc2sgZnJvbSB0aGlzIHNpZ25hbCBieSBuYW1lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgdGFzayB0byByZW1vdmUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICByZW1vdmUoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgY29uc3QgZm5Ub1N0cmluZzogc3RyaW5nID0gZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xyXG5cclxuICAgICAgY29uc3QgdGFza0ZuVG9TdHJpbmc6IHN0cmluZyA9IHRhc2suZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLnRhc2tzLmRlbGV0ZSh0YXNrKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIHRhc2tzIGZyb20gdGhpcyBzaWduYWwuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICByZW1vdmVBbGwoKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgdGhpcy50YXNrcy5jbGVhcigpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXVzZXMgYSB0YXNrIGF0dGFjaGVkIHRvIHRoaXMgc2lnbmFsIHVudGlsIGl0IGlzIHVucGF1c2VkLlxyXG4gICAqIFxyXG4gICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgcGF1c2VkIHRhc2sgd2lsbCBub3QgYmUgY2FsbGVkIGFuZCBqdXN0IGJlIHNpbGVudCB1bnRpbCB0aGUgYGVuYWJsZWAgbWV0aG9kIGlzIGNhbGxlZFxyXG4gICAqIG9uIGl0IHJldHVybmluZyBpdCBiYWNrIHRvIGl0cyBub3JtYWwgc3RhdGUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgdGFzayB0byBwYXVzZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICBwYXVzZShmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XHJcblxyXG4gICAgICBjb25zdCB0YXNrRm5Ub1N0cmluZzogc3RyaW5nID0gdGFzay5mbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKCF0YXNrLnBhdXNlZCAmJiBmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0YXNrLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWVzIGEgdGFzayBmcm9tIGEgcGF1c2VkIHN0YXRlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHBhdXNlZCB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHJlc3VtZShmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XHJcblxyXG4gICAgICBjb25zdCB0YXNrRm5Ub1N0cmluZzogc3RyaW5nID0gdGFzay5mbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKHRhc2sucGF1c2VkICYmIGZuVG9TdHJpbmcgPT09IHRhc2tGblRvU3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRhc2sucGF1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWtlcyBhIHRhc2sgYSBub29wIGZ1bmN0aW9uLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHRhc2sgdG8gbWFrZSBub29wLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIG5vb3AoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XHJcblxyXG4gICAgY29uc3QgZm5Ub1N0cmluZzogc3RyaW5nID0gZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xyXG5cclxuICAgICAgY29uc3QgdGFza0ZuVG9TdHJpbmc6IHN0cmluZyA9IHRhc2suZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0YXNrLmZuID0gKCkgPT4geyB9O1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19