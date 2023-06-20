'use strict';

const yodasay = require("yodasay");
 const yosay = require("yosay");

 const option = process.argv[2];
 const message = process.argv[3];

 if (option === "666") {
 	console.log('devil mode');
 } else if (option % 2 == 0) {
 	console.log(yosay(message));
} else {
	console.log((yodasay.say({ text: message })));
}
