/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
  return function(...args) {
      return "Hello World"
  }
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/

// Runtime: 58 ms (12.94%), Memory: 48.13 MB (91.29%)
