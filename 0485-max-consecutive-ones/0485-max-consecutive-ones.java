class Solution {
  public int findMaxConsecutiveOnes(int[] nums) {
      int consecutiveNumber = 0;
      int consecutiveCurrent = 0;
      
      for (int n : nums) {
          if (n == 1) {
              consecutiveCurrent += 1;
              if (consecutiveCurrent > consecutiveNumber) {
                  consecutiveNumber = consecutiveCurrent;
              }
          } else {
              consecutiveCurrent = 0;
          }
      }
      
      return consecutiveNumber;
  }
}

// Runtime: 2 ms (89.79%), Memory: 45.36 MB (66.76%)
// Time Complexity: O(n), where n is the length of the nums array.
// Space Complexity: O(1), we only use two variables to store the current and maximum consecutive number of ones.
