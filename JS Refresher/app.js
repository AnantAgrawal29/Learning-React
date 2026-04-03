import { apiKey as api } from "./util.js";
import * as util from "./util.js";
console.log(api);
console.log(util);
console.log(util.apiKey);

// find index function for finding index of an element - need to provide function in parameter
const hobbies = ["Sports", "Cooking", "Reading"];
hobbies.push("Working");
console.log(hobbies);
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);
const editedHobbies = hobbies.map((item) => ({ text: item + "!" })); // adds exclaimation mark in the end of each value
console.log(editedHobbies); // also it makes an object with text as key

// functions passed to functions and setTimeout function use
function handleTimeout() {
  console.log("Timed out!");
}
const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 4000);

// Array functions

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
