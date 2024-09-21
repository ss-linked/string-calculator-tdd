import * as calcFunctions from './calc/functions';

const calcInput = document.getElementById('calc-input');
const calcButton = document.getElementById('calc-button');
const calcResult = document.getElementById('calc-result');
const availableFunctions = document.getElementById('calc-function');

calcButton.addEventListener('click', (e) => {
	e.preventDefault();
	try {
		const selectedFunction = availableFunctions.value;
		const result = calcFunctions[selectedFunction](calcInput.value);
		calcResult.textContent = result;
	} catch (error) {
		console.error(error);
	}
});

window.onload = () => {
	calcInput.value = null;
	calcResult.textContent = 'Result will be shown here';
}
