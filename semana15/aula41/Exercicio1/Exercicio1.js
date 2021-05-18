// Exercício 1
// a-) Para acessarmos os parâmetros passados na linha de comando 
// precisamos digitar no terminal node nomeDaArquivoJS

const name = process.argv [2]
const age = Number(process.argv [3])
const ageInSevenYears = age + 7

if(name && age){
    console.log('\x1b[32m%s\x1b[5m', `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`)

} else (console.log("\x1b[31m%s\x1b[0m", "Digite seu nome e sua idade"))


