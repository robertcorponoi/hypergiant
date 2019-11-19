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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsImZuIiwib25jZSIsIl9vbmNlIiwicGF1c2VkIiwiX3RpbWVzQ2FsbGVkIiwiX2RlbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtxQkEsSTs7O0FBRXBCOzs7Ozs7QUFPQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQzs7Ozs7O0FBT0Q7Ozs7QUFJQSxnQkFBWUMsRUFBWixFQUEwQkMsSUFBMUIsRUFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREF0QmQsS0FzQmM7QUFBQSwyREFiVCxDQWFTO0FBQUEscURBTnRCLEtBTXNCO0FBRXhDLFNBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUVBLFNBQUtFLEtBQUwsR0FBYUQsSUFBYjtBQUVDO0FBRUQ7Ozs7Ozs7Ozs7QUFxQkQ7Ozs7OzBCQUtrQjtBQUVmLFVBQUksS0FBS0UsTUFBVCxFQUFpQjtBQUVuQixXQUFLSCxFQUFMO0FBRUEsV0FBS0ksWUFBTDtBQUVBLFVBQUksS0FBS0YsS0FBVCxFQUFnQixLQUFLRyxPQUFMLEdBQWUsSUFBZjtBQUVoQjs7O3dCQS9Cb0I7QUFBRSxhQUFPLEtBQUtILEtBQVo7QUFBb0I7QUFFMUM7Ozs7Ozs7O3dCQUtzQjtBQUFFLGFBQU8sS0FBS0csT0FBWjtBQUFxQjtBQUU3Qzs7Ozs7Ozs7d0JBSzBCO0FBQUUsYUFBTyxLQUFLRCxZQUFaO0FBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogQSB0YXNrIGlzIGEgbWV0aG9kIHRoYXQgaXMgYm91bmQgdG8gYSBIeXBlcmdpYW50IGluc3RhbmNlLlxyXG4gKiBcclxuICogV2hlbiB0aGUgSHlwZ2VyZ2lhbnQgaW5zdGFuY2UgdGhhdCB0aGlzIG1ldGhvZCBpcyBib3VuZCB0byBpcyBkaXNwYXRjaGVkLCB0aGUgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHByb2Nlc3NpbmcgdGhpcyB0YXNrLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcblx0ICovXHJcblx0Zm46IEZ1bmN0aW9uO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgd2lsbCBvbmx5IHJ1biBvbmNlIGJlZm9yZSBiZWluZyBkZWxldGVkIG9yIG5vdC5cclxuXHQgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRwcml2YXRlIF9vbmNlOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBJZiB0cnVlIHRoaXMgaW5kaWNhdGVzIHRvIEh5cGVyZ2lhbnQgdGhhdCBpdCBuZWVkcyB0byBiZSBkZWxldGVkIG9uIHRoZSBuZXh0IHBhc3MuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcblx0ICovXHJcblx0cHJpdmF0ZSBfZGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB0aGlzIHRhc2sgaGFzIGJlZW4gY2FsbGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XHJcblx0ICovXHJcbiAgcHJpdmF0ZSBfdGltZXNDYWxsZWQ6IG51bWJlciA9IDA7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyB0YXNrIGlzIGN1cnJlbnRseSBwYXVzZWQgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIG1ldGhvZCB0byBhdHRhY2ggdG8gdGhpcyB0YXNrLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgd2lsbCBvbmx5IHJ1biBvbmNlIGJlZm9yZSBiZWluZyBkZWxldGVkIG9yIG5vdC5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmbjogRnVuY3Rpb24sIG9uY2U6IGJvb2xlYW4pIHtcclxuXHJcblx0XHR0aGlzLmZuID0gZm47XHJcblxyXG5cdFx0dGhpcy5fb25jZSA9IG9uY2U7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSB0YXNrIHNob3VsZCBydW4gb25seSBvbmNlIG9yIG5vdC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBnZXQgb25jZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29uY2U7IH1cclxuICBcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHRhc2sgc2hvdWxkIGJlIGRlbGV0ZWQgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGdldCBkZWxldGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kZWxldGUgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB0aGlzIHRhc2sgaGFzIGJlZW4gY2FsbGVkLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IHRpbWVzQ2FsbGVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90aW1lc0NhbGxlZDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdW5zIHRoZSBtZXRob2QgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdGFzay5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoaXMgdGFzay5cclxuXHQgKi9cclxuXHRydW4oLi4uYXJnczogYW55KSB7XHJcblxyXG4gICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm47XHJcblxyXG5cdFx0dGhpcy5mbiguLi5hcmdzKTtcclxuXHJcblx0XHR0aGlzLl90aW1lc0NhbGxlZCsrO1xyXG5cclxuXHRcdGlmICh0aGlzLl9vbmNlKSB0aGlzLl9kZWxldGUgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG59Il19