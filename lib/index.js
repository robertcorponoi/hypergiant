'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Task = _interopRequireDefault(require("./Task"));

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript 
 * events is that they don't rely on correct typing.
 */
var Hypergiant = /*#__PURE__*/function () {
  function Hypergiant() {
    (0, _classCallCheck2["default"])(this, Hypergiant);
    (0, _defineProperty2["default"])(this, "_tasks", new Array());
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

      this._tasks.push(new _Task["default"](fn, once));

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
      for (var i = 0; i < this.tasks.length; ++i) {
        var task = this.tasks[i]; // For each task we run it with th eprovided arguments.

        task.run.apply(task, arguments); // If the task is set to be deleted, then we have to get the index of the current
        // task and then splice it.

        if (task["delete"]) this.tasks.splice(i, 1);
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
      this._tasks = this.tasks.filter(function (task) {
        return task.fn.toString() != fn.toString();
      });
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
      this._tasks = [];
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
      var taskToPause = this.tasks.find(function (task) {
        return !task.paused && fn.toString() === task.fn.toString();
      });
      if (taskToPause) taskToPause.paused = true;
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
      var taskToResume = this.tasks.find(function (task) {
        return task.paused && fn.toString() === task.fn.toString();
      });
      if (taskToResume) taskToResume.paused = false;
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
      var taskToNoop = this.tasks.find(function (task) {
        return fn.toString() === task.fn.toString();
      });
      if (taskToNoop) taskToNoop.fn = function () {};
      return this;
    }
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Array<Task>}
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
      return this._tasks.length;
    }
  }]);
  return Hypergiant;
}();

