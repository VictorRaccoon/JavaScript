var kelvin = 293; //temperatura em kelvin
var celcius = kelvin - 273; //temperatura em celcius
var fahrenheit = celcius * (9/5) + 32; //temperatura em fahrenheit

fahrenheit = Math.floor(fahrenheit); // arredonda o valor de fahrenheit para um número inteiro

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var Newton = celcius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees newthon.`);