'use strict'

const Task = require('./task');

/**
 * A Hypergiant used to create a new event and when it is dispatched, any attached
 * functions will be run. The event can also pass on data to the functions that react to it.
 * 
 * One of the big improvements over the native JavaScript event emitter is not having to
 * rely on typed events which can be misspelled.
 * 
 * @since 0.1.0
 */
module.exports = class Hypergiant {

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