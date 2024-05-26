/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
      if(functions.length === 0) {
          resolve([]);
          return;
      }
      
      const res = new Array(functions.length).fill(null);

      let resolvedCount = 0;

      functions.forEach((el, idx) => {
          el().then((subResult) => {
              res[idx] = subResult;
              resolvedCount++;
              if(resolvedCount === functions.length) {
                  resolve(res);
              }
          }).catch((err) => {
              reject(err);
          })
      });
  });
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/

// Runtime: 66 ms (82.22%), Memory: 49.28 MB (91.14%)
// Time Complexity: O(n), where n is the length of functions
// Space Complexity: O(n), where n is the length of functions
