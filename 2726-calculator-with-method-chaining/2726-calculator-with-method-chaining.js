class Calculator {
    
  /** 
   * @param {number} value
   */
  constructor(value) {
      this.result = value;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
      this.result += value;
      return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
      this.result -= value;
      return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
      this.result *= value;
      return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
      if(value === 0) throw "Division by zero is not allowed";
      this.result /= value;
      return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
      this.result **= value;
      return this;
  }
  
  /** 
   * @return {number}
   */
  getResult() {
      return this.result;
  }
}

// Runtime: 51 ms (54.59%), Memory: 48.90 MB (33.33%)
// Time Complexity: O(1), since the function is only called once
// Space Complexity: O(1), only a fixed amount of extra space is used, regardless of the input size
