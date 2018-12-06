'use strict'

import { Hypergiant } from '../hypergiant.js';

let clock;

describe('Creating a new Hypergiant', () => {

  it('should create a new Hypergiant event on a variable', () => {

    const appStarted = new Hypergiant();

    chai.expect(appStarted._tasks.size).to.equal(0);

  });

  it('should create a new Hypergiant event on an objects property', () => {

    const app = {

      started: new Hypergiant(),

      stopped: null

    };

    chai.expect(app.started._tasks.size).to.equal(0);

  });

});

describe('Adding one or more tasks to a Hypergiant event', () => {

  it('should add one task to a Hypergiant event', () => {

    const appStarted = new Hypergiant();

    appStarted.add(hello);

    function hello() {

      return 'Hello World!'

    }

    chai.expect(appStarted._tasks.size).to.equal(1);

  });

  it('should add multiple tasks to the Hypergiant event with one task set to run once ', () => {

    const app = {

      started: new Hypergiant(),

      stopped: null

    };

    function one() {

      return 1;

    }

    function two() {

      return 2;

    }

    function three() {

      return 3;

    }

    app.started.add(one).add(two).add(three, true);

    const tasks = Array.from(app.started._tasks);

    chai.expect(app.started._tasks.size).to.equal(3) &&

      chai.expect(tasks[2]._once).to.be.true;

  });

});

describe('Dispatching Hypergiant events', () => {

  beforeEach(() => {

    clock = sinon.useFakeTimers();

  });

  afterEach(() => {

    clock.restore();

  })

  it('should dispatch the event', (done) => {

    const appStarted = new Hypergiant();

    function hello() {

      return 'Hello World!';

    }

    const spy = sinon.spy(hello);

    appStarted.add(spy);

    setTimeout(() => { appStarted.dispatch() }, 1000);

    clock.tick(1010);

    chai.expect(spy.calledOnce).to.be.true;

    done();

  });

  it('should dispatch the event with extra data', (done) => {

    let value = null;

    const appStarted = new Hypergiant();

    function hello(name, age, country) {

      value = `Hello ${name}, you are ${age} years old and live in ${country}`;

    }

    const spy = sinon.spy(hello);

    appStarted.add(spy);

    setTimeout(() => { appStarted.dispatch('Bob', 25, 'USA') }, 1000);

    clock.tick(1010);

    chai.expect(value).to.equal('Hello Bob, you are 25 years old and live in USA');

    done();

  });

  it('should dispatch an event once and the others multiple times', (done) => {

    let counter1 = 0;
    let counter2 = 0;

    const app = {

      started: new Hypergiant(),

      running: new Hypergiant(),

      stopped: new Hypergiant()

    };

    function once() {

      counter1++;

    }

    function multiple() {

      counter2++;

    }

    app.started.add(once, true);
    app.running.add(multiple);
    app.stopped.add(multiple);

    setTimeout(() => {

      for (let i = 0; i < 5; ++i) {

        app.started.dispatch();
        app.running.dispatch();
        app.stopped.dispatch();

      }

    }, 1000);

    clock.tick(1010);

    chai.expect(counter1).to.equal(1) && chai.expect(counter2).to.equal(10);

    done();

  });

});