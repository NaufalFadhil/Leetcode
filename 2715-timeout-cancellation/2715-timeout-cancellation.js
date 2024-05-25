/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  let isCancelled = false;

  setTimeout(() => {
      if(!isCancelled) {
          fn(...args)
      }
  }, t)

  return () => {
      isCancelled = true;
  }
};

/**
*  const result = [];
*
*  const fn = (x) => x * 5;
*  const args = [2], t = 20, cancelTimeMs = 50;
*
*  const start = performance.now();
*
*  const log = (...argsArr) => {
*      const diff = Math.floor(performance.now() - start);
*      result.push({"time": diff, "returned": fn(...argsArr)});
*  }
*       
*  const cancel = cancellable(log, args, t);
*
*  const maxT = Math.max(t, cancelTimeMs);
*           
*  setTimeout(cancel, cancelTimeMs);
*
*  setTimeout(() => {
*      console.log(result); // [{"time":20,"returned":10}]
*  }, maxT + 15)
*/

// Runtime: 76 ms (7.46%), Memory: 49.48 MB (52.02%)
// Time Complexity: O(1), since the function is only called once
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size