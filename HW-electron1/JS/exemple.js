
// import { say } from 'yodasay';
const yodasay = require("yodasay");

console._log = console.log;

console.log = function() {

 document.querySelector('#output').innerText = arguments[0];

 console._log.apply(null, arguments);

}


console.log('node exemple.js');
console.log(say({ text: 'meditating in the browser' }));