'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('If number is divisible by 15, return "fizz-buzz"', function() {
    const normalCases = [
      15,
      30,
      75
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });
  });

  it('If number is divisible by 5, return "buzz"', function() {
    const normalCases = [
      5,
      25,
      40
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });
  });

  it('If number is divisible by 3, return "fizz"', function() {
    const normalCases = [
      3,
      18,
      21
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });
  });

  it('If number is not divisible 3 or 5, return the number', function() {
    const normalCases = [
      4,
      7,
      11,
      13
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    });
  });

  it('should raise an error if arg is not a number', function() {
    const badInputs = [
      [1, 2],
      'hello',
      {}
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
