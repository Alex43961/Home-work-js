'use strict';
import { say } from 'yodasay';

const btn1 = document.getElementById('btn1');
const output = document.getElementById("output");
btn1.onclick = function(){
console.log(say({ text: 'meditating in the browser' }));
}

