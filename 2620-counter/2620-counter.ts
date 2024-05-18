function createCounter(n: number): () => number {
    
  return function() {
      return n++
  }
}


/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/

// Runtime: 52 ms (76.86%), Memory: 50.82 MB (90.35%)
