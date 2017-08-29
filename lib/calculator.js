// lib/calculator.js
/**
 *
 */
'use strict';

var exchange = require('./exchange');

/**
 * @param {number} val1
 * @param {number} val2
 * @return {number}
 */
exports.sum = function(val1, val2){
  if(val1 && val2){
    return (val1 + val2);
  }else{
    return 0;
  }
};

/**
 * @param {number} val
 * @return {number}
 */
exports.toGBP = function(val){
  return val * exchange.rate('SGD', 'GBP');
};
