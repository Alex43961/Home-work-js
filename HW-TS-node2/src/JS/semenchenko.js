"use strict";
'🍑';
"🧀";
"🍌";
"🍉";
"🍒";
function dif(num1, num2) {
    return num1 - num2;
}
function dif2(num1, num2) {
    if (num1 === undefined && num2 === undefined) {
        console.log("error");
    }
    else if (num1 && num2 === undefined) {
        return (num1 ** 2);
    }
    else if (num1 && num2) {
        return (num1 - num2);
    }
}
const numberFromString = function (arr) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        myArr.push(+arr[i]);
    }
    return myArr;
};
let obj = {
    name: "Joe",
    age: 13,
    pet: "cat"
};
function animalOwner({ name, age, pet }) {
    console.log(`${name}, ${age}, ${pet}`);
}
animalOwner(obj);
function createSet(array) {
    return new Set(array);
}
const myArray = [1, "123", true, 2, false];
const mySet = createSet(myArray);
console.log(mySet);
