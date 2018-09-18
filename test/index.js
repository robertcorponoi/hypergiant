'use strict'

const Hypergiant = require('../index');
const sinon = require('../node_modules/sinon');
const chai = require('../node_modules/chai');

// Make sure all of the functionality of Hypergiant works.
describe('Hypergiant', () => {

  // Assign a hypergiant to a variable, attach a new reaction to it, and
  // illuminate it calling the reaction.
  describe('Creating and illuminating a new hypergiant', () => {

    // Setup the Sinon fake timer before every test.
    beforeEach(() => {

      this.clock = sinon.useFakeTimers();

    });

    // Rest the Sinon fake timer after every test.
    afterEach(() => {

      this.clock.restore();

    });

    // Make sure the hypergiant calls the reaction when illuminated.
    it('should set a variable equal to "Hello World!" when the hypergiant is illuminated', () => {

      const onBooped = new Hypergiant();

      let result;

      onBooped.react(hello);

      setTimeout(() => {

        onBooped.illuminate();

      }, 3000);

      this.clock.tick(3010);

      chai.expect(result).to.equal('Hello World!');

      function hello() {

        result = 'Hello World!';

      }

    });

    // Make sure the hypergiant calls the reaction multiple times when illuminated multiple times.
    it('should count up a count variable to 4 when the hypergiant is illuminated 4 times', () => {

      const onBooped = new Hypergiant();

      let count = 0;

      onBooped.react(hello);

      setInterval(() => {

        onBooped.illuminate();

      }, 1000);

      this.clock.tick(4010);

      chai.expect(count).to.equal(4);

      function hello() {

        count++;

      }

    });

    // Make sure the hypergiant calls the reaction only once even when illuminated multiple times.
    it('should count up a count variable to 1 when the hypergiant is illuminated 4 times', () => {

      const onBooped = new Hypergiant();

      let count = 0;

      onBooped.react(hello, true);

      setInterval(() => {

        onBooped.illuminate();

      }, 1000);

      this.clock.tick(4010);

      chai.expect(count).to.equal(1);

      function hello() {

        count++;

      }

    });

    // Make sure the hypergiant calls the first reaction 1 time and the second reaction 5 times.
    it('should count up one count variable to 1 and another to 5', () => {

      let test = {
        onBooped: new Hypergiant()
      };

      let counts = {
        count1: 0,
        count2: 0
      };

      test.onBooped.react(hello, true);
      test.onBooped.react(world);

      setInterval(() => {

        test.onBooped.illuminate();

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

    // Make sure that data gets passed to the reaction function if it's supplied.
    it('should pass the name "Joe" to the reaction function', () => {

      const onBooped = new Hypergiant();

      let result;

      onBooped.react(hello);

      setTimeout(() => {

        onBooped.illuminate('Joe');

      }, 3000);

      this.clock.tick(3010);

      chai.expect(result).to.equal('Hello Joe!');

      function hello(name) {

        result = `Hello ${name}!`;

      }

    });

  });

});