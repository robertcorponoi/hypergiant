function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var Task = /*#__PURE__*/function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted or not.
   * 
   * @private
   * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
      * 
      * @private
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
      * 
      * @private
   * 
   * @property {number}
   */

  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */

  /**
   * @param {Function} fn The method to attach to this task.
   * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
   */
  function Task(fn, once) {
    classCallCheck(this, Task);

    defineProperty(this, "fn", void 0);

    defineProperty(this, "_once", void 0);

    defineProperty(this, "_delete", false);

    defineProperty(this, "_timesCalled", 0);

    defineProperty(this, "paused", false);

    this.fn = fn;
    this._once = once;
  }
  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */


  createClass(Task, [{
    key: "run",

    /**
     * Runs the method associated with this task.
     * 
     * @param {...*} args Any other data that should be passed to this task.
     */
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this._timesCalled++;
      if (this._once) this._delete = true;
    }
  }, {
    key: "once",
    get: function get() {
      return this._once;
    }
    /**
     * Returns whether the task should be deleted or not.
     * 
     * @returns {boolean}
     */

  }, {
    key: "delete",
    get: function get() {
      return this._delete;
    }
    /**
     * Returns the number of times that this task has been called.
     * 
     * @returns {number}
     */

  }, {
    key: "timesCalled",
    get: function get() {
      return this._timesCalled;
    }
  }]);

  return Task;
}();

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript 
 * events is that they don't rely on correct typing.
 */

var Hypergiant = /*#__PURE__*/function () {
  function Hypergiant() {
    classCallCheck(this, Hypergiant);

    defineProperty(this, "_tasks", new Array());
  }

  createClass(Hypergiant, [{
    key: "add",

    /**
     * Add a new signal.
     * 
     * @param {Function} fn The method that should be called when the signal is dispatched.
     * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._tasks.push(new Task(fn, once));

      return this;
    }
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     * 
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      for (var i = 0; i < this.tasks.length; ++i) {
        var task = this.tasks[i]; // For each task we run it with th eprovided arguments.

        task.run.apply(task, arguments); // If the task is set to be deleted, then we have to get the index of the current
        // task and then splice it.

        if (task["delete"]) this.tasks.splice(i, 1);
      }
    }
    /**
     * Removes a task from this signal by name.
     *
     * @param {Function} task The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      this._tasks = this.tasks.filter(function (task) {
        return task.fn.toString() != fn.toString();
      });
      return this;
    }
    /**
     * Removes all tasks from this signal.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this._tasks = [];
      return this;
    }
    /**
     * Pauses a task attached to this signal until it is unpaused.
     * 
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     * 
     * @param {Function} task The task to pause.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "pause",
    value: function pause(fn) {
      var taskToPause = this.tasks.find(function (task) {
        return !task.paused && fn.toString() === task.fn.toString();
      });
      if (taskToPause) taskToPause.paused = true;
      return this;
    }
    /**
     * Resumes a task from a paused state.
     * 
     * @param {Function} task The paused task.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "resume",
    value: function resume(fn) {
      var taskToResume = this.tasks.find(function (task) {
        return task.paused && fn.toString() === task.fn.toString();
      });
      if (taskToResume) taskToResume.paused = false;
      return this;
    }
    /**
     * Makes a task a noop function.
     * 
     * @param {Function} task The task to make noop.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "noop",
    value: function noop(fn) {
      var taskToNoop = this.tasks.find(function (task) {
        return fn.toString() === task.fn.toString();
      });
      if (taskToNoop) taskToNoop.fn = function () {};
      return this;
    }
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Array<Task>}
     */
    get: function get() {
      return this._tasks;
    }
    /**
     * Returns the number of tasks currently assigned to this signal.
     * 
     * @returns {number}
     */

  }, {
    key: "numTasks",
    get: function get() {
      return this._tasks.length;
    }
  }]);

  return Hypergiant;
}();

export default Hypergiant;
