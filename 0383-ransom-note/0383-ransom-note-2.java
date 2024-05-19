class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> magazineLetter = new HashMap<>();

        for (int i = 0; i < magazine.length(); i++) {
            char m = magazine.charAt(i);

            int countLetter = magazineLetter.getOrDefault(m, 0);
        
            magazineLetter.put(m, countLetter + 1);
        }

        for (int i = 0; i < ransomNote.length(); i++) {
            char r = ransomNote.charAt(i);

            int countLetter = magazineLetter.getOrDefault(r, 0);

            if (countLetter == 0) {
                return false;
            }

            magazineLetter.put(r, countLetter - 1);
        }

        return true;
    }
}

// Runtime: 10 ms (58.46%), Memory: 44.87 MB (53.07%)
// Time Complexity: O(m), where m is the length of the magazine.
// Space Complexity: O(k), where k is the number of unique characters in the magazine. We store the magazine in a hashmap.
// It can be O(1) space complexity if we use an array of size 26 to store the count of each character in the magazine.
