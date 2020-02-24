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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsImZuIiwib25jZSIsIl9vbmNlIiwicGF1c2VkIiwiX3RpbWVzQ2FsbGVkIiwiX2RlbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtxQkEsSTs7O0FBRXBCOzs7Ozs7QUFPQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQzs7Ozs7O0FBT0Q7Ozs7QUFJQSxnQkFBWUMsRUFBWixFQUEwQkMsSUFBMUIsRUFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREF0QmQsS0FzQmM7QUFBQSwyREFiVCxDQWFTO0FBQUEscURBTnRCLEtBTXNCO0FBRXhDLFNBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUVBLFNBQUtFLEtBQUwsR0FBYUQsSUFBYjtBQUVDO0FBRUQ7Ozs7Ozs7Ozs7QUFxQkQ7Ozs7OzBCQUtrQjtBQUVmLFVBQUksS0FBS0UsTUFBVCxFQUFpQjtBQUVuQixXQUFLSCxFQUFMO0FBRUEsV0FBS0ksWUFBTDtBQUVBLFVBQUksS0FBS0YsS0FBVCxFQUFnQixLQUFLRyxPQUFMLEdBQWUsSUFBZjtBQUVoQjs7O3dCQS9Cb0I7QUFBRSxhQUFPLEtBQUtILEtBQVo7QUFBb0I7QUFFMUM7Ozs7Ozs7O3dCQUtzQjtBQUFFLGFBQU8sS0FBS0csT0FBWjtBQUFxQjtBQUU3Qzs7Ozs7Ozs7d0JBSzBCO0FBQUUsYUFBTyxLQUFLRCxZQUFaO0FBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogQSB0YXNrIGlzIGEgbWV0aG9kIHRoYXQgaXMgYm91bmQgdG8gYSBIeXBlcmdpYW50IGluc3RhbmNlLlxuICogXG4gKiBXaGVuIHRoZSBIeXBnZXJnaWFudCBpbnN0YW5jZSB0aGF0IHRoaXMgbWV0aG9kIGlzIGJvdW5kIHRvIGlzIGRpc3BhdGNoZWQsIHRoZSAgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcblxuXHQvKipcblx0ICogVGhlIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBwcm9jZXNzaW5nIHRoaXMgdGFzay5cblx0ICogXG5cdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XG5cdCAqL1xuXHRmbjogRnVuY3Rpb247XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgdGFzayB3aWxsIG9ubHkgcnVuIG9uY2UgYmVmb3JlIGJlaW5nIGRlbGV0ZWQgb3Igbm90LlxuXHQgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG5cdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cblx0ICovXG5cdHByaXZhdGUgX29uY2U6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIElmIHRydWUgdGhpcyBpbmRpY2F0ZXMgdG8gSHlwZXJnaWFudCB0aGF0IGl0IG5lZWRzIHRvIGJlIGRlbGV0ZWQgb24gdGhlIG5leHQgcGFzcy5cbiAgICogXG4gICAqIEBwcml2YXRlXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XG5cdCAqL1xuXHRwcml2YXRlIF9kZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0IHRoaXMgdGFzayBoYXMgYmVlbiBjYWxsZWQuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9XG5cdCAqL1xuICBwcml2YXRlIF90aW1lc0NhbGxlZDogbnVtYmVyID0gMDtcbiAgXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgaXMgY3VycmVudGx5IHBhdXNlZCBvciBub3QuXG4gICAqIFxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XG4gICAqL1xuICBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIG1ldGhvZCB0byBhdHRhY2ggdG8gdGhpcyB0YXNrLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyB0YXNrIHdpbGwgb25seSBydW4gb25jZSBiZWZvcmUgYmVpbmcgZGVsZXRlZCBvciBub3QuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihmbjogRnVuY3Rpb24sIG9uY2U6IGJvb2xlYW4pIHtcblxuXHRcdHRoaXMuZm4gPSBmbjtcblxuXHRcdHRoaXMuX29uY2UgPSBvbmNlO1xuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSB0YXNrIHNob3VsZCBydW4gb25seSBvbmNlIG9yIG5vdC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IG9uY2UoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vbmNlOyB9XG4gIFxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSB0YXNrIHNob3VsZCBiZSBkZWxldGVkIG9yIG5vdC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGRlbGV0ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2RlbGV0ZSB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGF0IHRoaXMgdGFzayBoYXMgYmVlbiBjYWxsZWQuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHRpbWVzQ2FsbGVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90aW1lc0NhbGxlZDsgfVxuXG5cdC8qKlxuXHQgKiBSdW5zIHRoZSBtZXRob2QgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdGFzay5cblx0ICogXG5cdCAqIEBwYXJhbSB7Li4uKn0gYXJncyBBbnkgb3RoZXIgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhpcyB0YXNrLlxuXHQgKi9cblx0cnVuKC4uLmFyZ3M6IGFueSkge1xuXG4gICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm47XG5cblx0XHR0aGlzLmZuKC4uLmFyZ3MpO1xuXG5cdFx0dGhpcy5fdGltZXNDYWxsZWQrKztcblxuXHRcdGlmICh0aGlzLl9vbmNlKSB0aGlzLl9kZWxldGUgPSB0cnVlO1xuXG5cdH1cblxufSJdfQ==