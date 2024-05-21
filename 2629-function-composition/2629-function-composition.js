/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
  return function(x) {
      let input = x;

      for (let i = functions.length - 1; i >= 0; i--) {
          const currentFunc = functions[i];

          input = currentFunc(input)
      }
      return input;
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/

// Runtime: 55 ms (92.66%), Memory: 50.28 MB (29.52%)
// Time Complexity: O(n), where n is the length of functions
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
