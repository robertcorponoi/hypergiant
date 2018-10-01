'use strict'

/**
 * A fusion is a function that is bound to a Hypergiant.
 * 
 * When the Hypergiant that this function is bound to is reacting, this
 * function will be run.
 * 
 * @since 0.1.0
 */
class Fusion {

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

/**
 * Hypergiants are an incredibly rare type of star that are uncomprehendably large and
 * tremendously luminous.
 * 
 * This module is used to create a new event and when it is dispatched, any attached
 * functions will be run. The event can also pass on data to the functions that react to it.
 * 
 * One of the big improvements over the native JavaScript event emitter is not having to
 * rely on typed events which can be misspelled.
 * 
 * @since 0.1.0
 */
class Hypergiant {

  constructor() {

    /**
     * The collections of functions that are set to run when this Hypergiant
     * is set to react.
     * 
     * @property {Set}
     * @readonly
     */
    this._fusions = new Set();

  }

  /**
   * Add a new fusion to this Hypergiant.
   * 
   * This adds the fusion to this Hypergiant's list of fusions and when the Hypergiant is reacting,
   * it will process all fusions that are attached to it.
   * 
   * @since 0.1.0
   * 
   * @param {Function} fn The function to be called when the hypergiant's react method is called.
   * @param {boolean} [once=false] Indicates whether this fusion should only be run once and then automatically removed from the fusions set.
   */
  fuse(fn, once = false) {

    this._fusions.add(new Fusion(fn, once));

  }

  /**
   * Dispatch this Hypergiant event by making it begin reacting.
   * 
   * While this Hypergiant is reacting, any bound fusion functions are also called with the
   * data provided.
   * 
   * @param {*} data Any other data that should be passed to the fusion function/s associated with this Hypergiant.
   * 
   * @since 0.1.0
   */
  react(data) {

    for (let fusion of this._fusions) {

      fusion.run(data);

      if(fusion._fizzed) this._fusions.delete(fusion);

    }

  }

}