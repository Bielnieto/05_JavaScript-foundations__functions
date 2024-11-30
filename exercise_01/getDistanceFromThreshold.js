/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * 
 * @param {number} value1 
 * @param {number} threshold1 
 * @returns {number}
 */
const getDistanceFromThreshold = function (value1, threshold1) {
    
    const result1 = value1 - threshold1;
  
    return result1;
};

//Exports the function.
export default getDistanceFromThreshold;
