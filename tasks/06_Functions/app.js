// Funções tradicionais
function hi(name, age) {
	console.log(`Olá ${name}, você tem ${String(age)} anos!`);
}

function isEven(x) {
	if (x % 2 === 0) {
		console.log(`${x} é um número Par`);
	} else {
		console.log(`${x} é um número Ímpar`);
	}
}

// Função anônima
const double = function(x) {
	let result = x * 2;
	console.log(`O dobro de ${x} é ${result}`);
}

// Arrow function
const addition = (x, y) => console.log(x + y);

hi("Ana", 24);
isEven(94);
double(5);
addition(2000, 26);
