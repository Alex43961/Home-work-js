let div = document.createElement("div");
div.style.cssText = `border: 20px solid;
width: 200px;
height: 200px;
color: blue;
font-size: 100px;
text-align: center;
background-color: yellow;
`;
div.textContent = 0;
document.body.append(div);

function count() {
	let counter = 0;
	return function () {
		return counter += 1;
	};
}

const counter = count();
div.addEventListener('click', function () {
	this.textContent = counter();
	if (this.textContent % 2 == 0) {
		div.style.borderColor = "blue";
		div.style.color = "purple";
	} else {
		div.style.borderColor = "red";
		div.style.color = "green";
	}
});






