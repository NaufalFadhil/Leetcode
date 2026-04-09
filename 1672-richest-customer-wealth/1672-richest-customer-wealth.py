class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        richest = 0
        for i in range(len(accounts)):
            wealth = 0
            for j in range(len(accounts[i])):
                wealth += accounts[i][j]
            
            if wealth > richest:
                richest = wealth

        return richest

# Runtime: 3 ms (5.68%), Memory: 19.49 MB (25.20%)
# Time complexity: O(n*m) where n is the number of customers and m is the number of accounts per customer
# Space complexity: O(1)
