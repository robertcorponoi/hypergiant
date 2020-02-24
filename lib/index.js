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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwiX3Rhc2tzIiwiYWRkIiwiVGFzayIsInRhc2siLCJydW4iLCJmblRvU3RyaW5nIiwidG9TdHJpbmciLCJ0YXNrRm5Ub1N0cmluZyIsImNsZWFyIiwicGF1c2VkIiwic2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7SUFNcUJBLFU7Ozs7O3FEQVNTLElBQUlDLEdBQUosRTs7Ozs7O0FBZ0I3Qjs7Ozs7Ozs7d0JBUUtDLEUsRUFBaUQ7QUFBQSxVQUFuQ0MsSUFBbUMsdUVBQW5CLEtBQW1COztBQUVuRCxXQUFLQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsSUFBSUMsZ0JBQUosQ0FBU0osRUFBVCxFQUFhQyxJQUFiLENBQWhCOztBQUVBLGFBQU8sSUFBUDtBQUVEO0FBRUY7Ozs7Ozs7OzsrQkFNd0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFckIsNkJBQW1CLEtBQUtDLE1BQXhCLDhIQUFnQztBQUFBLGNBQXJCRyxJQUFxQjtBQUU5QkEsVUFBQUEsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksWUFBSjtBQUVBLGNBQUlBLElBQUksVUFBUixFQUFpQixLQUFLSCxNQUFMLFdBQW1CRyxJQUFuQjtBQUVsQjtBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXRCO0FBRUQ7Ozs7Ozs7Ozs7MkJBT09MLEUsRUFBMEI7QUFFL0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRitCO0FBQUE7QUFBQTs7QUFBQTtBQUkvQiw4QkFBbUIsS0FBS04sTUFBeEIsbUlBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBRTlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakMsaUJBQUtQLE1BQUwsV0FBbUJHLElBQW5COztBQUVBO0FBRUQ7QUFFRjtBQWhCOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQi9CLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7O2dDQUt3QjtBQUV0QixXQUFLSCxNQUFMLENBQVlRLEtBQVo7O0FBRUEsYUFBTyxJQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7OzswQkFVTVYsRSxFQUEwQjtBQUU5QixVQUFNTyxVQUFrQixHQUFHUCxFQUFFLENBQUNRLFFBQUgsRUFBM0I7QUFGOEI7QUFBQTtBQUFBOztBQUFBO0FBSTlCLDhCQUFtQixLQUFLTixNQUF4QixtSUFBZ0M7QUFBQSxjQUFyQkcsSUFBcUI7QUFFOUIsY0FBTUksY0FBc0IsR0FBR0osSUFBSSxDQUFDTCxFQUFMLENBQVFRLFFBQVIsRUFBL0I7O0FBRUEsY0FBSSxDQUFDSCxJQUFJLENBQUNNLE1BQU4sSUFBZ0JKLFVBQVUsS0FBS0UsY0FBbkMsRUFBbUQ7QUFFakRKLFlBQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLElBQWQ7QUFFQTtBQUVEO0FBRUY7QUFoQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0I5QixhQUFPLElBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OzJCQU9PWCxFLEVBQTBCO0FBRS9CLFVBQU1PLFVBQWtCLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxFQUEzQjtBQUYrQjtBQUFBO0FBQUE7O0FBQUE7QUFJL0IsOEJBQW1CLEtBQUtOLE1BQXhCLG1JQUFnQztBQUFBLGNBQXJCRyxJQUFxQjtBQUU5QixjQUFNSSxjQUFzQixHQUFHSixJQUFJLENBQUNMLEVBQUwsQ0FBUVEsUUFBUixFQUEvQjs7QUFFQSxjQUFJSCxJQUFJLENBQUNNLE1BQUwsSUFBZUosVUFBVSxLQUFLRSxjQUFsQyxFQUFrRDtBQUVoREosWUFBQUEsSUFBSSxDQUFDTSxNQUFMLEdBQWMsS0FBZDtBQUVBO0FBRUQ7QUFFRjtBQWhCOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQi9CLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tYLEUsRUFBMEI7QUFFN0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCO0FBRjZCO0FBQUE7QUFBQTs7QUFBQTtBQUk3Qiw4QkFBbUIsS0FBS04sTUFBeEIsbUlBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBRTlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFFakNKLFlBQUFBLElBQUksQ0FBQ0wsRUFBTCxHQUFVLFlBQU0sQ0FBRyxDQUFuQjs7QUFFQTtBQUVEO0FBRUY7QUFoQjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0I3QixhQUFPLElBQVA7QUFFRDs7OztBQW5MRDs7Ozs7d0JBS3VCO0FBQUUsYUFBTyxLQUFLRSxNQUFaO0FBQXFCO0FBRTlDOzs7Ozs7Ozt3QkFLdUI7QUFBRSxhQUFPLEtBQUtBLE1BQUwsQ0FBWVUsSUFBbkI7QUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuXG4vKipcbiAqIEh5cGVyZ2lhbnQgaXMgdXNlZCB0byBjcmVhdGUgc2lnbmFscyB0aGF0IHJ1biBhIHRhc2sgd2hlbiBlbWl0dGVkLlxuICpcbiAqIE9uZSBvZiB0aGUgYmlnZ2VzdCBhZHZ0YW50YWdlcyB0aGF0IHNpZ25hbHMgaGF2ZSBvdmVyIG5hdGl2ZSBKYXZhU2NyaXB0IGV2ZW50cyBpcyB0aGF0IHRoZXkgZG9uJ3QgcmVseSBcbiAqIG9uIGNvcnJlY3QgdHlwaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeXBlcmdpYW50IHtcblxuICAvKipcbiAgICogVGhlIHRhc2tzIHRoYXQgYXJlIHNldCB0byBydW4gd2hlbiB0aGUgY29ycmVzcG9uZGluZyBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cbiAgICogXG4gICAqIEBwcml2YXRlXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge1NldH1cblx0ICovXG4gIHByaXZhdGUgX3Rhc2tzOiBTZXQ8VGFzaz4gPSBuZXcgU2V0KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRhc2tzIGNyZWF0ZWQgZm9yIHRoaXMgc2lnbmFsLlxuICAgKiBcbiAgICogQHJldHVybnMge1NldDxUYXNrPn1cbiAgICovXG4gIGdldCB0YXNrcygpOiBTZXQ8VGFzaz4geyByZXR1cm4gdGhpcy5fdGFza3M7IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRhc2tzIGN1cnJlbnRseSBhc3NpZ25lZCB0byB0aGlzIHNpZ25hbC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbnVtVGFza3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3Rhc2tzLnNpemU7IH1cblxuXHQvKipcblx0ICogQWRkIGEgbmV3IHNpZ25hbC5cblx0ICogXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBtZXRob2QgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHNpZ25hbCBzaG91bGQgb25seSBiZSBkaXNwYXRjaGVkIG9uY2UgYW5kIHRoZW4gZGVsZXRlZC5cblx0ICogXG5cdCAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxuXHQgKi9cbiAgYWRkKGZuOiBGdW5jdGlvbiwgb25jZTogYm9vbGVhbiA9IGZhbHNlKTogSHlwZXJnaWFudCB7XG5cbiAgICB0aGlzLl90YXNrcy5hZGQobmV3IFRhc2soZm4sIG9uY2UpKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuXHQvKipcblx0ICogRGlzcGF0Y2ggdGhpcyBIeXBlcmdpYW50IGV2ZW50IGFuZCBydW4gYWxsIG9mIHRoZSB0YXNrcyBhc3NvY2lhdGVkXG5cdCAqIHdpdGggaXQgYWxvbmcgd2l0aCBhbnkgZGF0YSBwYXNzZWQgdG8gaXQuXG5cdCAqIFxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBIeXBlcmdpYW50IGluc3RhbmNlLlxuXHQgKi9cbiAgZGlzcGF0Y2goLi4uYXJnczogYW55KSB7XG5cbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5fdGFza3MpIHtcblxuICAgICAgdGFzay5ydW4oLi4uYXJncyk7XG5cbiAgICAgIGlmICh0YXNrLmRlbGV0ZSkgdGhpcy5fdGFza3MuZGVsZXRlKHRhc2spO1xuXG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHRhc2sgZnJvbSB0aGlzIHNpZ25hbCBieSBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0YXNrIFRoZSB0YXNrIHRvIHJlbW92ZS5cbiAgICpcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXG4gICAqL1xuICByZW1vdmUoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XG5cbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xuXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XG5cbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xuXG4gICAgICAgIHRoaXMuX3Rhc2tzLmRlbGV0ZSh0YXNrKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCB0YXNrcyBmcm9tIHRoaXMgc2lnbmFsLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cbiAgICovXG4gIHJlbW92ZUFsbCgpOiBIeXBlcmdpYW50IHtcblxuICAgIHRoaXMuX3Rhc2tzLmNsZWFyKCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuXG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIGEgdGFzayBhdHRhY2hlZCB0byB0aGlzIHNpZ25hbCB1bnRpbCBpdCBpcyB1bnBhdXNlZC5cbiAgICogXG4gICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgcGF1c2VkIHRhc2sgd2lsbCBub3QgYmUgY2FsbGVkIGFuZCBqdXN0IGJlIHNpbGVudCB1bnRpbCB0aGUgYGVuYWJsZWAgbWV0aG9kIGlzIGNhbGxlZFxuICAgKiBvbiBpdCByZXR1cm5pbmcgaXQgYmFjayB0byBpdHMgbm9ybWFsIHN0YXRlLlxuICAgKiBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgdGFzayB0byBwYXVzZS5cbiAgICogXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxuICAgKi9cbiAgcGF1c2UoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XG5cbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xuXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XG5cbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmICghdGFzay5wYXVzZWQgJiYgZm5Ub1N0cmluZyA9PT0gdGFza0ZuVG9TdHJpbmcpIHtcblxuICAgICAgICB0YXNrLnBhdXNlZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lcyBhIHRhc2sgZnJvbSBhIHBhdXNlZCBzdGF0ZS5cbiAgICogXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHBhdXNlZCB0YXNrLlxuICAgKiBcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXG4gICAqL1xuICByZXN1bWUoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XG5cbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xuXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XG5cbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmICh0YXNrLnBhdXNlZCAmJiBmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xuXG4gICAgICAgIHRhc2sucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYSB0YXNrIGEgbm9vcCBmdW5jdGlvbi5cbiAgICogXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHRhc2sgdG8gbWFrZSBub29wLlxuICAgKiBcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXG4gICAqL1xuICBub29wKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xuXG4gICAgY29uc3QgZm5Ub1N0cmluZzogc3RyaW5nID0gZm4udG9TdHJpbmcoKTtcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLl90YXNrcykge1xuXG4gICAgICBjb25zdCB0YXNrRm5Ub1N0cmluZzogc3RyaW5nID0gdGFzay5mbi50b1N0cmluZygpO1xuXG4gICAgICBpZiAoZm5Ub1N0cmluZyA9PT0gdGFza0ZuVG9TdHJpbmcpIHtcblxuICAgICAgICB0YXNrLmZuID0gKCkgPT4geyB9O1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbn1cbiJdfQ==