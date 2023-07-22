"use strict";

const socket = io();
const emoji = ["😀","💩","👻","👽","👾","🤠","🧕","👮‍♀️","🧙‍♂️","🤴","🤶","👨‍✈️","🧠","👀","🧜‍♀️","💃","🧜‍♂️","👼"];
let randomEmoji = Math.floor(Math.random() * 18);

// прослушка сообщений с сервера по каналу "banana"
socket.on("banana", (msg) => {
  
  console.log(msg);
});
// if(!"banana"){
//     const msg = `${emoji[randomEmoji]}`+'lived';
//     io.emit(msg);}
// отправка сообщения на сервер
// socket.emit("test", 1);

send.addEventListener("click", () => {
  const msgtext =`${emoji[randomEmoji]}`+  newMsg.value;
  socket.emit("newMsg", msgtext);
  newMsg.value =  "";
});

socket.on("newMsg", (msg) => {
  console.log("new msg:" + msg);
  addNewMsg(msg);
});

const addNewMsg = (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  msgPull.append(div);
};