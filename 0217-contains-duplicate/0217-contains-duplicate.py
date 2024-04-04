class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash = set()

        for n in nums:
            if n in hash:
                return True
            
            hash.add(n)
        return False

# Runtime: 413 ms (75.24%), Memory: 31.90 MB (65.61%)