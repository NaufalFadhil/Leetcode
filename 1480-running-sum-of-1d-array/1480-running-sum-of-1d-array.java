class Solution {
  public int[] runningSum(int[] nums) {
      for (int i = 1; i < nums.length; i++) {
          nums[i] += nums[i-1];
      }
      return nums;
  }
}

// Runtime: 0 ms (100.00%), Memory: 42.63 MB (31.64%)
// Time Complexity: O(n), where n is the number of elements in the array.
// Space Complexity: O(1), no extra space used.
