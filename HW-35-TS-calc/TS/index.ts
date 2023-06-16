function calculator(): void {
	const firstNumber: HTMLInputElement = document.getElementById("num1") as HTMLInputElement;

	const secondNumber: HTMLInputElement = document.getElementById("num2") as HTMLInputElement;

	const operator: HTMLSelectElement = document.getElementById("operator") as HTMLSelectElement;

	const resultSpan: HTMLSpanElement = document.getElementById("result") as HTMLSpanElement;

	const history: HTMLUListElement = document.getElementById("history") as HTMLUListElement;

	const num1: number = parseFloat(firstNumber.value);
	const num2: number = parseFloat(secondNumber.value);
	const operation: string = operator.value;

	let result: number;

	switch (operation) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		case '**':
			result = num1 ** num2;
			break;
		default:
			result = NaN;
	}



	if (!isNaN(result)) {
		const historyItem: HTMLLIElement = document.createElement("li");
		historyItem.textContent = `${num1} ` + `${operation} ` + `${num2} ` + "= " +`${result}`;
		history.appendChild(historyItem);
	}
	resultSpan.textContent = isNaN(result) ? '😢' : '😊';
}

document.addEventListener('DOMContentLoaded', () => {
	const firstNumber: HTMLInputElement = document.getElementById(
		'num1'
	) as HTMLInputElement;
	const secondNumber: HTMLInputElement = document.getElementById(
		'num2'
	) as HTMLInputElement;
	const operator: HTMLSelectElement = document.getElementById(
		'operator'
	) as HTMLSelectElement;

	//firstNumber.addEventListener('input', calculator);
	//secondNumber.addEventListener('input', calculator);
	operator.addEventListener('change', calculator);
	firstNumber.textContent = "";
	secondNumber.value. = "";
});

