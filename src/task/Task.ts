'use strict'

/**
 * A task is a method that is bound to a Hypergiant instance.
 * 
 * When the Hypgergiant instance that this method is bound to is dispatched, the  method will be called.
 */
export default class Task {

	/**
	 * The method to be called when processing this task.
	 * 
	 * @property {Function}
	 */
	fn: Function;

	/**
	 * Indicates whether this task will only run once before being deleted
	 * or not.
	 * 
	 * @property {boolean}
	 */
	once: boolean;

	/**
	 * If true this indicates to Hypergiant that it needs to be deleted on the
	 * next pass.
	 * 
	 * @property {boolean}
	 */
	delete: boolean = false;

	/**
	 * The number of times that this task has been called.
	 * 
	 * @property {number}
	 */
  timesCalled: number = 0;
  
  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */
  paused: boolean = false;

	/**
	 * @param {Function} fn The method to attach to this task.
	 * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
	 */
	constructor(fn: Function, once: boolean) {

		this.fn = fn;

		this.once = once;

	}

	/**
	 * Runs the method associated with this task.
	 * 
	 * @param {...*} args Any other data that should be passed to this task.
	 */
	run(...args: []) {

    if (this.paused) return;

		this.fn(...args);

		this.timesCalled++;

		if (this.once) this.delete = true;

	}

}