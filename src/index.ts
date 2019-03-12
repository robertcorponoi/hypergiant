'use strict'

import Task from './task/Task';

/**
 * Hypergiant is used to create signal-like events that run when the Hypergiant
 * is emitted.
 * 
 * One of the big advtanges that Hypergiant has over native JavaScript events is
 * the ability of using named events instead of relying on typing.
 * 
 * @author Robert Corponoi
 * 
 * @version 0.1.0
 */
export default class Hypergiant {

	/**
	 * The tasks associated with this instance of Hypergiant that run
	 * when the event is emitted.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {Set}
	 */
	private tasks: Set<Task> = new Set();

	/**
	 * Adds a new task for this instance of Hypergiant to run when emitted.
	 * 
	 * @since 0.1.0
	 * 
	 * @param {Function} fn The method that should be called when emitted.
	 * @param {boolean} [once=false] Indicates whether this task should only be called once and then deleted.
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

}