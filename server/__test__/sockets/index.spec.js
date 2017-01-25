'use strict';

const chai = require('chai');
const expect = chai.expect;
const io = require('socket.io-client');
const sockets = require('../../sockets');

describe('Sockets', () => {
  let client;

  beforeEach(() => {
    client = io.connect('http://localhost:3030');
  });

  it('should be a function', () => {
    expect(sockets).to.be.a('function');
  });
});
