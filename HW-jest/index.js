'use strict';
module.exports = {doubleEverySecondNumber, sumWithCallback};
const myArr = [2,9,4,5,1,0,3,5,3];


 function doubleEverySecondNumber(arr) {
    let handleArr = arr.map((num, index) => (index % 2 === 1 ? num * 2 : num));
    console.log(handleArr); 
    return handleArr;

  }
  doubleEverySecondNumber(myArr);


  
  function sumWithCallback(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
  }
   