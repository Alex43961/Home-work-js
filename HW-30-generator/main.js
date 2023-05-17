const countDaysToNewYear = function(){
	const today = new Date();
	console.log(today); 

	const dateOfNextNewYear = new Date(2024,0, 1, 0, 0, 0, 0);
	console.log(dateOfNextNewYear); 
	const dayToNewYear = Math.floor((dateOfNextNewYear.getTime() - today.getTime()) / 86400000);
	console.log(dayToNewYear);
}
//countDaysToNewYear();


const randomColor = function(){
	let newColor = '#' + Math.random().toString().slice(3, 9);
	console.log(newColor); 
}
randomColor();