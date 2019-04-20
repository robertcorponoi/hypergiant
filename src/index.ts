'use strict'

import Task from './task/Task';

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events
 * is that they don't rely on correct typing.
 *
 * @author Robert Corponoi
 * 
 * @version 2.3.0
 */
export default class Hypergiant {

  /**
   * The tasks that are set to run when the corresponding signal is dispatched.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {Set}
	 */
	private tasks: Set<Task> = new Set();

	/**
	 * Add a new signal.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {Function} fn The method that should be called when the signal is dispatched.
	 * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
	 * 
	 * @returns {Hypergiant} Returns this for chaining.
	 */
	add(fn: Function, once: boolean = false): Hypergiant {

		this.tasks.add(new Task(fn, once));

		return this;

	}

	/**
	 * Dispatch this Hypergiant event and run all of the tasks associated
	 * with it along with any data passed to it.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
	 */
	dispatch(...args: []) {

		for (const task of this.tasks) {

			task.run(...args);

			if (task.delete) this.tasks.delete(task);

		}

  }

  /**
   * Removes a task from this signal by name.
   *
   * @since 2.3.0
   *
   * @param {Function} The task to remove.
   *
   * @returns {Hypergiant} Returns this for chaining.
   */
  remove(fn: Function): Hypergiant {

    const fnToString: string = fn.toString();

    for (const task of this.tasks) {

      const taskFnToString: string = task.fn.toString();

      if (fnToString === taskFnToString) {

        this.tasks.delete(task);

        break;

      }

    }

    return this;

  }

  /**
   * Removes all tasks from this signal.
   *
   * @since 2.3.0
   *
   * @returns {Hypergiant} Returns this for chaining.
   */
  removeAll(): Hypergiant {

    this.tasks.clear();

    return this;


  }

}
