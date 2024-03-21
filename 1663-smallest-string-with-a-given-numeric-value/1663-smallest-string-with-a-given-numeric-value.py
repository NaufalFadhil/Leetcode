class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        res = ['a'] * n
        k -= n

        for i in range(n - 1, -1, -1):
            if k >= 25:
                res[i] = 'z'
                k -= 25
            else:
                res[i] = chr(ord('a') + k)
                break
        
        return ''.join(res)

# Runtime: 150 ms (89.94%), Memory: 17.85 MB (76.10%)
