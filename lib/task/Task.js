'use strict';
/**
 * A task is a method that is bound to a Hypergiant instance.
 * 
 * When the Hypgergiant instance that this method is bound to is dispatched, the 
 * method will be called.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
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
   * @since 0.1.0
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted
   * or not.
   * 
   * @since 0.1.0
   * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the
   * next pass.
   * 
   * @since 0.1.0
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
   * 
   * @since 0.1.0
   * 
   * @property {number}
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
    this.fn = fn;
    this.once = once;
  }
  /**
   * Runs the method associated with this task.
   * 
   * @since 0.1.0
   * 
   * @param {...*} args Any other data that should be passed to this task.
   */


  (0, _createClass2["default"])(Task, [{
    key: "run",
    value: function run() {
      this.fn.apply(this, arguments);
      this.timesCalled++;
      if (this.once) this["delete"] = true;
    }
  }]);
  return Task;
}();

exports["default"] = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsImZuIiwib25jZSIsInRpbWVzQ2FsbGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVcUJBLEk7OztBQUVwQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7OztBQVVBOzs7Ozs7OztBQVNBOzs7O0FBSUEsZ0JBQVlDLEVBQVosRUFBMEJDLElBQTFCLEVBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBZnZCLEtBZXVCO0FBQUEsMERBTm5CLENBTW1CO0FBRXhDLFNBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUVBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzBCQU9pQjtBQUVoQixXQUFLRCxFQUFMO0FBRUEsV0FBS0UsV0FBTDtBQUVBLFVBQUksS0FBS0QsSUFBVCxFQUFlLGlCQUFjLElBQWQ7QUFFZiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIEEgdGFzayBpcyBhIG1ldGhvZCB0aGF0IGlzIGJvdW5kIHRvIGEgSHlwZXJnaWFudCBpbnN0YW5jZS5cclxuICogXHJcbiAqIFdoZW4gdGhlIEh5cGdlcmdpYW50IGluc3RhbmNlIHRoYXQgdGhpcyBtZXRob2QgaXMgYm91bmQgdG8gaXMgZGlzcGF0Y2hlZCwgdGhlIFxyXG4gKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMC4xLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHByb2Nlc3NpbmcgdGhpcyB0YXNrLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcblx0ICovXHJcblx0Zm46IEZ1bmN0aW9uO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgd2lsbCBvbmx5IHJ1biBvbmNlIGJlZm9yZSBiZWluZyBkZWxldGVkXHJcblx0ICogb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRvbmNlOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBJZiB0cnVlIHRoaXMgaW5kaWNhdGVzIHRvIEh5cGVyZ2lhbnQgdGhhdCBpdCBuZWVkcyB0byBiZSBkZWxldGVkIG9uIHRoZVxyXG5cdCAqIG5leHQgcGFzcy5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcblx0ICovXHJcblx0ZGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB0aGlzIHRhc2sgaGFzIGJlZW4gY2FsbGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdHRpbWVzQ2FsbGVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRvIGF0dGFjaCB0byB0aGlzIHRhc2suXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBvbmNlIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgdGFzayB3aWxsIG9ubHkgcnVuIG9uY2UgYmVmb3JlIGJlaW5nIGRlbGV0ZWQgb3Igbm90LlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZuOiBGdW5jdGlvbiwgb25jZTogYm9vbGVhbikge1xyXG5cclxuXHRcdHRoaXMuZm4gPSBmbjtcclxuXHJcblx0XHR0aGlzLm9uY2UgPSBvbmNlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bnMgdGhlIG1ldGhvZCBhc3NvY2lhdGVkIHdpdGggdGhpcyB0YXNrLlxyXG5cdCAqIFxyXG5cdCAqIEBzaW5jZSAwLjEuMFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gYXJncyBBbnkgb3RoZXIgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhpcyB0YXNrLlxyXG5cdCAqL1xyXG5cdHJ1biguLi5hcmdzOiBbXSkge1xyXG5cclxuXHRcdHRoaXMuZm4oLi4uYXJncyk7XHJcblxyXG5cdFx0dGhpcy50aW1lc0NhbGxlZCsrO1xyXG5cclxuXHRcdGlmICh0aGlzLm9uY2UpIHRoaXMuZGVsZXRlID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==