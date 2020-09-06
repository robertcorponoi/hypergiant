'use strict'

const chai = require('chai');
const sinon = require('sinon');
const Hypergiant = require('../index');

let clock;

describe('Making a task a noop function', () => {
	beforeEach(() => clock = sinon.useFakeTimers());
	afterEach(() => clock.restore());

	it('should make a task a noop function', (done) => {
		const event = new Hypergiant();
		const spy = sinon.spy(hello);
		event.add(spy);
		event.noop(spy);

		setTimeout(() => { event.dispatch() }, 1000);
		clock.tick(1000);

		chai.expect(spy.calledOnce).to.be.false;
		done();
	});
});

function hello() {
    return 'Hello World!';
}