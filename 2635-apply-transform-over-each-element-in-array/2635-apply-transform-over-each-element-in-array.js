/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
      res[i] = fn(arr[i], i)
  }

  return res;
};

// Runtime: 53 ms (46.37%), Memory: 48.79 MB (58.15%)
// Time Complexity: O(n), where n is the length of arr
// Space Complexity: O(n), where n is the length of arr
