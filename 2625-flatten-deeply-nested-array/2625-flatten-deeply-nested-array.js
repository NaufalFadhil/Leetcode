/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = [];
  const flattening = (nums, l) => {
      for (const num of nums) {
          if (Array.isArray(num) && l > 0) {
              flattening(num, l - 1);
          } else {
              res.push(num);
          }
      }
  }

  flattening(arr, n);
  return res;
};

// Runtime: 106 ms (65.43%), Memory: 68.92 MB (68.82%)
// Time Complexity: O(n), where n is the number of elements in arr
// Space Complexity: O(n), where n is the number of elements in arr
