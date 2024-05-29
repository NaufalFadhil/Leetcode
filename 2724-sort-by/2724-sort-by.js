/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  return arr.sort((a,b) => fn(a) - fn(b));
};

// Runtime: 130 ms (43.22%), Memory: 65.79 MB (63.05%)
// Time Complexity: O(n log n), where n is the length of arr
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
