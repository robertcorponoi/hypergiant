'use strict'

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
export default class Task {

	/**
	 * The method to be called when processing this task.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {Function}
	 */
	fn: Function;

	/**
	 * Indicates whether this task will only run once before being deleted
	 * or not.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {boolean}
	 */
	once: boolean;

	/**
	 * If true this indicates to Hypergiant that it needs to be deleted on the
	 * next pass.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {boolean}
	 */
	delete: boolean = false;

	/**
	 * The number of times that this task has been called.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {number}
	 */
	timesCalled: number = 0;

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
	 * @since 0.1.0
	 * 
	 * @param {...*} args Any other data that should be passed to this task.
	 */
	run(...args: []) {

		this.fn(...args);

		this.timesCalled++;

		if (this.once) this.delete = true;

	}

}