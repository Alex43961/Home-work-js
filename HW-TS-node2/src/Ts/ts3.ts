// !---------------------- 3 -------------------
// 3. функция принимает массив строк и возврващает, новый массив из значений полученного, приведя их к числу.



"🍌"

const numberFromString = function(arr: string[]) {
    let myArr: number[] = [];
for (let i = 0; i< arr.length; i++){
myArr.push(+arr[i]);

}
return myArr;
}