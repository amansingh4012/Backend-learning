// This will now work with named exports
import { Add, Subtract, Division } from './first-module.js';

console.log(Add(5, 3));        // Output: 8
console.log(Subtract(5, 3));   // Output: 2
console.log(Division(6, 5));   // Output: 2
// console.log(Division(5, 0)); // This will throw an error

try {
    console.log(Division(5, 0));
} catch (error) {
    console.log("caught an error", error.message);
}


// module wrapper
//(function(exports, require, module, fileName, _dirname){
    // your module code goes here 
//}) 