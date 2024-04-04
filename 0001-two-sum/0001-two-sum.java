class Solution {
  public int[] twoSum(int[] nums, int target) {
      for (int i = 0; i < nums.length; i++) {
          for (int j = i + 1; j < nums.length; j++) {
              if ((nums[i] + nums[j]) == target) {
                  return new int[]{i, j};
              }
          }
      }
      return null;
  }
}

// Runtime: 45 ms (33.57%), Memory: 43.57 MB (99.84%)