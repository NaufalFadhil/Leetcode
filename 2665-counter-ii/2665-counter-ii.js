/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  var count = init

  return {
      increment: () => {
          return ++count
      },
      decrement: () => {
          return --count
      },
      reset: () => {
          return count = init
      },
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/

// Runtime: 67 ms (14.75%), Memory: 51.50 MB (69.56%)
// Time Complexity: O(1)
// Space Complexity: O(1)
