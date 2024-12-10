//import and execute
import isTypeOf from "./isTypeOf.js";

//Applying value.
const value1 = 32;
const type1 = "number";

const value2 = 32;
const type2 = "array";

const value3 = "DFHJSVHB SDFH";
const type3 = "string";

const value4 = "DFHJSVHB SDFH";
const type4 = "number";

const value5 = true;
const type5 = "boolean";

const value6 = true;
const type6 = "string";

const value7 = [23, 423, 45, 467];
const type7 = "array";

const value8 = [23, 423, 45, 467];
const type8 = "number";

//Execcutes the console.log with the function "checkCollectionHasElements".
console.log(" ")
console.log("Exercice 7 | Result 1: ", value1, "is a", type1, "?", isTypeOf(value1, type1));
console.log("Exercice 7 | Result 2: ", value2, "is a", type2, "?",  isTypeOf(value2, type2));
console.log("Exercice 7 | Result 3: ", value3, "is a", type3, "?",  isTypeOf(value3, type3));
console.log("Exercice 7 | Result 4: ", value4, "is a", type4, "?",  isTypeOf(value4, type4));
console.log("Exercice 7 | Result 5: ", value5, "is a", type5, "?",  isTypeOf(value5, type5));
console.log("Exercice 7 | Result 6: ", value6, "is a", type6, "?",  isTypeOf(value6, type6));
console.log("Exercice 7 | Result 7: ", value7, "is a", type7, "?",  isTypeOf(value7, type7));
console.log("Exercice 7 | Result 8: ", value8, "is a", type8, "?",  isTypeOf(value8, type8));
