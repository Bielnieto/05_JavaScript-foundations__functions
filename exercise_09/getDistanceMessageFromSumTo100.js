/** 
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * 
 * @param {number} value 
 * @returns {string}
 */
function getDistanceMessageFromSumTo100(value) {
    const randomNum = Math.floor(Math.random() * 101);
    const sum = value + randomNum;
    if (sum > THRESHOLD) {}
        return `Sum with value ${sum} exceeds in ${sum - 100} from number 100`;
    } else {
        return `Sum with value ${sum} is left in ${100 - sum} from number 100`;
    }
};

//Exports the function.
export default getDistanceMessageFromSumTo100;
