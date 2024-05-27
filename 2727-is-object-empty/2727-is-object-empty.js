/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
};

// Runtime: 51 ms (49.20%), Memory: 49.20 MB (68.42%)
// Time Complexity: O(1), since we are only checking the length of the keys
// Space Complexity: O(1), since we are not using any additional space
