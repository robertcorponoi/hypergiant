'use strict'

const chai = require('chai');
const sinon = require('sinon');
const Hypergiant = require('../index');

let clock;

describe('Dispatching a signal', () => {
	beforeEach(() => clock = sinon.useFakeTimers());

	afterEach(() => clock.restore());

	it('should dispatch the event', (done) => {
		const event = new Hypergiant();

		function hello() {
			return 'Hello World!';
		}

		const spy = sinon.spy(hello);

		event.add(spy);

		setTimeout(() => { event.dispatch() }, 1000);

		clock.tick(1000);

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
