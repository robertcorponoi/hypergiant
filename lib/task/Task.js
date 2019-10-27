'use strict';
/**
 * A task is a method that is bound to a Hypergiant instance.
 * 
 * When the Hypgergiant instance that this method is bound to is dispatched, the  method will be called.
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Task =
/*#__PURE__*/
function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted
   * or not.
   * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the
   * next pass.
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
   * 
   * @property {number}
   */

  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */

  /**
   * @param {Function} fn The method to attach to this task.
   * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
   */
  function Task(fn, once) {
    (0, _classCallCheck2["default"])(this, Task);
    (0, _defineProperty2["default"])(this, "fn", void 0);
    (0, _defineProperty2["default"])(this, "once", void 0);
    (0, _defineProperty2["default"])(this, "delete", false);
    (0, _defineProperty2["default"])(this, "timesCalled", 0);
    (0, _defineProperty2["default"])(this, "paused", false);
    this.fn = fn;
    this.once = once;
  }
  /**
   * Runs the method associated with this task.
   * 
   * @param {...*} args Any other data that should be passed to this task.
   */


  (0, _createClass2["default"])(Task, [{
    key: "run",
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this.timesCalled++;
      if (this.once) this["delete"] = true;
    }
  }]);
  return Task;
}();

exports["default"] = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsImZuIiwib25jZSIsInBhdXNlZCIsInRpbWVzQ2FsbGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCQSxJOzs7QUFFcEI7Ozs7OztBQU9BOzs7Ozs7O0FBUUE7Ozs7Ozs7QUFRQTs7Ozs7O0FBT0M7Ozs7OztBQU9EOzs7O0FBSUEsZ0JBQVlDLEVBQVosRUFBMEJDLElBQTFCLEVBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBcEJ2QixLQW9CdUI7QUFBQSwwREFibEIsQ0Fha0I7QUFBQSxxREFOdEIsS0FNc0I7QUFFeEMsU0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBRUEsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBRUE7QUFFRDs7Ozs7Ozs7OzBCQUtrQjtBQUVmLFVBQUksS0FBS0MsTUFBVCxFQUFpQjtBQUVuQixXQUFLRixFQUFMO0FBRUEsV0FBS0csV0FBTDtBQUVBLFVBQUksS0FBS0YsSUFBVCxFQUFlLGlCQUFjLElBQWQ7QUFFZiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIEEgdGFzayBpcyBhIG1ldGhvZCB0aGF0IGlzIGJvdW5kIHRvIGEgSHlwZXJnaWFudCBpbnN0YW5jZS5cclxuICogXHJcbiAqIFdoZW4gdGhlIEh5cGdlcmdpYW50IGluc3RhbmNlIHRoYXQgdGhpcyBtZXRob2QgaXMgYm91bmQgdG8gaXMgZGlzcGF0Y2hlZCwgdGhlICBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBwcm9jZXNzaW5nIHRoaXMgdGFzay5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge0Z1bmN0aW9ufVxyXG5cdCAqL1xyXG5cdGZuOiBGdW5jdGlvbjtcclxuXHJcblx0LyoqXHJcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyB0YXNrIHdpbGwgb25seSBydW4gb25jZSBiZWZvcmUgYmVpbmcgZGVsZXRlZFxyXG5cdCAqIG9yIG5vdC5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcblx0ICovXHJcblx0b25jZTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSWYgdHJ1ZSB0aGlzIGluZGljYXRlcyB0byBIeXBlcmdpYW50IHRoYXQgaXQgbmVlZHMgdG8gYmUgZGVsZXRlZCBvbiB0aGVcclxuXHQgKiBuZXh0IHBhc3MuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXQgdGhpcyB0YXNrIGhhcyBiZWVuIGNhbGxlZC5cclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge251bWJlcn1cclxuXHQgKi9cclxuICB0aW1lc0NhbGxlZDogbnVtYmVyID0gMDtcclxuICBcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgaXMgY3VycmVudGx5IHBhdXNlZCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqL1xyXG4gIHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRvIGF0dGFjaCB0byB0aGlzIHRhc2suXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBvbmNlIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgdGFzayB3aWxsIG9ubHkgcnVuIG9uY2UgYmVmb3JlIGJlaW5nIGRlbGV0ZWQgb3Igbm90LlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZuOiBGdW5jdGlvbiwgb25jZTogYm9vbGVhbikge1xyXG5cclxuXHRcdHRoaXMuZm4gPSBmbjtcclxuXHJcblx0XHR0aGlzLm9uY2UgPSBvbmNlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bnMgdGhlIG1ldGhvZCBhc3NvY2lhdGVkIHdpdGggdGhpcyB0YXNrLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gYXJncyBBbnkgb3RoZXIgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhpcyB0YXNrLlxyXG5cdCAqL1xyXG5cdHJ1biguLi5hcmdzOiBhbnkpIHtcclxuXHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLmZuKC4uLmFyZ3MpO1xyXG5cclxuXHRcdHRoaXMudGltZXNDYWxsZWQrKztcclxuXHJcblx0XHRpZiAodGhpcy5vbmNlKSB0aGlzLmRlbGV0ZSA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcbn0iXX0=