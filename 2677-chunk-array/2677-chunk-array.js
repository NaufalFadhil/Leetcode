/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + size));
      index += size
  }

  return chunkedArray;
};

// Runtime: 45 ms (94.87%), Memory: 51.00 MB (83.79%)
// Time Complexity: O(n), where n is the length of arr
// Space Complexity: O(n), where n is the length of arr
