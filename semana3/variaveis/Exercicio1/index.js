/* Interpretação de código:

1- primeiro o número 10 e depois 10 e 5

2- imprime:10 10 10

*/

let nome;
console.log(typeof nome);
let idade;
console.log(typeof idade);

/* Ambos são undefined, pois não atribui valor algum para eles  */

nome = prompt("Qual é o seu nome?");
idade = prompt("Agora, qual é a sua idade?");
console.log(typeof nome);
console.log(typeof idade);

/* Ambos são string, pois foram valor digitados, mesmo que um seja texto e outro número */

console.log("Olá, ", nome,", você tem ", idade, " anos! =D");


