// const arr = [1, 5, 11, 9 , 0];

// arr.sort((a, b) => a - b); // bubble n^2 ?

// console.log(arr);

const create = (length) => 
  Array.from({ length }, (_, i) => i);

const shuffle = (arr) => 
  arr.sort(() => Math.random() - 0.5);

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr.length; j += 1) {
//       if (arr[i] < arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
// };

const bubbleSort = (arr) => {
  nextNumber:
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i+1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        
      }
    }
  }
};

const arr = create(100);

shuffle(arr);

 console.time();
bubbleSort(arr);
console.timeEnd();

console.log(arr);
