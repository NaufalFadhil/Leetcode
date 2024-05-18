function createHelloWorld() {
    
  return function(...args): string {
      return "Hello World"
  };
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/

// Runtime: 63 ms (12.55%), Memory: 49.93 MB (49.74%)
