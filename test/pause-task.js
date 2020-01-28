'use strict'

const chai = require('chai');
const sinon = require('sinon');
const Hypergiant = require('../index');

let clock;

describe('Pausing a singals tasks', () => {
	beforeEach(() => clock = sinon.useFakeTimers());

	afterEach(() => clock.restore());

	it('should pause a task and not run it even when dispatched', (done) => {
		const event = new Hypergiant();

		function hello() {
			return 'Hello World!';
		}

		const spy = sinon.spy(hello);

    event.add(spy);
    
    event.pause(spy);

		setTimeout(() => { event.dispatch() }, 1000);

		clock.tick(1000);

		chai.expect(spy.calledOnce).to.be.false;

		done();
  });
  
  it('should resume a task after being paused and run it when dispatched', (done) => {
		const event = new Hypergiant();

		function hello() {
			return 'Hello World!';
		}

		const spy = sinon.spy(hello);

    event.add(spy);
    
    event.pause(spy);

    event.resume(spy);

		setTimeout(() => { event.dispatch() }, 1000);

		clock.tick(1000);

		chai.expect(spy.calledOnce).to.be.true;

		done();
	});
});
