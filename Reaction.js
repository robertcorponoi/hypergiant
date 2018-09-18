'use strict'

/**
 * A reaction is a function that is bound to a hypergiant.
 * 
 * When the hypergiant it is assigned to is illuminated, this reaction
 * will be called.
 * 
 * @since 0.1.0
 */
module.exports = class Reaction {

  /**
   * @param {Function} fn The function to be called when this reaction is run.
   * @param {boolean} once Indicates whether this reaction will run once and then be deleted.
   */
  constructor(fn, once) {

    /**
     * A reference to the function to bind to this reaction.
     * 
     * @prop {Function}
     * @readonly
     */
    this._fn = fn;

    /**
     * Indicates whether this reaction will only run once before being deleted.
     * 
     * @prop {boolean}
     * @readonly
     */
    this._once = once;

    /**
     * The hypergiant uses this as an indication of whether this reaction should
     * be removed on the current illumination.
     * 
     * @prop {boolean}
     * @readonly
     * 
     * @default false
     */
    this._fizzed = false;

  }

  /**
   * Run the function associated with this reaction.
   * 
   * @since 0.1.0
   * 
   * @param {*} data Any other data that should be passed to this reaction.
   */
  run(data) {

    this._fn(data);

    if (this._once) this._fizzed = true;

  }

}