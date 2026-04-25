let person = {
	name: "Thiago",
	age: 24,
	occupation: "Desenvolvedor",
	introduce: function() {
		console.log(`Olá, eu me chamo ${this.name}, tenho ${this.age} anos e `
			+ `trabalho como ${this.occupation}.\n`)
	}
};

person.introduce();

let car = {
	make: "Porsche",
	model: "Cayenne Turbo GT",
	year: "2026",
	start: function() {
		console.log("\nCarro ligado!");
	}
};

console.log("Chaves do objeto carro: ");
console.log(Object.keys(car));
console.log("\nValores do objeto carro: ");
console.log(Object.values(car));
car.start();

let store = {
	name: "Steam",
	products: [
		{name: "Hades", price: 18.49},
		{name: "Hades II", price: 71.19},
		{name: "Elden Ring", price: 274.50},
		{name: "Resident Evil Requiem", price: 299.00},
	]
}

console.log(`\nLista de jogos da ${store.name}: `);
for (let key in store.products) {
	console.log(`- Game: ${store.products[key].name}`
		+`\n- Preço: R$ ${store.products[key].price.toFixed(2)}\n`);
}
