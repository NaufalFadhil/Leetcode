class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        maxWealth = 0

        for account in accounts:
            currWealth = sum(account)
            maxWealth = max(currWealth, maxWealth)
        
        return maxWealth

# Runtime: 0 ms (100.00%), Memory: 19.45 MB (24.56%)
# Time complexity: O(n*m) where n is the number of customers and m is the number of accounts per customer
# Space complexity: O(1)
