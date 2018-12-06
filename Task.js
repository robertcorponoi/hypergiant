'use strict'

/**
 * A Task is a function that is bound to a Hypergiant.
 * 
 * When the Hypergiant that this function is bound to is dispatched, this function will be run.
 * 
 * @since 0.1.0
 */
module.exports = class Task {

  /**
   * @param {Function} fn The function to be called when this task is processed.
   * @param {boolean} once Indicates whether this task will run once and then be deleted.
   */
  constructor(fn, once) {

    /**
     * A reference to the function to bind to this task.
     * 
     * @prop {Function}
     * @readonly
     */
    this._fn = fn;

    /**
     * Indicates whether this task will only run once before being deleted.
     * 
     * @prop {boolean}
     * @readonly
     */
    this._once = once;

    /**
     * The Hypergiant uses this as an indication of whether this task should
     * be removed on the current dispatch.
     * 
     * @prop {boolean}
     * @readonly
     * 
     * @default false
     */
    this._deleted = false;

    /**
     * The number of times that this task has been run.
     * 
     * @property {number}
     * @readonly
     */
    this._timesCalled = 0;

  }

  /**
   * Return the number of times that this task has been called.
   * 
   * @since 0.1.0
   * 
   * @returns {number} Returns the number of times that this task has been called.
   */
  get timesCalled() {

    return this._timesCalled;

  }

  /**
   * Run the function associated with this task.
   * 
   * @since 0.1.0
   * 
   * @param {...*} data Any other data that should be passed to this task.
   */
  run(...data) {

    this._fn(...data);

    this._timesCalled++;

    if (this._once) this._deleted = true;

  }

}