exports["default"] = Hypergiant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiQXJyYXkiLCJmbiIsIm9uY2UiLCJfdGFza3MiLCJwdXNoIiwiVGFzayIsImkiLCJ0YXNrcyIsImxlbmd0aCIsInRhc2siLCJydW4iLCJzcGxpY2UiLCJmaWx0ZXIiLCJ0b1N0cmluZyIsInRhc2tUb1BhdXNlIiwiZmluZCIsInBhdXNlZCIsInRhc2tUb1Jlc3VtZSIsInRhc2tUb05vb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7O0lBTXFCQSxVOzs7cURBUVcsSUFBSUMsS0FBSixFOzs7Ozs7QUFnQi9COzs7Ozs7Ozt3QkFRS0MsRSxFQUFpRDtBQUFBLFVBQW5DQyxJQUFtQyx1RUFBbkIsS0FBbUI7O0FBQ25ELFdBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFJQyxnQkFBSixDQUFTSixFQUFULEVBQWFDLElBQWIsQ0FBakI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRjs7Ozs7Ozs7OytCQU13QjtBQUNyQixXQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxNQUEvQixFQUF1QyxFQUFFRixDQUF6QyxFQUE0QztBQUMxQyxZQUFNRyxJQUFJLEdBQUcsS0FBS0YsS0FBTCxDQUFXRCxDQUFYLENBQWIsQ0FEMEMsQ0FHMUM7O0FBQ0FHLFFBQUFBLElBQUksQ0FBQ0MsR0FBTCxPQUFBRCxJQUFJLFlBQUosQ0FKMEMsQ0FNMUM7QUFDQTs7QUFDQSxZQUFJQSxJQUFJLFVBQVIsRUFBaUIsS0FBS0YsS0FBTCxDQUFXSSxNQUFYLENBQWtCTCxDQUFsQixFQUFxQixDQUFyQjtBQUNsQjtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7MkJBT09MLEUsRUFBMEI7QUFDL0IsV0FBS0UsTUFBTCxHQUFjLEtBQUtJLEtBQUwsQ0FBV0ssTUFBWCxDQUFrQixVQUFBSCxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDUixFQUFMLENBQVFZLFFBQVIsTUFBc0JaLEVBQUUsQ0FBQ1ksUUFBSCxFQUExQjtBQUFBLE9BQXRCLENBQWQ7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OztnQ0FLd0I7QUFDdEIsV0FBS1YsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OzBCQVVNRixFLEVBQTBCO0FBQzlCLFVBQU1hLFdBQVcsR0FBRyxLQUFLUCxLQUFMLENBQVdRLElBQVgsQ0FBZ0IsVUFBQU4sSUFBSTtBQUFBLGVBQUksQ0FBQ0EsSUFBSSxDQUFDTyxNQUFOLElBQWdCZixFQUFFLENBQUNZLFFBQUgsT0FBa0JKLElBQUksQ0FBQ1IsRUFBTCxDQUFRWSxRQUFSLEVBQXRDO0FBQUEsT0FBcEIsQ0FBcEI7QUFDQSxVQUFJQyxXQUFKLEVBQWlCQSxXQUFXLENBQUNFLE1BQVosR0FBcUIsSUFBckI7QUFFakIsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzsyQkFPT2YsRSxFQUEwQjtBQUMvQixVQUFNZ0IsWUFBWSxHQUFHLEtBQUtWLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQixVQUFBTixJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDTyxNQUFMLElBQWVmLEVBQUUsQ0FBQ1ksUUFBSCxPQUFrQkosSUFBSSxDQUFDUixFQUFMLENBQVFZLFFBQVIsRUFBckM7QUFBQSxPQUFwQixDQUFyQjtBQUNBLFVBQUlJLFlBQUosRUFBa0JBLFlBQVksQ0FBQ0QsTUFBYixHQUFzQixLQUF0QjtBQUVsQixhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3lCQU9LZixFLEVBQTBCO0FBQzdCLFVBQU1pQixVQUFVLEdBQUcsS0FBS1gsS0FBTCxDQUFXUSxJQUFYLENBQWdCLFVBQUFOLElBQUk7QUFBQSxlQUFJUixFQUFFLENBQUNZLFFBQUgsT0FBa0JKLElBQUksQ0FBQ1IsRUFBTCxDQUFRWSxRQUFSLEVBQXRCO0FBQUEsT0FBcEIsQ0FBbkI7QUFDQSxVQUFJSyxVQUFKLEVBQWdCQSxVQUFVLENBQUNqQixFQUFYLEdBQWdCLFlBQU0sQ0FBRSxDQUF4QjtBQUVoQixhQUFPLElBQVA7QUFDRDs7OztBQS9HRDs7Ozs7d0JBS3lCO0FBQUUsYUFBTyxLQUFLRSxNQUFaO0FBQXFCO0FBRWhEOzs7Ozs7Ozt3QkFLdUI7QUFBRSxhQUFPLEtBQUtBLE1BQUwsQ0FBWUssTUFBbkI7QUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcblxyXG4vKipcclxuICogSHlwZXJnaWFudCBpcyB1c2VkIHRvIGNyZWF0ZSBzaWduYWxzIHRoYXQgcnVuIGEgdGFzayB3aGVuIGVtaXR0ZWQuXHJcbiAqXHJcbiAqIE9uZSBvZiB0aGUgYmlnZ2VzdCBhZHZ0YW50YWdlcyB0aGF0IHNpZ25hbHMgaGF2ZSBvdmVyIG5hdGl2ZSBKYXZhU2NyaXB0IFxyXG4gKiBldmVudHMgaXMgdGhhdCB0aGV5IGRvbid0IHJlbHkgb24gY29ycmVjdCB0eXBpbmcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeXBlcmdpYW50IHtcclxuICAvKipcclxuICAgKiBUaGUgdGFza3MgdGhhdCBhcmUgc2V0IHRvIHJ1biB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtBcnJheX1cclxuXHQgKi9cclxuICBwcml2YXRlIF90YXNrczogQXJyYXk8VGFzaz4gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdGFza3MgY3JlYXRlZCBmb3IgdGhpcyBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0FycmF5PFRhc2s+fVxyXG4gICAqL1xyXG4gIGdldCB0YXNrcygpOiBBcnJheTxUYXNrPiB7IHJldHVybiB0aGlzLl90YXNrczsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGFza3MgY3VycmVudGx5IGFzc2lnbmVkIHRvIHRoaXMgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IG51bVRhc2tzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90YXNrcy5sZW5ndGg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgbmV3IHNpZ25hbC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHNpZ25hbCBzaG91bGQgb25seSBiZSBkaXNwYXRjaGVkIG9uY2UgYW5kIHRoZW4gZGVsZXRlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJucyB7SHlwZXJnaWFudH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuXHQgKi9cclxuICBhZGQoZm46IEZ1bmN0aW9uLCBvbmNlOiBib29sZWFuID0gZmFsc2UpOiBIeXBlcmdpYW50IHtcclxuICAgIHRoaXMuX3Rhc2tzLnB1c2gobmV3IFRhc2soZm4sIG9uY2UpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGF0Y2ggdGhpcyBIeXBlcmdpYW50IGV2ZW50IGFuZCBydW4gYWxsIG9mIHRoZSB0YXNrcyBhc3NvY2lhdGVkXHJcblx0ICogd2l0aCBpdCBhbG9uZyB3aXRoIGFueSBkYXRhIHBhc3NlZCB0byBpdC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBIeXBlcmdpYW50IGluc3RhbmNlLlxyXG5cdCAqL1xyXG4gIGRpc3BhdGNoKC4uLmFyZ3M6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2tzW2ldO1xyXG5cclxuICAgICAgLy8gRm9yIGVhY2ggdGFzayB3ZSBydW4gaXQgd2l0aCB0aCBlcHJvdmlkZWQgYXJndW1lbnRzLlxyXG4gICAgICB0YXNrLnJ1biguLi5hcmdzKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSB0YXNrIGlzIHNldCB0byBiZSBkZWxldGVkLCB0aGVuIHdlIGhhdmUgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudFxyXG4gICAgICAvLyB0YXNrIGFuZCB0aGVuIHNwbGljZSBpdC5cclxuICAgICAgaWYgKHRhc2suZGVsZXRlKSB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0YXNrIGZyb20gdGhpcyBzaWduYWwgYnkgbmFtZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHRhc2sgdG8gcmVtb3ZlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG4gICAgdGhpcy5fdGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZm4udG9TdHJpbmcoKSAhPSBmbi50b1N0cmluZygpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgdGFza3MgZnJvbSB0aGlzIHNpZ25hbC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHJlbW92ZUFsbCgpOiBIeXBlcmdpYW50IHtcclxuICAgIHRoaXMuX3Rhc2tzID0gW107XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyBhIHRhc2sgYXR0YWNoZWQgdG8gdGhpcyBzaWduYWwgdW50aWwgaXQgaXMgdW5wYXVzZWQuXHJcbiAgICogXHJcbiAgICogVGhpcyBtZWFucyB0aGF0IHRoZSBwYXVzZWQgdGFzayB3aWxsIG5vdCBiZSBjYWxsZWQgYW5kIGp1c3QgYmUgc2lsZW50IHVudGlsIHRoZSBgZW5hYmxlYCBtZXRob2QgaXMgY2FsbGVkXHJcbiAgICogb24gaXQgcmV0dXJuaW5nIGl0IGJhY2sgdG8gaXRzIG5vcm1hbCBzdGF0ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0YXNrIFRoZSB0YXNrIHRvIHBhdXNlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHBhdXNlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG4gICAgY29uc3QgdGFza1RvUGF1c2UgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiAhdGFzay5wYXVzZWQgJiYgZm4udG9TdHJpbmcoKSA9PT0gdGFzay5mbi50b1N0cmluZygpKTtcclxuICAgIGlmICh0YXNrVG9QYXVzZSkgdGFza1RvUGF1c2UucGF1c2VkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3VtZXMgYSB0YXNrIGZyb20gYSBwYXVzZWQgc3RhdGUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgcGF1c2VkIHRhc2suXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVzdW1lKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG4gICAgY29uc3QgdGFza1RvUmVzdW1lID0gdGhpcy50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5wYXVzZWQgJiYgZm4udG9TdHJpbmcoKSA9PT0gdGFzay5mbi50b1N0cmluZygpKTtcclxuICAgIGlmICh0YXNrVG9SZXN1bWUpIHRhc2tUb1Jlc3VtZS5wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGEgdGFzayBhIG5vb3AgZnVuY3Rpb24uXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgdGFzayB0byBtYWtlIG5vb3AuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgbm9vcChmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuICAgIGNvbnN0IHRhc2tUb05vb3AgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiBmbi50b1N0cmluZygpID09PSB0YXNrLmZuLnRvU3RyaW5nKCkpO1xyXG4gICAgaWYgKHRhc2tUb05vb3ApIHRhc2tUb05vb3AuZm4gPSAoKSA9PiB7fTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIl19