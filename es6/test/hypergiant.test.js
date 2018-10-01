'use strict'

import { Hypergiant } from '../Hypergiant.js';

// Test all functionality of Hypergiant.
describe('Hypergiant', () => {

  // Set a new variable or property to a new Hypergiant, add a new
  // fusion function to it, and call `react()` on the Hypergiant to
  // make sure it processes the fusion function.
  describe('Creating and dispatching a new hypergiant', () => {

    let clock;

    // Setup the Sinon fake timer before every test.
    beforeEach(() => {

      clock = sinon.useFakeTimers();

    });

    // Reset the Sinon fake timer after every test.
    afterEach(() => {

      clock.restore();

    });

    // Make sure Hypergiant processes the fusion function on `react()`.
    it('should set a variable equal to "Hello World!" when it processes the fusion function attached to it', () => {

      const test = new Hypergiant();

      let result;

      test.fuse(hello);

      setTimeout(() => {

        test.react();

      }, 3000);

      clock.tick(3010);

      chai.expect(result).to.equal('Hello World!');

      function hello() {

        result = 'Hello World!';

      }

    });

    // Make sure the fusion function is run multiple times when Hypergiant reacts multiple times.
    it('should count up an incrementing value to 4 when the Hypergiant reacts 4 times', () => {

      const test = new Hypergiant();

      let count = 0;

      test.fuse(hello);

      setInterval(() => {

        test.react();

      }, 1000);

      clock.tick(4010);

      chai.expect(count).to.equal(4);

      function hello() {

        count++;

      }

    });

    // Make sure a one time fusion function is only called once even when Hypergiant reacts multiple times.
    it('should count up an incrementing value to 1 when the hypergiant reacts 4 times', () => {

      const test = new Hypergiant();

      let count = 0;

      test.fuse(hello, true);

      setInterval(() => {

        test.react();

      }, 1000);

      clock.tick(4010);

      chai.expect(count).to.equal(1);

      function hello() {

        count++;

      }

    });

    // Make sure that Hypergiant calls the first fusion only once and the second fusion 5 times.
    it('should count up one incrementing value to 1 and the other incrementing value to 5', () => {

      let test = {
        testProperty: new Hypergiant()
      };

      let counts = {
        count1: 0,
        count2: 0
      };

      test.testProperty.fuse(hello, true);
      test.testProperty.fuse(world);

      setInterval(() => {

        test.testProperty.react();

      }, 1000);

      clock.tick(5010);

      chai.expect(counts).to.deep.equal({ count1: 1, count2: 5 });

      function hello() {

        counts.count1++;

      }

      function world() {

        counts.count2++;

      }

    });

    // Make sure that Hypergiant passes data to the fusion function when it reacts.
    it('should pass the string "Joe" to the fusion function', () => {

      const test = new Hypergiant();

      let result;

      test.fuse(hello);

      setTimeout(() => {

        test.react('Joe');

      }, 3000);

      clock.tick(3010);

      chai.expect(result).to.equal('Hello Joe!');

      function hello(name) {

        result = `Hello ${name}!`;

      }

    });

  });

});