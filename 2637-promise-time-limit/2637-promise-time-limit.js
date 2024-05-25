/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
  return async function(...args) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              reject("Time Limit Exceeded");
          }, t);
          fn(...args).then(resolve).catch(reject);
      });
  }
};

/**
* const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
* limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/

// Runtime: 55 ms (80.25%), Memory: 49.27 MB (70.05%)
// Time Complexity: O(1), since the function is only called once
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
