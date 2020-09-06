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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely 
 * on correct typing.
 */
var Hypergiant = /*#__PURE__*/function () {
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
      var _iterator = _createForOfIteratorHelper(this._tasks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task["delete"]) this._tasks["delete"](task);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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

      var _iterator2 = _createForOfIteratorHelper(this._tasks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this._tasks["delete"](task);

            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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

      var _iterator3 = _createForOfIteratorHelper(this._tasks),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var task = _step3.value;
          var taskFnToString = task.fn.toString();

          if (!task.paused && fnToString === taskFnToString) {
            task.paused = true;
            break;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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

      var _iterator4 = _createForOfIteratorHelper(this._tasks),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var task = _step4.value;
          var taskFnToString = task.fn.toString();

          if (task.paused && fnToString === taskFnToString) {
            task.paused = false;
            break;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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

      var _iterator5 = _createForOfIteratorHelper(this._tasks),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var task = _step5.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            task.fn = function () {};

            break;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJIeXBlcmdpYW50IiwiU2V0IiwiZm4iLCJvbmNlIiwiX3Rhc2tzIiwiYWRkIiwiVGFzayIsInRhc2siLCJydW4iLCJmblRvU3RyaW5nIiwidG9TdHJpbmciLCJ0YXNrRm5Ub1N0cmluZyIsImNsZWFyIiwicGF1c2VkIiwic2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJBLFU7OztxREFRUyxJQUFJQyxHQUFKLEU7Ozs7OztBQWdCN0I7Ozs7Ozs7O3dCQVFLQyxFLEVBQWlEO0FBQUEsVUFBbkNDLElBQW1DLHVFQUFuQixLQUFtQjs7QUFDbkQsV0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLElBQUlDLGdCQUFKLENBQVNKLEVBQVQsRUFBYUMsSUFBYixDQUFoQjs7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVGOzs7Ozs7Ozs7K0JBTXdCO0FBQUEsaURBQ0YsS0FBS0MsTUFESDtBQUFBOztBQUFBO0FBQ3JCLDREQUFnQztBQUFBLGNBQXJCRyxJQUFxQjtBQUM5QkEsVUFBQUEsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksWUFBSjtBQUNBLGNBQUlBLElBQUksVUFBUixFQUFpQixLQUFLSCxNQUFMLFdBQW1CRyxJQUFuQjtBQUNsQjtBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3RCO0FBRUQ7Ozs7Ozs7Ozs7MkJBT09MLEUsRUFBMEI7QUFDL0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCOztBQUQrQixrREFHWixLQUFLTixNQUhPO0FBQUE7O0FBQUE7QUFHL0IsK0RBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBQzlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFDakMsaUJBQUtQLE1BQUwsV0FBbUJHLElBQW5COztBQUNBO0FBQ0Q7QUFDRjtBQVY4QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVcvQixhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OztnQ0FLd0I7QUFDdEIsV0FBS0gsTUFBTCxDQUFZUSxLQUFaOztBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7MEJBVU1WLEUsRUFBMEI7QUFDOUIsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCOztBQUQ4QixrREFHWCxLQUFLTixNQUhNO0FBQUE7O0FBQUE7QUFHOUIsK0RBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBQzlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUksQ0FBQ0gsSUFBSSxDQUFDTSxNQUFOLElBQWdCSixVQUFVLEtBQUtFLGNBQW5DLEVBQW1EO0FBQ2pESixZQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxJQUFkO0FBQ0E7QUFDRDtBQUNGO0FBVjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVzlCLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7MkJBT09YLEUsRUFBMEI7QUFDL0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCOztBQUQrQixrREFHWixLQUFLTixNQUhPO0FBQUE7O0FBQUE7QUFHL0IsK0RBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBQzlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlILElBQUksQ0FBQ00sTUFBTCxJQUFlSixVQUFVLEtBQUtFLGNBQWxDLEVBQWtEO0FBQ2hESixZQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxLQUFkO0FBQ0E7QUFDRDtBQUNGO0FBVjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVy9CLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tYLEUsRUFBMEI7QUFDN0IsVUFBTU8sVUFBa0IsR0FBR1AsRUFBRSxDQUFDUSxRQUFILEVBQTNCOztBQUQ2QixrREFHVixLQUFLTixNQUhLO0FBQUE7O0FBQUE7QUFHN0IsK0RBQWdDO0FBQUEsY0FBckJHLElBQXFCO0FBQzlCLGNBQU1JLGNBQXNCLEdBQUdKLElBQUksQ0FBQ0wsRUFBTCxDQUFRUSxRQUFSLEVBQS9COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsY0FBbkIsRUFBbUM7QUFDakNKLFlBQUFBLElBQUksQ0FBQ0wsRUFBTCxHQUFVLFlBQU0sQ0FBRyxDQUFuQjs7QUFDQTtBQUNEO0FBQ0Y7QUFWNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXN0IsYUFBTyxJQUFQO0FBQ0Q7Ozs7QUF2SUQ7Ozs7O3dCQUt1QjtBQUFFLGFBQU8sS0FBS0UsTUFBWjtBQUFxQjtBQUU5Qzs7Ozs7Ozs7d0JBS3VCO0FBQUUsYUFBTyxLQUFLQSxNQUFMLENBQVlVLElBQW5CO0FBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyZ2lhbnQgaXMgdXNlZCB0byBjcmVhdGUgc2lnbmFscyB0aGF0IHJ1biBhIHRhc2sgd2hlbiBlbWl0dGVkLlxyXG4gKlxyXG4gKiBPbmUgb2YgdGhlIGJpZ2dlc3QgYWR2dGFudGFnZXMgdGhhdCBzaWduYWxzIGhhdmUgb3ZlciBuYXRpdmUgSmF2YVNjcmlwdCBldmVudHMgaXMgdGhhdCB0aGV5IGRvbid0IHJlbHkgXHJcbiAqIG9uIGNvcnJlY3QgdHlwaW5nLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlwZXJnaWFudCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRhc2tzIHRoYXQgYXJlIHNldCB0byBydW4gd2hlbiB0aGUgY29ycmVzcG9uZGluZyBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7U2V0fVxyXG5cdCAqL1xyXG4gIHByaXZhdGUgX3Rhc2tzOiBTZXQ8VGFzaz4gPSBuZXcgU2V0KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHRhc2tzIGNyZWF0ZWQgZm9yIHRoaXMgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtTZXQ8VGFzaz59XHJcbiAgICovXHJcbiAgZ2V0IHRhc2tzKCk6IFNldDxUYXNrPiB7IHJldHVybiB0aGlzLl90YXNrczsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGFza3MgY3VycmVudGx5IGFzc2lnbmVkIHRvIHRoaXMgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IG51bVRhc2tzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90YXNrcy5zaXplOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBhIG5ldyBzaWduYWwuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIG1ldGhvZCB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgc2lnbmFsIGlzIGRpc3BhdGNoZWQuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb25jZT1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBzaWduYWwgc2hvdWxkIG9ubHkgYmUgZGlzcGF0Y2hlZCBvbmNlIGFuZCB0aGVuIGRlbGV0ZWQuXHJcblx0ICogXHJcblx0ICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcblx0ICovXHJcbiAgYWRkKGZuOiBGdW5jdGlvbiwgb25jZTogYm9vbGVhbiA9IGZhbHNlKTogSHlwZXJnaWFudCB7XHJcbiAgICB0aGlzLl90YXNrcy5hZGQobmV3IFRhc2soZm4sIG9uY2UpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGF0Y2ggdGhpcyBIeXBlcmdpYW50IGV2ZW50IGFuZCBydW4gYWxsIG9mIHRoZSB0YXNrcyBhc3NvY2lhdGVkXHJcblx0ICogd2l0aCBpdCBhbG9uZyB3aXRoIGFueSBkYXRhIHBhc3NlZCB0byBpdC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBIeXBlcmdpYW50IGluc3RhbmNlLlxyXG5cdCAqL1xyXG4gIGRpc3BhdGNoKC4uLmFyZ3M6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XHJcbiAgICAgIHRhc2sucnVuKC4uLmFyZ3MpO1xyXG4gICAgICBpZiAodGFzay5kZWxldGUpIHRoaXMuX3Rhc2tzLmRlbGV0ZSh0YXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0YXNrIGZyb20gdGhpcyBzaWduYWwgYnkgbmFtZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHRhc2sgdG8gcmVtb3ZlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGZuOiBGdW5jdGlvbik6IEh5cGVyZ2lhbnQge1xyXG4gICAgY29uc3QgZm5Ub1N0cmluZzogc3RyaW5nID0gZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5fdGFza3MpIHtcclxuICAgICAgY29uc3QgdGFza0ZuVG9TdHJpbmc6IHN0cmluZyA9IHRhc2suZm4udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmIChmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3Rhc2tzLmRlbGV0ZSh0YXNrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCB0YXNrcyBmcm9tIHRoaXMgc2lnbmFsLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsKCk6IEh5cGVyZ2lhbnQge1xyXG4gICAgdGhpcy5fdGFza3MuY2xlYXIoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGF1c2VzIGEgdGFzayBhdHRhY2hlZCB0byB0aGlzIHNpZ25hbCB1bnRpbCBpdCBpcyB1bnBhdXNlZC5cclxuICAgKiBcclxuICAgKiBUaGlzIG1lYW5zIHRoYXQgdGhlIHBhdXNlZCB0YXNrIHdpbGwgbm90IGJlIGNhbGxlZCBhbmQganVzdCBiZSBzaWxlbnQgdW50aWwgdGhlIGBlbmFibGVgIG1ldGhvZCBpcyBjYWxsZWRcclxuICAgKiBvbiBpdCByZXR1cm5pbmcgaXQgYmFjayB0byBpdHMgbm9ybWFsIHN0YXRlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHRhc2sgdG8gcGF1c2UuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgcGF1c2UoZm46IEZ1bmN0aW9uKTogSHlwZXJnaWFudCB7XHJcbiAgICBjb25zdCBmblRvU3RyaW5nOiBzdHJpbmcgPSBmbi50b1N0cmluZygpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLl90YXNrcykge1xyXG4gICAgICBjb25zdCB0YXNrRm5Ub1N0cmluZzogc3RyaW5nID0gdGFzay5mbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKCF0YXNrLnBhdXNlZCAmJiBmblRvU3RyaW5nID09PSB0YXNrRm5Ub1N0cmluZykge1xyXG4gICAgICAgIHRhc2sucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWVzIGEgdGFzayBmcm9tIGEgcGF1c2VkIHN0YXRlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2sgVGhlIHBhdXNlZCB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIHJlc3VtZShmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAodGFzay5wYXVzZWQgJiYgZm5Ub1N0cmluZyA9PT0gdGFza0ZuVG9TdHJpbmcpIHtcclxuICAgICAgICB0YXNrLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGEgdGFzayBhIG5vb3AgZnVuY3Rpb24uXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFzayBUaGUgdGFzayB0byBtYWtlIG5vb3AuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9IFJldHVybnMgdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgbm9vcChmbjogRnVuY3Rpb24pOiBIeXBlcmdpYW50IHtcclxuICAgIGNvbnN0IGZuVG9TdHJpbmc6IHN0cmluZyA9IGZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuX3Rhc2tzKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tGblRvU3RyaW5nOiBzdHJpbmcgPSB0YXNrLmZuLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoZm5Ub1N0cmluZyA9PT0gdGFza0ZuVG9TdHJpbmcpIHtcclxuICAgICAgICB0YXNrLmZuID0gKCkgPT4geyB9O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIl19