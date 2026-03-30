// Type of each variable
let lunch = "Pizza";
let done = true;
let slices = 10;
let tooManyDigits = 18446744073709551616n;
let notInitialized;
let nullValue = null;
let key = Symbol("id");

console.log(typeof lunch);
console.log(typeof done);
console.log(typeof slices);
console.log(typeof tooManyDigits);
console.log(typeof notInitialized);
console.log(typeof nullValue);
console.log(typeof key);

// Data types conversion
let value = "94";
let planets = 8;
let isOn = 0;

console.log("\nResultado da divisão 94 / 2 = " + Number(value) / 2);
console.log("O sistema solar tem " + String(planets) + " planetas conhecidos");
console.log("A lâmpada está ligada? " + Boolean(isOn));

// Primitive type:
// When a variable is assigned the value of another variable of primitive type,
// it becomes a separate instance of the original variable with a copy of its
// value

// Reference type:
// When a variable is assigned the value of an object, it points to the same
// memory address of said object, becoming a new reference to the same object
