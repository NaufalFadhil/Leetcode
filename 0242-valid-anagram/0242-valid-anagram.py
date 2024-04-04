class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hash_s, hash_t = {}, {}

        for i in range(len(s)):
            hash_s[s[i]] = 1 + hash_s.get(s[i], 0)
            hash_t[t[i]] = 1 + hash_t.get(t[i], 0)
        
        for key_s in hash_s:
            if hash_s.get(key_s, 0) != hash_t.get(key_s, 0):
                return False

        return True

# Runtime: 53 ms (38.13%), Memory: 17.03 MB (34.20%)