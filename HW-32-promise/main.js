"use strict"


const func = (callback) => {
	return new Promise(callback);
};
func((resolve, reject) => {
	resolve();
})
	.then((resolve) => {
		console.log("Hello !");
	})



//!--------------- 2 ---------------------
function ifPromise(callback, time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			callback();
			resolve();
		}, time);
	});
}
ifPromise(response, 1000)
	.then((resolve) => {
		console.log("done");
	})
	.catch((reject) => {
		console.log('error')
	})

function response() {
	console.log("callback")
}


//!------------------- 3 ----------------

async function myFunction(callback, time) {

	let x = await new Promise((resolve, reject) => {
		setTimeout(() => {
			if (callback === 1) {
				resolve();
			} else {
				reject();
			}
		}, time);
	});

}

function randomTime() {
	let time = 1000 * Math.floor(1 + Math.random() * 3);
	console.log(time);
	return time;
}

function myBe() {
	let myNumber = 1 + Math.floor(Math.random() * 2);
	console.log(myNumber);
	return myNumber;

}

myFunction(myBe(), randomTime())
	.then((resolve) => {
		console.log('task done')
	})
	.catch((reject) => {
		console.log('processor overload')
	})