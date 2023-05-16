'use strict';

// homework

// 1) Write function getUserByID
// 2) Function should get userID and then find its into users
// 3) Function must return user

// USE : FOR


const usersList = [
	{
		id: createID(),
		login: "Garry",
		password: 1111,
		loverColor: "red",
		loverCar: "BMV"
	},
	{
		id: createID(),
		login: "Johnny",
		password: 2222,
		loverColor: "dark",
		loverCar: "Toyota"
	},
	{
		id: createID(),
		login: "Lisa",
		password: 5555,
		loverColor: "violet",
		loverFlower: "rose",
	},
	{
		id: createID(),
		login: "Julia",
		password: 7777,
		loverFlower: "jasmine",
		loverCar: "Porcshe"
	},
];
function createID() {
	return Math.random().toString().slice(3, 7);
}

function usersID(list) {
	for (let i = 0; i < list.length; i++) {

		let userListItem = list[i];
		console.log(userListItem.id);
	}
};

usersID(usersList);

function getUserCard(item, list) {

	const userIDForCard = prompt("Enter your ID");
	for (const item of list) {

		if (item.id !== userIDForCard) {
			continue;
		} else {
			return item;
		}

	}
};
console.log(getUserCard({}, usersList));


