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
    private _once;
    /**
     * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
   *
   * @private
     *
     * @property {boolean}
     */
    private _delete;
    /**
     * The number of times that this task has been called.
   *
   * @private
     *
     * @property {number}
     */
    private _timesCalled;
    /**
     * Indicates whether this task is currently paused or not.
     *
     * @property {boolean}
     */
    paused: boolean;
    /**
     * @param {Function} fn The method to attach to this task.
     * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
     */
    constructor(fn: Function, once: boolean);
    /**
     * Returns whether the task should run only once or not.
     *
     * @returns {boolean}
     */
    get once(): boolean;
    /**
     * Returns whether the task should be deleted or not.
     *
     * @returns {boolean}
     */
    get delete(): boolean;
    /**
     * Returns the number of times that this task has been called.
     *
     * @returns {number}
     */
    get timesCalled(): number;
    /**
     * Runs the method associated with this task.
     *
     * @param {...*} args Any other data that should be passed to this task.
     */
    run(...args: any): void;
}
