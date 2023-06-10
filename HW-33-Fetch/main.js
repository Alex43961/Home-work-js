'use strict'
window.addEventListener('storage', (event) => console.log(event));

function getRandomUser() {



	const URL = "https://randomuser.me/api"


	let xhr = new XMLHttpRequest();
	xhr.open("GET", URL);
	xhr.onload = () => {
		if (xhr.status === 200) {
			let data = JSON.parse(xhr.responseText);
			let user = data.results[0];
			document.getElementById('user-image').src = user.picture.large;
			document.getElementById('user-phone').textContent = 'Phone: ' + user.phone;
			document.getElementById('user-name').textContent = 'Name: ' + user.name.first + ' ' + user.name.last;
			document.getElementById('user-country').textContent = 'Country: ' + user.location.country;
			document.getElementById('user-city').textContent = 'City: ' + user.location.city;
			document.getElementById('user-email').textContent = 'Email: ' + user.email;

			
			localStorage.setItem('randomUser', JSON.stringify({
				src : user.picture.large,
				name : user.name.last +" " + user.name.first,
				Phone:user.phone,
				Country:user.location.country,
				City:user.location.city,
				Email:user.email
			}));
		}

	}
	xhr.send();
}

getRandomUser();

document.getElementById('generate-user-btn').addEventListener('click', function () {
	getRandomUser();
});


 function randomDogImage () {
	fetch("https://dog.ceo/api/breeds/image/random")
	.then(function(response) {
		if(response.ok) {
			
			return response.json();
			
		} else {
			throw new Error("Error: " + response.status)
		}
	})
	.then(function(data){
console.log(data);
document.getElementById("dog-image").src = data.message;
	})
	.catch(function(error){
		console.log(error);
	})

}
randomDogImage();
document.getElementById('generate-dog-btn').addEventListener('click', function () {
	randomDogImage();
});








