// !----------------------- 4 ------------------------

/*4*. функция получает объект с полями name, age, pet и выводит их значения в консоль, сделайте через деструктуризацию. 
(синтаксис найдите в google)
*/
"🍉"
type person =({name : string, age: number | string, pet: string});
let obj : person = {
    name: "Joe",
    age: 13,
    pet: "cat"
};

function animalOwner({name, age, pet}:person) {
    // console.log(name,age, pet);
    
    
console.log(`${name}, ${age}, ${pet}`);
}

 animalOwner(obj);

