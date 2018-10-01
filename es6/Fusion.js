'use strict'

/**
 * A fusion is a function that is bound to a Hypergiant.
 * 
 * When the Hypergiant that this function is bound to is reacting, this
 * function will be run.
 * 
 * @since 0.1.0
 */
export class Fusion {

  /**
   * @param {Function} fn The function to be called when this fusion is processed.
   * @param {boolean} once Indicates whether this fusion will run once and then be deleted.
   */
  constructor(fn, once) {

    /**
     * A reference to the function to bind to this fusion.
     * 
     * @prop {Function}
     * @readonly
     */
    this._fn = fn;

    /**
     * Indicates whether this fusion will only run once before being deleted.
     * 
     * @prop {boolean}
     * @readonly
     */
    this._once = once;

    /**
     * The hypergiant uses this as an indication of whether this fusion should
     * be removed on the current reaction.
     * 
     * @prop {boolean}
     * @readonly
     * 
     * @default false
     */
    this._fizzed = false;

  }

  /**
   * Run the function associated with this fusion.
   * 
   * @since 0.1.0
   * 
   * @param {*} data Any other data that should be passed to this fusion.
   */
  run(data) {

    this._fn(data);

    if (this._once) this._fizzed = true;

  }

}