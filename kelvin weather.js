//A constant variable keeping the value in kelvin
const kelvin = 0;

//The value of celsius is 273 less than kelvin
let celsius = kelvin - 273;

//Variable fahrenheit storing an equivalent in celsius
let fahrenheit = celsius * (9/5) + 32;

//Rounding down the fahrenheit temperature with floor function
fahrenheit = Math.floor(fahrenheit);

//Display temperature in fahrenheit using string interpolation 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Conversion from celsius to newton
newton = Math.floor(celsius * (33/100));

//displaying the temperature in fahrenheit to the console
console.log(`The temperature is ${newton} degrees Newton`);