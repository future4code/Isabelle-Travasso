const operation = process.argv [2]
const number1 = Number(process.argv [3])
const number2 = Number(process.argv [4])

switch(operation) {
    case 'sum': 
    result = number1 + number2
    break
    case 'sub': 
    result = number1 - number2
    break
    case 'div': 
    result = number1 / number2
    break
    case 'mult': 
    result = number1 * number2
    break
    default: 
    result = "Ops! Operação inválida, escolha entre sum, sub, mult ou div "

}


if(number1 && number2){
    console.log('\x1b[32m%s\x1b[5m', `A ${operation} resultou em ${result}`)

} else (console.log("\x1b[31m%s\x1b[0m", "Digite a operação desejada (sum, sub, mult ou div) e dois numeros"))


