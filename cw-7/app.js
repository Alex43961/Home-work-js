let users = [
	{
		name,
		age,
		role,
	}
]


let isCount = true;
while (isCount) {
	let reg = prompt("Do you want to registration? y/n")
	switch (reg) {
		case y:
			userReg();
			isCount = false;
			break;

		default:
			alert("Try again")
			break;
	}
}
function userReg(name, age, role) {
	let name = prompt("WHat is your name?")
	if (name) {

	}

}