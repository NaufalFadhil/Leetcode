/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  var res = init;
  
  for (var i = 0; i < nums.length; i++) {
      res = fn(res, nums[i]);
  }

  return res;
};

// Runtime: 50 ms (76.75%), Memory: 49.26 MB (43.26%)
// Time Complexity: O(n), where n is the length of nums
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
