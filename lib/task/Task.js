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
exports.default = void 0;

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
    (0, _classCallCheck2.default)(this, Task);
    (0, _defineProperty2.default)(this, "fn", void 0);
    (0, _defineProperty2.default)(this, "once", void 0);
    (0, _defineProperty2.default)(this, "delete", false);
    (0, _defineProperty2.default)(this, "timesCalled", 0);
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


  (0, _createClass2.default)(Task, [{
    key: "run",
    value: function run() {
      this.fn.apply(this, arguments);
      this.timesCalled++;
      if (this.once) this.delete = true;
    }
  }]);
  return Task;
}();

exports.default = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsImZuIiwib25jZSIsInRpbWVzQ2FsbGVkIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVcUJBLEk7OztBQUVwQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7OztBQVVBOzs7Ozs7OztBQVNBOzs7O0FBSUEsZ0JBQVlDLEVBQVosRUFBMEJDLElBQTFCLEVBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBZnZCLEtBZXVCO0FBQUEsdURBTm5CLENBTW1CO0FBRXhDLFNBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUVBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7OzBCQU9pQjtBQUVoQixXQUFLRCxFQUFMO0FBRUEsV0FBS0UsV0FBTDtBQUVBLFVBQUksS0FBS0QsSUFBVCxFQUFlLEtBQUtFLE1BQUwsR0FBYyxJQUFkO0FBRWYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBBIHRhc2sgaXMgYSBtZXRob2QgdGhhdCBpcyBib3VuZCB0byBhIEh5cGVyZ2lhbnQgaW5zdGFuY2UuXG4gKiBcbiAqIFdoZW4gdGhlIEh5cGdlcmdpYW50IGluc3RhbmNlIHRoYXQgdGhpcyBtZXRob2QgaXMgYm91bmQgdG8gaXMgZGlzcGF0Y2hlZCwgdGhlIFxuICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkLlxuICogXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxuICogXG4gKiBAdmVyc2lvbiAwLjEuMFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcblxuXHQvKipcblx0ICogVGhlIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBwcm9jZXNzaW5nIHRoaXMgdGFzay5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtGdW5jdGlvbn1cblx0ICovXG5cdGZuOiBGdW5jdGlvbjtcblxuXHQvKipcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyB0YXNrIHdpbGwgb25seSBydW4gb25jZSBiZWZvcmUgYmVpbmcgZGVsZXRlZFxuXHQgKiBvciBub3QuXG5cdCAqIFxuXHQgKiBAc2luY2UgMC4xLjBcblx0ICogXG5cdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cblx0ICovXG5cdG9uY2U6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIElmIHRydWUgdGhpcyBpbmRpY2F0ZXMgdG8gSHlwZXJnaWFudCB0aGF0IGl0IG5lZWRzIHRvIGJlIGRlbGV0ZWQgb24gdGhlXG5cdCAqIG5leHQgcGFzcy5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxuXHQgKi9cblx0ZGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB0aGlzIHRhc2sgaGFzIGJlZW4gY2FsbGVkLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge251bWJlcn1cblx0ICovXG5cdHRpbWVzQ2FsbGVkOiBudW1iZXIgPSAwO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbWV0aG9kIHRvIGF0dGFjaCB0byB0aGlzIHRhc2suXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIHRhc2sgd2lsbCBvbmx5IHJ1biBvbmNlIGJlZm9yZSBiZWluZyBkZWxldGVkIG9yIG5vdC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGZuOiBGdW5jdGlvbiwgb25jZTogYm9vbGVhbikge1xuXG5cdFx0dGhpcy5mbiA9IGZuO1xuXG5cdFx0dGhpcy5vbmNlID0gb25jZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJ1bnMgdGhlIG1ldGhvZCBhc3NvY2lhdGVkIHdpdGggdGhpcyB0YXNrLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG90aGVyIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoaXMgdGFzay5cblx0ICovXG5cdHJ1biguLi5hcmdzOiBbXSkge1xuXG5cdFx0dGhpcy5mbiguLi5hcmdzKTtcblxuXHRcdHRoaXMudGltZXNDYWxsZWQrKztcblxuXHRcdGlmICh0aGlzLm9uY2UpIHRoaXMuZGVsZXRlID0gdHJ1ZTtcblxuXHR9XG5cbn0iXX0=