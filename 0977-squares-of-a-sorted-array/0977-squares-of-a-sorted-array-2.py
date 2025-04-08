class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return sorted(num * num for num in nums)

# Runtime: 3 ms (95.90%), Memory: 19.36 MB (75.85%)
# Time Complexity: O(n log n)
# Space Complexity: O(n)
# This is a more Pythonic way to write the same logic as 0977-squares-of-a-sorted-array.py.
