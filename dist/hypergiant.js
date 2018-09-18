'use strict'

/**
 * A reaction is a function that is bound to a hypergiant.
 * 
 * When the hypergiant it is assigned to is illuminated, this reaction
 * will be called.
 * 
 * @since 0.1.0
 */
class Reaction {

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

/**
 * Hypergiants are super rare stars that are uncomprehendably large and tremendously
 * luminous.
 * 
 * This module is a signal-type event emitter which is created by attaching it to a 
 * variable or property and can then be dispatched at any time. When it is dispatched,
 * any attached functions will be called.
 * 
 * One of the big improvements over the native JavaScript event emitter is not having to
 * rely on typed events which can be misspelled.
 * 
 * @since 0.1.0
 */
class Hypergiant {

  constructor() {

    /**
     * The functions that are associated with this hypergiant.
     * 
     * @prop {Set}
     * @readonly
     */
    this._reactions = new Set();

  }

  /**
   * Add a new reaction to this hypergiant.
   * 
   * To create energy, stars fuse elements in their core and energy is released.
   * Whatever function you add as a reaction will be called whenever the hypergiant is
   * illuminated.
   * 
   * @since 0.1.0
   * 
   * @param {Function} fn The function to be called when the hypergiant's illuminated method is called.
   * @param {boolean} [once=false] Indicates whether this reaction should only be run once and then automatically removed from the reactions set.
   */
  react(fn, once = false) {

    this._reactions.add(new Reaction(fn, once));

  }

  /**
   * Illuminate the hypergiant which is equal to dispatching an event.
   * 
   * Illuminating the hypergiant calls any reactions that have been added to it.
   * Any reaction that is set to be called only once will be deleted during this phase also.
   * 
   * @param {*} data Any other data that should be passed to the reaction function/s associated with this hypergiant.
   * 
   * @since 0.1.0
   */
  illuminate(data) {

    for (let reaction of this._reactions) {

      reaction.run(data);

      if(reaction._fizzed) this._reactions.delete(reaction);

    }

  }

}