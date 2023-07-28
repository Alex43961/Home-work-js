"use strict";
const {ipcRenderer} = require("electron");

 const yodasay = require("yodasay");
 const say = require("swy");
const yosay = require("yosay");


const phrase = "Hello everyone !";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const output = document.getElementById("output");
// const packages = {
//     package1: (phrase) => phrase.yodasay.say({
//         text: phrase
//     }),
//     package2: (phrase) => phrase.yosay()
// };
function handlePhrase(event) {
    const buttonId = event.target.id;
    let formattedPhrase;
    switch (buttonId) {
        case "btn1":
            formattedPhrase = yodasay.say({
                        text: phrase
                     });
            break;
        case "btn2":
            formattedPhrase = yosay.say(phrase);
            break;
        case "btn3":
            formattedPhrase = packages.package3(phrase);
            break;
        default:
            formattedPhrase = "Unknown package";
    }
    output.innerText = formattedPhrase;
    ipcRenderer.send("log-click", {package : buttonId});
}
btn1.addEventListener("click", handlePhrase);
btn2.addEventListener("click", handlePhrase);
btn3.addEventListener("click", handlePhrase);
