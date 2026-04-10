class Solution:
    def numberOfSteps(self, num: int) -> int:
        step = 0
        while num > 0:
            step += 1
            if num % 2 == 0:
                num = num / 2
            else:
                num = num - 1
        return step

# Runtime: 0 ms (100.00%), Memory: 19.48 MB (13.20%)
# Time complexity: O(log n)
# Space complexity: O(1)
