/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely
 * on correct typing.
 *
 * @author Robert Corponoi
 *
 * @version 2.4.1
 */
export default class Hypergiant {
    /**
     * The tasks that are set to run when the corresponding signal is dispatched.
       *
       * @since 0.1.0
       *
       * @property {Set}
       */
    private tasks;
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
    add(fn: Function, once?: boolean): Hypergiant;
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     *
     * @since 0.1.0
     *
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */
    dispatch(...args: []): void;
    /**
     * Removes a task from this signal by name.
     *
     * @since 2.3.0
     *
     * @param {Function} task The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */
    remove(fn: Function): Hypergiant;
    /**
     * Removes all tasks from this signal.
     *
     * @since 2.3.0
     *
     * @returns {Hypergiant} Returns this for chaining.
     */
    removeAll(): Hypergiant;
    /**
     * Pauses a task attached to this signal until it is unpaused.
     *
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     *
     * @since 2.4.0
     *
     * @param {Function} task The task to pause.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */
    pause(fn: Function): Hypergiant;
    /**
     * Resumes a task from a paused state.
     *
     * @since 2.4.0
     *
     * @param {Function} task The paused task.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */
    resume(fn: Function): Hypergiant;
}
