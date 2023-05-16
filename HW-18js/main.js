'use strict'

document.addEventListener('keydown', (event) => {
	if (event.code === "Tab") {
		event.preventDefault();
		wordInput.focus();
	}
});

let newWord = "apple";
word.textContent = newWord;

let falseCounter = 0;
counter.textContent = falseCounter;

let characterIndex = 0;
const nextKey = ({ key }) => {

	if (newWord[characterIndex] !== key) {
		falseCounter += 1;
		counter.textContent = falseCounter;
	} else {

		characterIndex += 1;
		let myCharacter = document.getElementById("guessedSymbol");
		let guessStr = newWord.slice(0, [characterIndex]);
		let myArray = Array.from(newWord);

		word.textContent = myArray.splice([characterIndex], newWord.length - 1).join("");
		myCharacter.textContent = guessStr;

		if (characterIndex === newWord.length) {
			wordInput.remove();
			wordInput.removeEventListener("keydown", nextKey);
		}
	}
}
wordInput.addEventListener("keydown", nextKey);
