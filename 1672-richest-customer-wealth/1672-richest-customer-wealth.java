class Solution {
  public int maximumWealth(int[][] accounts) {
      int richestWealth = 0;

      for (int[] customer : accounts) {
          int currentCustomerWealth = 0;
          for (int bank : customer) {
              currentCustomerWealth += bank;
          }
          
          richestWealth = Math.max(richestWealth, currentCustomerWealth);
          // if (temp_wealth > richest_wealth) {
          //     richestWealth = temp_wealth;
          // }
      }

      return richestWealth;
  }
}

// Runtime: 0 ms (100.00%), Memory: 42.36 MB (88.00%)
// Time Complexity: O(n*m), where n is the number of customers and m is the number of banks.
// Space Complexity: O(1), no extra space used.