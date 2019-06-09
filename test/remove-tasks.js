'use strict'

const chai = require('chai');
const Hypergiant = require('../index');

describe('Removing one or more tasks from a signal', () => {

  it('should remove one tasks', () => {

    const signal = new Hypergiant();

    signal.add(hello);
    signal.add(math);

    signal.remove(math);

    chai.expect(signal.tasks.size).to.equal(1);

  });

  it('should remove all tasks', () => {

    const signal = new Hypergiant();

    signal.add(hello);
    signal.add(math);

    signal.removeAll(math);

    chai.expect(signal.tasks.size).to.equal(0);

  });

});

function hello() {

  return "hello world";

}

function math() {

  return 2 + 3;

}
