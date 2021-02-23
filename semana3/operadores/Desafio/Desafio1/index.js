const fParaK = 77;
const cParaF = 80;
let cParaKeF = 30;
cParaKeF = Number(prompt("Olá! Digite uma temperatura em °C que farei a conversão para °F e K"));

calculoFParaK = (fParaK - 32)* 5/9 + 273.15;
calculocParaF = (cParaF * 9/5)+32;
calculocParaFa = (cParaKeF * 9/5)+32;
calculocParaK = cParaKeF + 273.15;

console.log(calculoFParaK + "K e " + calculocParaF + "°F");
console.log(calculocParaK + "K e " + calculocParaFa + "°F");