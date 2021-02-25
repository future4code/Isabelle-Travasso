/* Exercicio 1 

    Equanto i for menor que 5, valor será i+1
    Ou seja i = 0  valor = 0 
            i = 1  valor = 1
            i = 2  valor = 3
            i = 3  valor = 6
            i = 4  valor = 10
    Dessa forma o que será impresso no console será o número 10

Exercicio 2

    a. No console será impresso todos os números menores que 18 sendo um abaixo do outro.

    b. Sim,  for (let numero of lista) {console.log(numero)}

Desafio 1

    0
    00
    000
    0000

*/

// console.log("Exercicio 3")

// console.log("a. ")

// let arrayOriginal = [5, 2, 7, 4, 9, 6, 7, 8, 9, 14];

// for (let numeros of arrayOriginal) {
//     console.log(numeros
//     )
// }

// console.log("b. ")

// for (let numeros of arrayOriginal) {
//     numeros /= 10
//     console.log(numeros
//     )
// }

// console.log("c. ")

// let arrayNovo = []

// for (let numeros of arrayOriginal) {

//     if (numeros % 2 === 0) {
//         arrayNovo.push(numeros)
//     }
// }
// console.log(arrayNovo)

// console.log("d. ")

// let elemento
// let i = 0

// while (i < arrayOriginal.length) {

//     elemento = arrayOriginal[i]

//     i++
//     console.log("O elemento do índex " + i + " é " + elemento)
// }

// console.log("e. ")

// let valorMaximo = -1
// let valorMinimo = 100

// for (let numeros of arrayOriginal) {

//     if(numeros > valorMaximo){
//         valorMaximo = numeros
//     }

//     if(numeros < valorMinimo){
//         valorMinimo = numeros
//     }
// }

// console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo)

// console.log("Desafio 1")

// let numeroPensado = prompt("Vamos começar? Em qual número você está pensando?")
// let numeroChutado = prompt("Tente adivinhar em qual número eu pensei! De seu chute:")

// console.log(" O numero chutado foi: " + numeroChutado)

// while (numeroPensado !== numeroChutado){

//     if ( numeroChutado > numeroPensado ){
//         console.log("Você errou, o número que pensei é menor!" )
//     } else if ( numeroChutado < numeroPensado ){
//         console.log("Você errou, o número que pensei é maior!" )
//     }

//     numeroChutado = prompt("Tente novamente!")
//     console.log(" O numero chutado foi: " + numeroChutado)
// }
//     console.log("Muito bem! Você acertou!")

console.log("Desafio 2")

let numeroPensado = Math.round(Math.random() * 100)
let numeroChutado = Number(prompt("Tente adivinhar em qual número eu pensei! De seu chute:"))

while (numeroPensado != numeroChutado){

    if ( numeroChutado > numeroPensado ){
       
        console.log("Você errou, o número que pensei é menor!" )

    } else if ( numeroChutado < numeroPensado ){
        
        console.log("Você errou, o número que pensei é maior!" )
    }

    console.log(" O numero chutado foi: " + numeroChutado)
    numeroChutado = prompt("Tente novamente!")
}
    console.log("Muito bem! Você acertou! o número pensado foi " + numeroPensado)

/* A parte de número aleatório foi tranquilo, porém travei ao utilizar 
!==, pois o número gerado não é igual ao digitado, mesmo colocando o mesmo tipo... acredito que seja pois ele 
ser um número decimal arredondado*/