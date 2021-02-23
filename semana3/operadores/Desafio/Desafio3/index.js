const lbParakg = 20;
const ozParakg = 10.5;
const miParam = 100;
const ftParam = 50;
const galParaL = 103.56;
let xicParaL = 450;
xicParaL = Number(prompt("Olá! Digite um valor em xic para que seja convertido em L"));

calculoLb = lbParakg/2.2046;
calculoOz = ozParakg/35.274;
calculoMi = miParam/0.00062137;
calculoFt = ftParam/3.2808;
calculoGal = galParaL/0.26417;
calculoXic = xicParaL*0.24;

console.log(lbParakg + "lb equivalem a " + calculoLb + "kg");
console.log(ozParakg + "oz equivalem a " + calculoOz + "kg");
console.log(miParam + "mi equivalem a " + calculoMi+ "m");
console.log(ftParam + "ft equivalem a " + calculoFt + "m");
console.log(galParaL + "gal equivalem a " + calculoGal + "L");
console.log(xicParaL + "xic equivalem a " + calculoXic + "L");
