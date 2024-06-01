/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function(functions, n) {
  async function evaluateNext() {
      if (functions.length === 0) return;
      const fn = functions.shift();
      await fn();
      await evaluateNext();
  }
  const nPromises = Array(n).fill().map(evaluateNext);
  await Promise.all(nPromises);
};

/**
* const sleep = (t) => new Promise(res => setTimeout(res, t));
* promisePool([() => sleep(500), () => sleep(400)], 1)
*   .then(console.log) // After 900ms
*/

// Runtime: 51 ms (54.59%), Memory: 48.90 MB (33.33%)
// Time Complexity: O(n), where n is the number of functions in the input array
// Space Complexity: O(n), where n is the number of functions in the input array
