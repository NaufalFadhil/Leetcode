/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => fn.apply(this, args), t)
  }
};

/**
* const log = debounce(console.log, 100);
* log('Hello'); // cancelled
* log('Hello'); // cancelled
* log('Hello'); // Logged at t=100ms
*/

// Runtime: 66 ms (18.25%), Memory: 49.61 MB (6.02%)
// Time Complexity: O(1), since the function is only called once
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
