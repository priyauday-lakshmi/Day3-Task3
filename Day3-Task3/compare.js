//Day3 - Task 3
//Question1: How to compare two JASON have the same properties without order?

// Two objects
var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };

//sorting the obj1 & obj2 using Object.keys

var sortObj1 = Object.keys(obj1).sort();
var sortObj2 = Object.keys(obj2).sort();

//convert into string using JSON.stringify

var String1 = JSON.stringify(obj1, sortObj1);

var String2 = JSON.stringify(obj1, sortObj2);

//compare them and console it

console.log(String1 === String2);
console.log(String1);
console.log(String2);