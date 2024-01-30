var isEqual = require('lodash.isequal');
//npm install --save lodash.isequal
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// let obj1 = { name: 'Person 1', age: 5};
// let obj2 = { name: 'Person 1', age: 5};

//console.log(obj1 === obj2);
console.log("JSON.stringify should be used to compare 2 json objects have the same properties with order ");
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
console.log("lodash isEqual should be used to compare 2 json objects have the same properties without order ");

console.log(isEqual(obj1, obj2));