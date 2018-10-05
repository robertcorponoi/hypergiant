'use strict'

const Hypergiant = require('../index');
const sinon = require('../node_modules/sinon');
const chai = require('../node_modules/chai');

// Test all functionality of Hypergiant.
describe('Hypergiant', () => {

  // Set a new variable or property to a new Hypergiant, add a new task to it, 
  // and call `dispatch()` on the Hypergiant to make sure it processes the task.
  describe('Creating and dispatching a new hypergiant', () => {

    // Setup the Sinon fake timer before every test.
    beforeEach(() => {

      this.clock = sinon.useFakeTimers();

    });

    // Reset the Sinon fake timer after every test.
    afterEach(() => {

      this.clock.restore();

    });

    // Make sure Hypergiant processes the task on `dispatch()`.
    it('should set a variable equal to "Hello World!" when it processes the task attached to it', () => {

      const test = new Hypergiant();

      let result;

      test.add(hello);

      setTimeout(() => {

        test.dispatch();

      }, 3000);

      this.clock.tick(3010);

      chai.expect(result).to.equal('Hello World!');

      function hello() {

        result = 'Hello World!';

      }

    });

    // Make sure the fusion function is run multiple times when Hypergiant is dispatched multiple times.
    it('should count up an incrementing value to 4 when the Hypergiant is dispatched 4 times', () => {

      const test = new Hypergiant();

      let count = 0;

      test.add(hello);

      setInterval(() => {

        test.dispatch();

      }, 1000);

      this.clock.tick(4010);

      chai.expect(count).to.equal(4);

      function hello() {

        count++;

      }

    });

    // Make sure a one time task is only called once even when Hypergiant is dispatched multiple times.
    it('should count up an incrementing value to 1 when the hypergiant is dispatched 4 times', () => {

      const test = new Hypergiant();

      let count = 0;

      test.add(hello, true);

      setInterval(() => {

        test.dispatch();

      }, 1000);

      this.clock.tick(4010);

      chai.expect(count).to.equal(1);

      function hello() {

        count++;

      }

    });

    // Make sure that Hypergiant calls the first task only once and the second task 5 times.
    it('should count up one incrementing value to 1 and the other incrementing value to 5', () => {

      let test = {
        testProperty: new Hypergiant()
      };

      let counts = {
        count1: 0,
        count2: 0
      };

      test.testProperty.add(hello, true);
      test.testProperty.add(world);

      setInterval(() => {

        test.testProperty.dispatch();

      }, 1000);

      this.clock.tick(5010);

      chai.expect(counts).to.deep.equal({ count1: 1, count2: 5 });

      function hello() {

        counts.count1++;

      }

      function world() {

        counts.count2++;

      }

    });

    // Make sure that Hypergiant passes data to the task when it reacts.
    it('should pass the string "Joe" to the task', () => {

      const test = new Hypergiant();

      let result;

      test.add(hello);

      setTimeout(() => {

        test.dispatch('Joe');

      }, 3000);

      this.clock.tick(3010);

      chai.expect(result).to.equal('Hello Joe!');

      function hello(name) {

        result = `Hello ${name}!`;

      }

    });

    // Make sure that Hypergiant passes multiple pieces of data to the task when it reacts.
    it('should pass multiple pieces of data to the task', () => {

      const test = new Hypergiant();

      let result;

      test.add(hello);

      setTimeout(() => {

        test.dispatch('Joe', 40, 'leopards', 'pizza', 'hypergiant');

      }, 3000);

      this.clock.tick(3010);

      chai.expect(result).to.equal('Hello Joe! You are 40 years old and your favorite animals are leopards. Your favorite food is pizza and your favorite type of star is a hypergiant obviously.');

      function hello(name, age, animal, food, star) {

        result = `Hello ${name}! You are ${age} years old and your favorite animals are ${animal}. Your favorite food is ${food} and your favorite type of star is a ${star} obviously.`;

      }

    });

  });

});