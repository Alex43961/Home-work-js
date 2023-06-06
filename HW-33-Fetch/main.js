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


async function spotify23 () {
	const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af8c4008fbmsh404c667533df09ep1a62a1jsn80fb45e242c9',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

spotify23();






