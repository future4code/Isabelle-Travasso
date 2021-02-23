let kWhConsumido = 280;


calculokWh = kWhConsumido * 0.05;
desconto = calculokWh - (calculokWh*15)/100;

console.log("O valor a ser pago por uma residencia que consuma " + kWhConsumido + "kWh é de R$ " + calculokWh);
console.log("Com desconto, o valor ficará em R$ " + desconto );