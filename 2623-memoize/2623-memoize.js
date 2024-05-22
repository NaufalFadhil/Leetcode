/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
      let key = JSON.stringify(args);
      if (key in cache) {
          return cache[key];
      }

      const output = fn(...args);
      cache[key] = output;
      return output;
  }
}

/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/

// Runtime: 295 ms (69.30%), Memory: 89.30 MB (52.05%)
// Time Complexity: O(1), since the cache is used to store the results of the function calls
// Space Complexity: O(n), where n is the number of unique arguments passed to the memoized function
