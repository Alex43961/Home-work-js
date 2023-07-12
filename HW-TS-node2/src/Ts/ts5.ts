// !------------------- 5 ---------------------
//5*. создать функцию принимающую массив непонятно каких значений(generic) и возвращающая созданный из него Set


"🍒"

function createSet<T>(array: T[]): Set<T> {
  return new Set(array);
}
const myArray = [1, "123", true, 2, false];
const mySet = createSet(myArray);
console.log(mySet); 
