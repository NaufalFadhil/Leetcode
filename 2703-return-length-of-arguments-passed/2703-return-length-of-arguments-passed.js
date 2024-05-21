/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Runtime: 51 ms (58.92%), Memory: 48.55 MB (77.21%)
// Time Complexity: O(1)
// Space Complexity: O(1)