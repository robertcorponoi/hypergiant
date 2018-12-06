'use strict'

/**
 * A Task is a function that is bound to a Hypergiant.
 * 
 * When the Hypergiant that this function is bound to is dispatched, this function will be run.
 * 
 * @since 0.1.0
 */
class Task {

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

/**
 * A Hypergiant used to create a new event and when it is dispatched, any attached
 * functions will be run. The event can also pass on data to the functions that react to it.
 * 
 * One of the big improvements over the native JavaScript event emitter is not having to
 * rely on typed events which can be misspelled.
 * 
 * @since 0.1.0
 */
export class Hypergiant {

  constructor() {

    /**
     * The functions that are set to run when this Hypergiant is dispatched.
     * 
     * @property {Set}
     * @readonly
     */
    this._tasks = new Set();

  }

  /**
   * Add a new task to this Hypergiant.
   * 
   * This adds the task to this Hypergiant's list of tasks and when the Hypergiant is dispatched,
   * it will process all tasks that are attached to it.
   * 
   * @since 0.1.0
   * 
   * @param {Function} fn The function to be called when the hypergiant is dispatched.
   * @param {boolean} [once=false] Indicates whether this task should only be run once and then automatically removed from the tasks set.
   * 
   * @returns {Hypergiant} Returns this for chaining.
   */
  add(fn, once = false) {

    this._tasks.add(new Task(fn, once));

    return this;

  }

  /**
   * Dispatch this Hypergiant event.
   * 
   * After this Hypergiant is dispatched, any bound tasks are also called with the
   * data provided.
   * 
   * @param {...*} data Any other data that should be passed to the tasks associated with this Hypergiant.
   * 
   * @since 0.1.0
   */
  dispatch(...data) {

    for (let task of this._tasks) {

      task.run(...data);

      if(task._deleted) this._tasks.delete(task);

    }

  }

}