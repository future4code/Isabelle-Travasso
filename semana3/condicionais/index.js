
/*
Exercicio 1

O código testa se o número digitado possui resto na divisão por 2 ou não, sendo que para números pares seria impresso no console "Passou no teste" e para números impares "Não passou no teste" 

Exercicio 2

a. O código serve para identificar o preço de uma fruta
b. O preço da fruta Maça é R$ 2.25
c. O preço da fruta Pêra é R$ 5

Exercicio 3

a. A primeira linha recebe um valor digitado pelo usuário
b. Quando digitado 10 - Esse número passou no teste
   Quando digitado -10 - Não imprime nada
c. Sim, o erro ocorre pois a mensagem está fora do bloco da condição
*/

// console.log("Exercicio 4")

// const idade = Number(prompt("Olá! Para sabermos se você pode dirigir precisamos saber sua idade. Qual sua idade? "))

// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// console.log("Exercicio 5")

// const periodo = prompt("Olá! Qual período você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (periodo === 'M') {
//     console.log("Bom Dia!")
// } else if (periodo === 'V') {
//     console.log("Boa Tarde!")
// } else if (periodo === 'N') {
//     console.log("Boa Noite!")
// } else {
//     console.log("Olá!!")
// }

// console.log("Exercicio 6")

// const periodo2 = prompt("Olá! Qual período você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (periodo2) {
//     case 'M':
//         console.log("Bom Dia!")
//         break
//     case 'V':
//         console.log("Boa Tarde!")
//         break
//     case 'N':
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Olá!!")
//         break
// }

// console.log("Exercicio 7")

// const genero = prompt("Olá! Qual genero do filme que você irá assistir?")
// const preco = Number(prompt("Quanto custa o ingresso?"))

// if(genero === 'Fantasia' && preco < 15){
//     console.log("Bom filme!") 
// } else {
//     console.log("Escolha outro filme ou com valor menor :(")
// }

// console.log("Desafio 1")

// const genero = prompt("Olá! Qual genero do filme que você irá assistir?")
// const preco = Number(prompt("Quanto custa o ingresso?"))

// if(genero === 'Fantasia' && preco < 15){
//     const snack = prompt(" Qual snack deseja?")
//     console.log("Bom filme! com ", snack, " nhamnhamm") 
// } else {
//     console.log("Escolha outro filme ou com valor menor :(")
// }

console.log("Desafio 2")
prompt("Olá! Para realizar a compra dos ingressos respoda as perguntas apos clickar em ok")
const nome = prompt("Qual o seu nome completo?")
const tipoJogo = prompt("Qual o tipo do jogo? Digite IN para internacional e DO para doméstico")
const etapaJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar e FI para final")
const categoria = prompt("Qual a categoria do jogo: 1, 2, 3 ou 4?")
const ingressos = Number(prompt("Quais quantidades de ingressos deseja?"))
const DOSF1 = tipoJogo === 'DO' && etapaJogo === 'SF' && categoria === '1'
const DOSF2 = tipoJogo === 'DO' && etapaJogo === 'SF' && categoria === '2'
const DOSF3 = tipoJogo === 'DO' && etapaJogo === 'SF' && categoria === '3'
const DOSF4 = tipoJogo === 'DO' && etapaJogo === 'SF' && categoria === '4'
const DODT1 = tipoJogo === 'DO' && etapaJogo === 'DT' && categoria === '1'
const DODT2 = tipoJogo === 'DO' && etapaJogo === 'DT' && categoria === '2'
const DODT3 = tipoJogo === 'DO' && etapaJogo === 'DT' && categoria === '3'
const DODT4 = tipoJogo === 'DO' && etapaJogo === 'DT' && categoria === '4'
const DOFI1 = tipoJogo === 'DO' && etapaJogo === 'FI' && categoria === '1'
const DOFI2 = tipoJogo === 'DO' && etapaJogo === 'FI' && categoria === '2'
const DOFI3 = tipoJogo === 'DO' && etapaJogo === 'FI' && categoria === '3'
const DOFI4 = tipoJogo === 'DO' && etapaJogo === 'FI' && categoria === '4'
const INSF1 = tipoJogo === 'IN' && etapaJogo === 'SF' && categoria === '1'
const INSF2 = tipoJogo === 'IN' && etapaJogo === 'SF' && categoria === '2'
const INSF3 = tipoJogo === 'IN' && etapaJogo === 'SF' && categoria === '3'
const INSF4 = tipoJogo === 'IN' && etapaJogo === 'SF' && categoria === '4'
const INDT1 = tipoJogo === 'IN' && etapaJogo === 'DT' && categoria === '1'
const INDT2 = tipoJogo === 'IN' && etapaJogo === 'DT' && categoria === '2'
const INDT3 = tipoJogo === 'IN' && etapaJogo === 'DT' && categoria === '3'
const INDT4 = tipoJogo === 'IN' && etapaJogo === 'DT' && categoria === '4'
const INFI1 = tipoJogo === 'IN' && etapaJogo === 'FI' && categoria === '1'
const INFI2 = tipoJogo === 'IN' && etapaJogo === 'FI' && categoria === '2'
const INFI3 = tipoJogo === 'IN' && etapaJogo === 'FI' && categoria === '3'
const INFI4 = tipoJogo === 'IN' && etapaJogo === 'FI' && categoria === '4'


console.log("--- Dados da Compra ---")
console.log("Nome do Cliente: ", nome)
console.log("Tipo do jogo: ", tipoJogo)
console.log("Etapa do jogo: ", etapaJogo)
console.log("Categoria: ", categoria)
console.log("Quantidade de Ingressos: ", ingressos)
console.log("--- Valores ---")


if (DOSF1 == true) {
    let valor = 1320
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOSF2 == true) {
    let valor = 880
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOSF3 == true) {
    let valor = 550
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOSF4 == true) {
    let valor = 220
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DODT1 == true) {
    let valor = 660
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DODT2 == true) {
    let valor = 440
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DODT3 == true) {
    let valor = 330
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DODT4 == true) {
    let valor = 170
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOFI1 == true) {
    let valor = 1980
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOFI2 == true) {
    let valor = 1320
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOFI3 == true) {
    let valor = 880
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (DOFI4 == true) {
    let valor = 330
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INSF1 == true) {
    let valor = 1320 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INSF2 == true) {
    let valor = 880 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INSF3 == true) {
    let valor = 550 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INSF4 == true) {
    let valor = 220 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INDT1 == true) {
    let valor = 660 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INDT2 == true) {
    let valor = 440 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INDT3 == true) {
    let valor = 330 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INDT4 == true) {
    let valor = 170 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INFI1 == true) {
    let valor = 1980 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INFI2 == true) {
    let valor = 1320 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INFI3 == true) {
    let valor = 880 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)

} else if (INFI4 == true) {
    let valor = 330 * 4.10
    let valorTotal = valor * ingressos
    console.log("Valor do ingresso: R$ ", valor)
    console.log("Valor total:  R$ ", valorTotal)
}