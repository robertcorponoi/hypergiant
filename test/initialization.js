'use strict'

const chai = require('chai');
const Hypergiant = require('../index');

describe('Creating a new instance of Hypergiant', () => {

	it('should create a new signal event on a variable', () => {

		const event = new Hypergiant();

		chai.expect(event.tasks.size).to.equal(0);

	});

	it('should create a new signal on an object property', () => {

		const hello = {

			world: new Hypergiant(),

			universe: null

		};

		chai.expect(hello.world.tasks.size).to.equal(0);

	});

});
