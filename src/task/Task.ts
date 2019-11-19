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
	 * Indicates whether this task will only run once before being deleted or not.
	 * 
   * @private
   * 
	 * @property {boolean}
	 */
	private _once: boolean;

	/**
	 * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
   * 
   * @private
	 * 
	 * @property {boolean}
	 */
	private _delete: boolean = false;

	/**
	 * The number of times that this task has been called.
   * 
   * @private
	 * 
	 * @property {number}
	 */
  private _timesCalled: number = 0;
  
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

		this._once = once;

  }

  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */
  get once(): boolean { return this._once; }
  
  /**
   * Returns whether the task should be deleted or not.
   * 
   * @returns {boolean}
   */
  get delete(): boolean { return this._delete }

  /**
   * Returns the number of times that this task has been called.
   * 
   * @returns {number}
   */
  get timesCalled(): number { return this._timesCalled; }

	/**
	 * Runs the method associated with this task.
	 * 
	 * @param {...*} args Any other data that should be passed to this task.
	 */
	run(...args: any) {

    if (this.paused) return;

		this.fn(...args);

		this._timesCalled++;

		if (this._once) this._delete = true;

	}

}