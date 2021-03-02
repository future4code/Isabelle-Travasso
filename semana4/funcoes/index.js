
/* Exercicio 1

a. Será impresso no terminal o número 10 e embaixo o número 50
b. Sem o console.log não haverá impressao no terminal

Exercicio 2

a. Será impresso apenas Darvas e Caio
b. Será impresso apenas Amanda e Caio

Exercicio 3

A função multiplicará os numeros pares do array antigo por
 eles mesmos e retornará estes valores em um novo array, eu 
 colocaria o nome dessa função de paresAoQuadrado.

*/

// console.log("Exercicio 4")

// console.log("a. ")
// function minhasInformacoes() {
//     console.log("Eu sou Isabelle, tenho 26 anos, moro em São Paulo e sou estudante.")
// }

// console.log(minhasInformacoes())


// console.log("b. ")

// function minhasInformacoes(nome, idade, cidade, estudante) {

//     if (estudante == true) {
//         estudante = "sou estudante"
//     } else {
//         estudante = "não sou estudante"
//     }

//     console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e " + estudante)
// }

// console.log(minhasInformacoes(prompt("Qual seu nome?"), Number(prompt("Quantos anos você tem?")), prompt("Qual sua cidade?"),
//     confirm("Você é estudante, correto? responda com ok para sim e cancel para não")))


// console.log("Exercicio 5")

// console.log("a. ")
// function soma(num1, num2) {
//     return num1 + num2

// }

// console.log(soma(2, 4))

// console.log("b. ")

// function comparacao(x, y) {
//     return x >= y
// }

// console.log(comparacao(5, 4))

// console.log("c. ")

// function mensagemDigitada(mensagem) {
//     for (let i = 0; i < 10; i++) {
//         console.log(mensagem)
//     }
// }

// console.log(mensagemDigitada(prompt("Me deixe uma mensagem!")))

// console.log("Exercicio 6")

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// // console.log("a. ")
// // function quantidade(){
// //         console.log(array.length)
// // }
// // console.log(quantidade())

// // console.log("b. ")
// function numeroEhPar(numero) {
//     return numero % 2 === 0
// }

// console.log(numeroEhPara(prompt("Digite um número para verificar se é par ou não")))

// console.log("c. ")
// /* Treinando funcao nao nomeada */
// const numerosPares = (array1) => {
//     let arrayPar = [];

//     for (item of array1) {
//         if (item % 2 === 0) {
//             arrayPar.push(item)
//         }
//     }
//     return arrayPar.length;
// }

// const resultado = numerosPares(array)

// console.log(resultado)

// console.log("d. ")

// const numerosPares = (array1) => {
//     let arrayPar = [];

//     for (item of array1) {
//         if (numeroEhPar(item) == true) {
//             arrayPar.push(item)
//         }
//     }
//     console.log(arrayPar)
//     return arrayPar.length;
// }

// const resultado = numerosPares(array)

// console.log(resultado)

// console.log("Desafio 1")
// console.log("1. ")

// const imprime = (conteudo) => console.log(conteudo)

// console.log(imprime(8))

// console.log("2. ")
// const soma = (num1, num2) => num1 + num2

// console.log(imprime(soma(2, 3)))

console.log("Desafio 2")

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// console.log("a. ")

// const recebeArray = (array) => {
//     let arrayMultiplicado = []
//     for (let x of array) {
//         if (x % 2 === 0) {
//             arrayMultiplicado.push(x * 2)
//         }
//     }
//     return arrayMultiplicado
// }

// console.log(recebeArray(numeros))

// console.log("b. ")

let maior = -1

const maiorNumero = (array) => {
    for(let item of array){
        if(item > maior) {
            maior = item
        }
    }
    return maior
}

const resultado = maiorNumero(numeros)

console.log(resultado)

console.log("c. ")

const itemMaiorNumero = (array) => {
        if ( array[i] == resultado){
            meuIndice = i;
        }
    return meuIndice
}

const final = itemMaiorNumero(numeros)

console.log (final)


console.log("d. ")
