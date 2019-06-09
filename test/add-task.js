'use strict'

const chai = require('chai');
const Hypergiant = require('../index');

describe('Adding tasks to a signal', () => {

	it('should add a single task', () => {

		const event = new Hypergiant();

		event.add(hello);

		function hello() {

			return 'Hello World!';

		}

		chai.expect(event.tasks.size).to.equal(1);

	});

	it('should add multiple tasks', () => {

		const event = new Hypergiant();

		event.add(one).add(two).add(three, true);

		function one() {

			return 1;

		}

		function two() {

			return 2;

		}

		function three() {

			return 3;

		}

		const tasks = Array.from(event.tasks);

		chai.expect(event.tasks.size).to.equal(3) && chai.expect(tasks[2].once).to.be.true;

	});

});
