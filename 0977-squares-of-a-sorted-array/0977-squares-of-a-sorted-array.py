class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        res = []
        resIdx = 0
        for num in nums:
            res.append(num * num)

        res.sort()
        return res

# Runtime: 7 ms (79.68%), Memory: 19.39 MB (75.85%)
# Time Complexity: O(n log n)
# Space Complexity: O(n)
