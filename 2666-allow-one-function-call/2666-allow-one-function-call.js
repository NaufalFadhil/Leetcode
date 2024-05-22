/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let isCalled = false;
  return function(...args){
      if (isCalled) {
          return undefined;
      } 
      
      isCalled = true
      return fn(...args)
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/

// Runtime: 59 ms (17.56%), Memory: 48.65 MB (68.56%)
// Time Complexity: O(1), since the function is only called once
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
