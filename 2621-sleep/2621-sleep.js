/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(resolve => {
      setTimeout(resolve, millis);
  })
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/

// Runtime: 55 ms (39.91%), Memory: 49.17 MB (5.11%)
// Time Complexity: O(1), since the function is only called once
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
