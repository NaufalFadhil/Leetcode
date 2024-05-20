/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
          res.push(arr[i]);
      }
  }

  return res;
};

// Runtime: 55 ms (43.72%), Memory: 48.33 MB (93.26%)
// Time Complexity: O(n), where n is the length of arr
// Space Complexity: O(n), where n is the length of arr
