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
    (0, _defineProperty2["default"])(this, "_tasks", new Set());
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

      this._tasks.add(new _Task["default"](fn, once));

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
        for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task["delete"]) this._tasks["delete"](task);
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
        for (var _iterator2 = this._tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this._tasks["delete"](task);

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
      this._tasks.clear();

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
        for (var _iterator3 = this._tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
        for (var _iterator4 = this._tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
        for (var _iterator5 = this._tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Set<Task>}
     */
    get: function get() {
      return this._tasks;
    }
    /**
     * Returns the number of tasks currently assigned to this signal.
     * 
     * @returns {number}
     */

  }, {
    key: "numTasks",
    get: function get() {
      return this._tasks.size;
    }
  }]);
  return Hypergiant;
}();

exports["default"] = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwiX3Rhc2tzIiwiYWRkIiwiVGFzayIsInRhc2siLCJydW4iLCJmblRvU3RyaW5nIiwidG9TdHJpbmciLCJ0YXNrRm5Ub1N0cmluZyIsImNsZWFyIiwicGF1c2VkIiwic2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7SUFNcUJBLFU7Ozs7O3FEQVNTLElBQUlDLEdBQUosRTs7Ozs7O0FBZ0I3Qjs7Ozs7Ozs7d0JBUUtDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1COztBQUVuRCxXQUFLQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsSUFBSUMsZ0JBQUosQ0FBU0osRUFBVCxFQUFhQyxJQUFiLENBQWhCOztBQUVBLGFBQU8sSUFBUDtBQUVEO0FBRUY7Ozs7Ozs7OzsrQkFNd0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFckIsNkJBQW1CLEtBQUtDLE1BQXhCLDhIQUFnQztBQUFBLGNBQXJCRyxJQUFxQjtBQUU5QkEsVUFBQUEsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksWUFBSjtBQUVBLGNBQUlBLElBQUksVUFBUixFQUFpQixLQUFLSCxNQUFMLFdBQW1CRyxJQUFuQjtBQUVsQjtBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXRCO0FBRUQ7Ozs7Ozs7Ozs7MkJBT09MLEUsRUFBMEI7QUFFL0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRitCO0FBQUE7QUFBQTs7QUFBQTtBQUkvQiw4QkFBbUIsS0FBS04sTUFBeEIsbUlBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBRTlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakMsaUJBQUtQLE1BQUwsV0FBbUJHLElBQW5COztBQUVBO0FBRUQ7QUFFRjtBQWhCOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQi9CLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7O2dDQUt3QjtBQUV0QixXQUFLSCxNQUFMLENBQVlRLEtBQVo7O0FBRUEsYUFBTyxJQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7OzswQkFVTVYsRSxFQUEwQjtBQUU5QixVQUFNTyxVQUFrQixHQUFHUCxFQUFFLENBQUNRLFFBQUgsRUFBM0I7QUFGOEI7QUFBQTtBQUFBOztBQUFBO0FBSTlCLDhCQUFtQixLQUFLTixNQUF4QixtSUFBZ0M7QUFBQSxjQUFyQkcsSUFBcUI7QUFFOUIsY0FBTUksY0FBc0IsR0FBR0osSUFBSSxDQUFDTCxFQUFMLENBQVFRLFFBQVIsRUFBL0I7O0FBRUEsY0FBSSxDQUFDSCxJQUFJLENBQUNNLE1BQU4sSUFBZ0JKLFVBQVUsS0FBS0UsY0FBbkMsRUFBbUQ7QUFFakRKLFlBQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLElBQWQ7QUFFQTtBQUVEO0FBRUY7QUFoQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0I5QixhQUFPLElBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OzJCQU9PWCxFLEVBQTBCO0FBRS9CLFVBQU1PLFVBQWtCLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxFQUEzQjtBQUYrQjtBQUFBO0FBQUE7O0FBQUE7QUFJL0IsOEJBQW1CLEtBQUtOLE1BQXhCLG1JQUFnQztBQUFBLGNBQXJCRyxJQUFxQjtBQUU5QixjQUFNSSxjQUFzQixHQUFHSixJQUFJLENBQUNMLEVBQUwsQ0FBUVEsUUFBUixFQUEvQjs7QUFFQSxjQUFJSCxJQUFJLENBQUNNLE1BQUwsSUFBZUosVUFBVSxLQUFLRSxjQUFsQyxFQUFrRDtBQUVoREosWUFBQUEsSUFBSSxDQUFDTSxNQUFMLEdBQWMsS0FBZDtBQUVBO0FBRUQ7QUFFRjtBQWhCOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQi9CLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tYLEUsRUFBMEI7QUFFN0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRjZCO0FBQUE7QUFBQTs7QUFBQTtBQUk3Qiw4QkFBbUIsS0FBS04sTUFBeEIsbUlBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBRTlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakNKLFlBQUFBLElBQUksQ0FBQ0wsRUFBTCxHQUFVLFlBQU0sQ0FBRyxDQUFuQjs7QUFFQTtBQUVEO0FBRUY7QUFoQjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0I3QixhQUFPLElBQVA7QUFFRDs7OztBQW5MRDs7Ozs7d0JBS3VCO0FBQUUsYUFBTyxLQUFLRSxNQUFaO0FBQXFCO0FBRTlDOzs7Ozs7Ozt3QkFLdUI7QUFBRSxhQUFPLEtBQUtBLE1BQUwsQ0FBWVUsSUFBbkI7QUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcclxuXHJcbi8qKlxyXG4gKiBIeXBlcmdpYW50IGlzIHVzZWQgdG8gY3JlYXRlIHNpZ25hbHMgdGhhdCBydW4gYSB0YXNrIHdoZW4gZW1pdHRlZC5cclxuICpcclxuICogT25lIG9mIHRoZSBiaWdnZXN0IGFkdnRhbnRhZ2VzIHRoYXQgc2lnbmFscyBoYXZlIG92ZXIgbmF0aXZlIEphdmFTY3JpcHQgZXZlbnRzIGlzIHRoYXQgdGhleSBkb24ndCByZWx5IFxyXG4gKiBvbiBjb3JyZWN0IHR5cGluZy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVyZ2lhbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGFza3MgdGhhdCBhcmUgc2V0IHRvIHJ1biB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtTZXR9XHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfdGFza3M6IFNldDxUYXNrPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdGFza3MgY3JlYXRlZCBmb3IgdGhpcyBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1NldDxUYXNrPn1cclxuICAgKi9cclxuICBnZXQgdGFza3MoKTogU2V0PFRhc2s+IHsgcmV0dXJuIHRoaXMuX3Rhc2tzOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0YXNrcyBjdXJyZW50bHkgYXNzaWduZWQgdG8gdGhpcyBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXQgbnVtVGFza3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3Rhc2tzLnNpemU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgbmV3IHNpZ25hbC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHNpZ25hbCBzaG91bGQgb25seSBiZSBkaXNwYXRjaGVkIG9uY2UgYW5kIHRoZW4gZGVsZXRlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuXHQgKi9cclxuICBhZGQoZm46IEZ1bmN0aW9uLCBvbmNlOiBib29sZWFuID0gZmFsc2UpOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICB0aGlzLl90YXNrcy5hZGQobmV3IFRhc2soZm4sIG9uY2UpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwYXRjaCB0aGlzIEh5cGVyZ2lhbnQgZXZlbnQgYW5kIHJ1biBhbGwgb2YgdGhlIHRhc2tzIGFzc29jaWF0ZWRcclxuXHQgKiB3aXRoIGl0IGFsb25nIHdpdGggYW55IGRhdGEgcGFzc2VkIHRvIGl0LlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gYXJncyBBbnkgb3RoZXIgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIEh5cGVyZ2lhbnQgaW5zdGFuY2UuXHJcblx0ICovXHJcbiAgZGlzcGF0Y2goLi4uYXJnczogYW55KSB7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XHJcblxyXG4gICAgICB0YXNrLnJ1biguLi5hcmdzKTtcclxuXHJcbiAgICAgIGlmICh0YXNrLmRlbGV0ZSkgdGhpcy5fdGFza3MuZGVsZXRlKHRhc2spO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgdGFzayBmcm9tIHRoaXMgc2lnbmFsIGJ5IG5hbWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0YXNrIFRoZSB0YXNrIHRvIHJlbW92ZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHJlbW92ZShmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLl90YXNrcykge1xyXG5cclxuICAgICAgY29uc3QgdGFza0ZuVG9TdHJpbmc6IHN0cmluZyA9IHRhc2suZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLl90YXNrcy5kZWxldGUodGFzayk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCB0YXNrcyBmcm9tIHRoaXMgc2lnbmFsLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsKCk6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIHRoaXMuX3Rhc2tzLmNsZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyBhIHRhc2sgYXR0YWNoZWQgdG8gdGhpcyBzaWduYWwgdW50aWwgaXQgaXMgdW5wYXVzZWQuXHJcbiAgICogXHJcbiAgICogVGhpcyBtZWFucyB0aGF0IHRoZSBwYXVzZWQgdGFzayB3aWxsIG5vdCBiZSBjYWxsZWQgYW5kIGp1c3QgYmUgc2lsZW50IHVudGlsIHRoZSBgZW5hYmxlYCBtZXRob2QgaXMgY2FsbGVkXHJcbiAgICogb24gaXQgcmV0dXJuaW5nIGl0IGJhY2sgdG8gaXRzIG5vcm1hbCBzdGF0ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0YXNrIFRoZSB0YXNrIHRvIHBhdXNlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHBhdXNlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XHJcblxyXG4gICAgICBjb25zdCB0YXNrRm5Ub1N0cmluZzogc3RyaW5nID0gdGFzay5mbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKCF0YXNrLnBhdXNlZCAmJiBmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0YXNrLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWVzIGEgdGFzayBmcm9tIGEgcGF1c2VkIHN0YXRlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHBhdXNlZCB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHJlc3VtZShmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuXHJcbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLl90YXNrcykge1xyXG5cclxuICAgICAgY29uc3QgdGFza0ZuVG9TdHJpbmc6IHN0cmluZyA9IHRhc2suZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmICh0YXNrLnBhdXNlZCAmJiBmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG5cclxuICAgICAgICB0YXNrLnBhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFrZXMgYSB0YXNrIGEgbm9vcCBmdW5jdGlvbi5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0YXNrIFRoZSB0YXNrIHRvIG1ha2Ugbm9vcC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICBub29wKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG5cclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XHJcblxyXG4gICAgICBjb25zdCB0YXNrRm5Ub1N0cmluZzogc3RyaW5nID0gdGFzay5mbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKGZuVG9TdHJpbmcgPT09IHRhc2tGblRvU3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRhc2suZm4gPSAoKSA9PiB7IH07XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=