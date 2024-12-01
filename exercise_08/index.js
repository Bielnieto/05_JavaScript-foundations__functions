// import and execute
import formatStringByWordsLength from "./formatStringByWordsLength.js";

// Applying values
const sentence1 = "This is a long, long, long sentence.";
const sentence2 = "This is short one.";
const sentence3 = "Another example with more than five words.";
const sentence4 = "Tiny sentence.";
const sentence5 = "Just another example sentence to test.";

// Executes the console.log with the function "formatStringByWordsLength".
console.log(" ");
console.log("Exercice 8 | Result 1: ", sentence1,formatStringByWordsLength(sentence1));
console.log("Exercice 8 | Result 2: ", sentence2,formatStringByWordsLength(sentence2));
console.log("Exercice 8 | Result 3: ", sentence3,formatStringByWordsLength(sentence3));
console.log("Exercice 8 | Result 4: ", sentence4,formatStringByWordsLength(sentence4));
console.log("Exercice 8 | Result 5: ", sentence5,formatStringByWordsLength(sentence5));