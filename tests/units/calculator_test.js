// test/units/calculator_test.js
var assert = require('assert'),
  sinon = require('sinon'),
  calculator = require('../../lib/calculator'),
  exchange = require('../../lib/exchange');

describe('calculator', function(){

  describe('sum', function(){
    it('should return the sum of input values', function(){
      var result = calculator.sum(10, 20);
      assert.equal(result, 30);
    });

    it('should return 0 if input is not defined', function(){
      assert.equal(calculator.sum(), 0);
    });
  });

  describe('toGBP', function(){
    var xRate = 0.5;

    beforeEach(function(){
      sinon.stub(exchange, 'rate');
      exchange.rate.withArgs('SGD', 'GBP').returns(xRate);
    });

    afterEach(function(){
      exchange.rate.restore();
    });

    it('should call exchange.rate', function(){
      var result = calculator.toGBP(10);
      assert(exchange.rate.calledOnce);
    });

    it('should call exchange.rate with correct params', function(){
      var result = calculator.toGBP(10);
      assert.equal(exchange.rate.args[0][0], 'SGD');
      assert.equal(exchange.rate.args[0][1], 'GBP');
    });

    it('should convert SGD value to GBP', function(){
      var result = calculator.toGBP(10);
      assert.equal(result, (10 * xRate));
    });
  });
});
