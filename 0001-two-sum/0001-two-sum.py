class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i

        return []

# Runtime: 0 ms (100.00%), Memory: 20.29 MB (66.52%)
# Time complexity: O(n)
# Space complexity: O(n)
