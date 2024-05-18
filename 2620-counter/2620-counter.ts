/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
  return function() {
      res = n
      n+=1
      return res
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/

// Runtime: 48 ms (71.41%), Memory: 48.96 MB (26.05%)
