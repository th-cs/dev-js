// Arrays
let fruits = ["Maçã", "Uva", "Pêra", "Abacaxi", "Kiwi"];
let values = [2, 10, 5, 19, 24, 100, 12, 39, 11, 94];

function print(text, array) {
	console.log(`${text}: \n`, array);
}

// Fruits
print("-- Frutas -- \nArray original", fruits);

fruits.push("Maracujá");
print("\nArray com push(\"Maracujá\")", fruits);

fruits.pop();
print("\nArray com pop()", fruits);

fruits.unshift("Pinha");
print("\nArray com unshift(\"Pinha\")", fruits);

fruits.shift();
print("\nArray com shift()", fruits);

// Values
print("\n-- Valores --\nArray original", values);

let evenValues = values.filter(x => x % 2 === 0);
print("\nArray com filter() para retornar apenas os pares", evenValues);

let squaredValues = values.map(y => y * y);
print("\nArray com map() para retornar o quadrado de cada elemento", squaredValues);

let sumValues = values.reduce((acc, cur) => acc + cur, 0);
print("\nArray com reduce() para retornar a soma de todos os elementos",
	sumValues);

values.sort((x, y) => x - y);
print("\nArray com sort() para ordenar os elementos em ordem crescente",
	values);

values.reverse();
print("\nArray com reverse() para inverter a ordem dos elementos", values);
