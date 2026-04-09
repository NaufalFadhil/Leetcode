class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums)):
            nums[i] = nums[i-1] + nums[i]
        return nums

# Runtime: 0 ms (100.00%), Memory: 19.44 MB (24.72%)
# Time complexity: O(n)
# Space complexity: O(1)
