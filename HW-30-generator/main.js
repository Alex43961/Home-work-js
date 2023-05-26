const countDaysToNewYear = function () {
	const today = new Date();
	console.log(today);

	const dateOfNextNewYear = new Date(2024, 0, 1, 0, 0, 0, 0);
	console.log(dateOfNextNewYear);
	const dayToNewYear = Math.floor((dateOfNextNewYear.getTime() - today.getTime()) / 86400000);
	console.log('До Нового Года осталось ' + `${dayToNewYear}` + " дней.");
}
countDaysToNewYear();


const randomColorsArray = function () {
	let manyColors = [];
	let count = 0;
	for (let i = 0; i < 1000; i++) {
		count++;
		let x = Math.floor(Math.random() * 250);
		let y = Math.floor(Math.random() * 250);
		let z = Math.floor(Math.random() * 250);


		let newColor = `rgb(${x}, ${y},${z})`;
		
		manyColors.push(newColor);
	}

	return manyColors;
}


function* infinityColor() {

	const endLessColor = randomColorsArray();

	for (let j = 0; j < endLessColor.length; j++) {

		yield endLessColor[j];
		if (j == endLessColor.length - 1) {
			j = 0;
		}
	}

}
let iterator = infinityColor();




let button = document.getElementById("button");

let body = document.getElementById("body");
button.onclick = function () {

	document.body.style.backgroundColor = iterator.next().value;	
}