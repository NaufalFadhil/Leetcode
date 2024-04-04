class Solution {
  public int romanToInt(String s) {
      var res = 0;
      var parsed = 0;

      char[] c = s.toCharArray();

      var i = 0;
      while (i < c.length) {
          switch (c[i]) {
              case 'I':
                  parsed = 1;
                  // return i;
                  if(i >= 0 && i < c.length - 1) {
                      if (c[i + 1] == 'V') {
                          parsed = 4;
                          i++;
                      } else if (c[i + 1] == 'X') {
                          parsed = 9;
                          i++;
                      }
                  }
                  break;
              case 'V':
                  parsed = 5;
                  break;
              case 'X':
                  parsed = 10;
                  if(i >= 0 && i < c.length - 1) {
                      if (c[i+1] == 'L') {
                          parsed = 40;
                          i++;
                      } else if (c[i+1] == 'C') {
                          parsed = 90;
                          i++;
                      }
                  }
                  break;
              case 'L':
                  parsed = 50;
                  break;
              case 'C':
                  parsed = 100;
                  if(i >= 0 && i < c.length - 1) {
                      if (c[i+1] == 'D') {
                          parsed = 400;
                          i++;
                      } else if (c[i+1] == 'M') {
                          parsed = 900;
                          i++;
                      }
                  }
                  break;
              case 'D':
                  parsed = 500;
                  break;
              case 'M':
                  parsed = 1000;
                  break;
              default:
                  parsed = 0;
                  break;
          }

          i++;
          res += parsed;
      }
      return res;
  }
}

// Runtime: 3 ms (83.21%), Memory: 43.38 MB (100.00%)