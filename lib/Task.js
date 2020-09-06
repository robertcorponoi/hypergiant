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

var Task = /*#__PURE__*/function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted or not.
   * 
   * @private
   * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
      * 
      * @private
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
      * 
      * @private
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
    (0, _defineProperty2["default"])(this, "_once", void 0);
    (0, _defineProperty2["default"])(this, "_delete", false);
    (0, _defineProperty2["default"])(this, "_timesCalled", 0);
    (0, _defineProperty2["default"])(this, "paused", false);
    this.fn = fn;
    this._once = once;
  }
  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */


  (0, _createClass2["default"])(Task, [{
    key: "run",

    /**
     * Runs the method associated with this task.
     * 
     * @param {...*} args Any other data that should be passed to this task.
     */
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this._timesCalled++;
      if (this._once) this._delete = true;
    }
  }, {
    key: "once",
    get: function get() {
      return this._once;
    }
    /**
     * Returns whether the task should be deleted or not.
     * 
     * @returns {boolean}
     */

  }, {
    key: "delete",
    get: function get() {
      return this._delete;
    }
    /**
     * Returns the number of times that this task has been called.
     * 
     * @returns {number}
     */

  }, {
    key: "timesCalled",
    get: function get() {
      return this._timesCalled;
    }
  }]);
  return Task;
}();

exports["default"] = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXNrLnRzIl0sIm5hbWVzIjpbIlRhc2siLCJmbiIsIm9uY2UiLCJfb25jZSIsInBhdXNlZCIsIl90aW1lc0NhbGxlZCIsIl9kZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLcUJBLEk7QUFDcEI7Ozs7OztBQU9BOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFPQTs7OztBQUlBLGdCQUFZQyxFQUFaLEVBQTBCQyxJQUExQixFQUF5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQXRCZCxLQXNCYztBQUFBLDJEQWJWLENBYVU7QUFBQSxxREFOdkIsS0FNdUI7QUFDeEMsU0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0UsS0FBTCxHQUFhRCxJQUFiO0FBQ0E7QUFFRDs7Ozs7Ozs7OztBQXFCQTs7Ozs7MEJBS2tCO0FBQ2pCLFVBQUksS0FBS0UsTUFBVCxFQUFpQjtBQUVqQixXQUFLSCxFQUFMO0FBRUEsV0FBS0ksWUFBTDtBQUVBLFVBQUksS0FBS0YsS0FBVCxFQUFnQixLQUFLRyxPQUFMLEdBQWUsSUFBZjtBQUNoQjs7O3dCQTdCbUI7QUFBRSxhQUFPLEtBQUtILEtBQVo7QUFBb0I7QUFFMUM7Ozs7Ozs7O3dCQUtzQjtBQUFFLGFBQU8sS0FBS0csT0FBWjtBQUFxQjtBQUU3Qzs7Ozs7Ozs7d0JBSzBCO0FBQUUsYUFBTyxLQUFLRCxZQUFaO0FBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogQSB0YXNrIGlzIGEgbWV0aG9kIHRoYXQgaXMgYm91bmQgdG8gYSBIeXBlcmdpYW50IGluc3RhbmNlLlxyXG4gKiBcclxuICogV2hlbiB0aGUgSHlwZ2VyZ2lhbnQgaW5zdGFuY2UgdGhhdCB0aGlzIG1ldGhvZCBpcyBib3VuZCB0byBpcyBkaXNwYXRjaGVkLCB0aGUgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gcHJvY2Vzc2luZyB0aGlzIHRhc2suXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtGdW5jdGlvbn1cclxuXHQgKi9cclxuXHRmbjogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgdGFzayB3aWxsIG9ubHkgcnVuIG9uY2UgYmVmb3JlIGJlaW5nIGRlbGV0ZWQgb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX29uY2U6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIElmIHRydWUgdGhpcyBpbmRpY2F0ZXMgdG8gSHlwZXJnaWFudCB0aGF0IGl0IG5lZWRzIHRvIGJlIGRlbGV0ZWQgb24gdGhlIG5leHQgcGFzcy5cclxuICAgICAqIFxyXG4gICAgICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcblx0ICovXHJcblx0cHJpdmF0ZSBfZGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB0aGlzIHRhc2sgaGFzIGJlZW4gY2FsbGVkLlxyXG4gICAgICogXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX3RpbWVzQ2FsbGVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgaXMgY3VycmVudGx5IHBhdXNlZCBvciBub3QuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRvIGF0dGFjaCB0byB0aGlzIHRhc2suXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBvbmNlIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgdGFzayB3aWxsIG9ubHkgcnVuIG9uY2UgYmVmb3JlIGJlaW5nIGRlbGV0ZWQgb3Igbm90LlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZuOiBGdW5jdGlvbiwgb25jZTogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5mbiA9IGZuO1xyXG5cdFx0dGhpcy5fb25jZSA9IG9uY2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHRhc2sgc2hvdWxkIHJ1biBvbmx5IG9uY2Ugb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGdldCBvbmNlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb25jZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHRhc2sgc2hvdWxkIGJlIGRlbGV0ZWQgb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGdldCBkZWxldGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kZWxldGUgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB0aGlzIHRhc2sgaGFzIGJlZW4gY2FsbGVkLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcblx0Z2V0IHRpbWVzQ2FsbGVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90aW1lc0NhbGxlZDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdW5zIHRoZSBtZXRob2QgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdGFzay5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoaXMgdGFzay5cclxuXHQgKi9cclxuXHRydW4oLi4uYXJnczogYW55KSB7XHJcblx0XHRpZiAodGhpcy5wYXVzZWQpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLmZuKC4uLmFyZ3MpO1xyXG5cclxuXHRcdHRoaXMuX3RpbWVzQ2FsbGVkKys7XHJcblxyXG5cdFx0aWYgKHRoaXMuX29uY2UpIHRoaXMuX2RlbGV0ZSA9IHRydWU7XHJcblx0fVxyXG59Il19