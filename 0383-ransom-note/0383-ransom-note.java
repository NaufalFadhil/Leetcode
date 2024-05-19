class Solution {
  public boolean canConstruct(String ransomNote, String magazine) {
      for (int i = 0; i < ransomNote.length(); i++) {
          char r = ransomNote.charAt(i);
          
          int matchingIndex = magazine.indexOf(r);

          if (matchingIndex == -1) {
              return false;
          }

          magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex + 1);
      }
      return true;
  }
}

// Runtime: 11 ms (47.06%), Memory: 45.21 MB (15.00%)
// Time Complexity: O(n * m), where n is the length of the ransomNote and m is the length of the magazine.
// Space Complexity: O(m), where m is the length of the magazine. We store the magazine in a string.
