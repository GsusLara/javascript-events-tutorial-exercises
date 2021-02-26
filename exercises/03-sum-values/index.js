window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber");
	let resultado = parseInt(stringA) + parseInt(stringB);
	document.getElementById("resultNumber").value = resultado;

	//resultado.innerText =
	//your code goes here
};
