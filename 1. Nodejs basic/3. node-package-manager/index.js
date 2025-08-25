const lodash = require('lodash')

const names = ["aman", "sahil", "vishwas", "vishal"]

const capitalize = lodash.map(names,lodash.capitalize);
const uppercase = lodash.map(names, lodash.upperCase);

console.log(capitalize)
console.log(uppercase)