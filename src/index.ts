'use strict'

import Task from './Task';

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript 
 * events is that they don't rely on correct typing.
 */
export default class Hypergiant {
  /**
   * The tasks that are set to run when the corresponding signal is dispatched.
   * 
   * @private
	 * 
	 * @property {Array}
	 */
  private _tasks: Array<Task> = new Array();

  /**
   * Returns the tasks created for this signal.
   * 
   * @returns {Array<Task>}
   */
  get tasks(): Array<Task> { return this._tasks; }

  /**
   * Returns the number of tasks currently assigned to this signal.
   * 
   * @returns {number}
   */
  get numTasks(): number { return this._tasks.length; }

	/**
	 * Add a new signal.
	 * 
	 * @param {Function} fn The method that should be called when the signal is dispatched.
	 * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
	 * 
	 * @returns {Hypergiant} Returns this for chaining.
	 */
  add(fn: Function, once: boolean = false): Hypergiant {
    this._tasks.push(new Task(fn, once));
    return this;
  }

	/**
	 * Dispatch this Hypergiant event and run all of the tasks associated
	 * with it along with any data passed to it.
	 * 
	 * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
	 */
  dispatch(...args: any) {
    for (let i = 0; i < this.tasks.length; ++i) {
      const task = this.tasks[i];

      // For each task we run it with th eprovided arguments.
      task.run(...args);

      // If the task is set to be deleted, then we have to get the index of the current
      // task and then splice it.
      if (task.delete) this.tasks.splice(i, 1);
    }
  }

  /**
   * Removes a task from this signal by name.
   *
   * @param {Function} task The task to remove.
   *
   * @returns {Hypergiant} Returns this for chaining.
   */
  remove(fn: Function): Hypergiant {
    this._tasks = this.tasks.filter(task => task.fn.toString() != fn.toString());
    return this;
  }

  /**
   * Removes all tasks from this signal.
   *
   * @returns {Hypergiant} Returns this for chaining.
   */
  removeAll(): Hypergiant {
    this._tasks = [];
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
  pause(fn: Function): Hypergiant {
    const taskToPause = this.tasks.find(task => !task.paused && fn.toString() === task.fn.toString());
    if (taskToPause) taskToPause.paused = true;

    return this;
  }

  /**
   * Resumes a task from a paused state.
   * 
   * @param {Function} task The paused task.
   * 
   * @returns {Hypergiant} Returns this for chaining.
   */
  resume(fn: Function): Hypergiant {
    const taskToResume = this.tasks.find(task => task.paused && fn.toString() === task.fn.toString());
    if (taskToResume) taskToResume.paused = false;

    return this;
  }

  /**
   * Makes a task a noop function.
   * 
   * @param {Function} task The task to make noop.
   * 
   * @returns {Hypergiant} Returns this for chaining.
   */
  noop(fn: Function): Hypergiant {
    const taskToNoop = this.tasks.find(task => fn.toString() === task.fn.toString());
    if (taskToNoop) taskToNoop.fn = () => {};

    return this;
  }
}
