/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * 
 * @param {number} limit 
 * @returns {number}
 */
const generateRandomNumberInRange = function (limit){

    return Math.random() * limit | 0;
};

//Exports the function.
export default generateRandomNumberInRange;
