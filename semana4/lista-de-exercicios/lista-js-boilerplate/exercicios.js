//Exercício 1

function inverteArray(array) {
   return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {

   let novoArray = []
   for (let i of array) {
      if (i % 2 === 0) {
         novoArray.push(i * i)
      }
   }

   return novoArray

}

//Exercício 3

function retornaNumerosPares(array) {
   let novoArray = []
   for (let i of array) {
      if (i % 2 === 0) {
         novoArray.push(i)
      }
   }

   return novoArray
}

//Exercício 4

function retornaMaiorNumero(array) {

   var maior = Math.max(...array);

   return maior
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {

   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   const novoArray = [
      booleano1 && booleano2 && !booleano4,
      (booleano1 && booleano2) || !booleano3,
      (booleano2 || booleano3) && (booleano4 || booleano1),
      !(booleano2 && booleano3) || !(booleano1 && booleano3),
      !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   ]

   return novoArray

}

//Exercício 7

function retornaNNumerosPares(n) {
   let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8]
   let novoArray = []
   let nPar = n
   if (nPar % 2 === 0) {
      for (let i = 0; i <= n; i++) {
         if (numeros[i] % 2 === 0) {
            novoArray.push(numeros[i])
         }
      }
   } else {
      nPar = n * 2
      for (let i = 0; i < nPar; i++) {
         if (numeros[i] % 2 === 0) {
            novoArray.push(numeros[i])
         }
      }
   }
   return novoArray
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c && c === a) {
      return 'Equilátero'
   } else if (a !== b && b !== c && c !== a) {
      return 'Escaleno'
   } return 'Isósceles'
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   const compara = {
      maiorNumero: 0,
      maiorDivisivelporMenor: 0,
      diferenca: 0
   }

   if (num1 > num2) {
      compara.maiorNumero = num1
      compara.diferenca = num1 - num2
      if (compara.maiorNumero % 2 === 0) {
         compara.maiorDivisivelporMenor = true
      } false
   } compara.maiorNumero = num2
   compara.diferenca = num2 - num1
   if (compara.maiorNumero % 2 === 0) {
      compara.maiorDivisivelporMenor = true
   } false

   return compara
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let novoArray = []

   let maior = Math.max(...array)
   array.splice(array.indexOf(maior), 1)
   let menor = Math.min(...array)
   array.splice(array.indexOf(menor), 1)

   maior = Math.max(...array)
   menor = Math.min(...array)

   novoArray.push(maior, menor)

   return novoArray
}

//Exercício 11
function ordenaArray(array) {

   let novoArray = []
   let tamanhoArray = array.length

   for (let i of array) {
      while (tamanhoArray !== 0) {
         let menor = Math.min(...array)
         array.splice(array.indexOf(menor), 1)
         novoArray.push(menor)

         tamanhoArray--
      }
      return novoArray
   }
   return console.log(novoArray)


}
ordenaArray(array)

// Exercício 12

function filmeFavorito() {
   const dadosFilme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return dadosFilme
}

// Exercício 13

function imprimeChamada() {
   let mensagem = `Venha assistir ao filme ${filmeFavorito().nome}, de ${filmeFavorito().ano}, dirigido por ${filmeFavorito().diretor} e estrelado por ${filmeFavorito().atores[0]}, ${filmeFavorito().atores[1]}, ${filmeFavorito().atores[2]}, ${filmeFavorito().atores[3]}.`

   return mensagem
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const dadosRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: (lado1 * lado2)
   }

   return dadosRetangulo

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }

   pessoa.nome = "ANÔNIMO"

   return pessoa
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]


// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   let soAdulto = []

   for (i = 0; i < arrayDePessoas.length; i++) {
      if (arrayDePessoas[i].idade >= 20) {
         soAdulto.push(arrayDePessoas[i])
      }
   }

   return soAdulto
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {

   let soAdolescente = []

   for (i = 0; i < arrayDePessoas.length; i++) {
      if (arrayDePessoas[i].idade < 20) {
         soAdolescente.push(arrayDePessoas[i])
      }
   }

   return soAdolescente
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {

   const resultado = []

   for (i = 0; i < array.length; i++) {
      resultado.push(array[i] * 2)
   }

   return resultado
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let resultado = []

   for (i = 0; i < array.length; i++) {
      resultado.push(array[i] * 2)
   }

   for (i = 0; i < resultado.length; i++) {
      resultado[i] = String(resultado[i])
   }

   return resultado
}

// Exercício 17, letra C

function verificaParidade(array) {
   let resultado = [...array]

   for (let i = 0; i < resultado.length; i++) {
      if (resultado[i] % 2 === 0) {
         resultado[i] = `${resultado[i]} é par`
      } else if (resultado[i] % 2 === 1) {
         resultado[i] = `${resultado[i]} é ímpar`
      }
   }

   return resultado
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {

   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]

   let podeEntrar = []

   for (i = 0; i < pessoas.length; i++) {
      if (pessoas[i].idade < 60 && pessoas[i].idade > 14 && pessoas[i].altura >= 1.5) {
         podeEntrar.push(pessoas[i])
      }
   }

   return podeEntrar
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]

   let naoPodeEntrar = []

   for (i = 0; i < pessoas.length; i++) {
      if (pessoas[i].idade >= 60 || pessoas[i].idade <= 14 || pessoas[i].altura < 1.5) {
         naoPodeEntrar.push(pessoas[i])
      }
   }

   return naoPodeEntrar
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   const consultas = [
      { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
      { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
      { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
      { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
   ]

   let emailEnviado = []

   for (let i = 0; i < consultas.length; i++) {
      if (consultas[i].cancelada === false && consultas[i].genero === "feminino") {
         emailEnviado.push( "Olá, Sra. " + consultas[i].nome + ". Estamos enviando esta mensagem para lembrá-la da sua consulta no dia " + consultas[i].dataDaConsulta + ". Por favor, acuse o recebimento deste-email.")
   } else if(consultas[i].cancelada === false && consultas[i].genero === "masculino"){
      emailEnviado.push( "Olá, Sr. " + consultas[i].nome + ". Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia " + consultas[i].dataDaConsulta + ". Por favor, acuse o recebimento deste-email.")
   } else if (consultas[i].cancelada === true && consultas[i].genero === "feminino"){   
      emailEnviado.push( "Olá, Sra. " + consultas[i].nome + ". Infelizmente sua consulta marcada para o dia " + consultas[i].dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.")
   } else if(consultas[i].cancelada === true && consultas[i].genero === "masculino"){
      emailEnviado.push( "Olá, Sr. " + consultas[i].nome + ". Infelizmente sua consulta marcada para o dia " + consultas[i].dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.")
   }

}

   return emailEnviado

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   const contas = [
      { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
      { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
      { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
      { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
      { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
      { cliente: "Soter", saldoTotal: 1200, compras: [] }
   ]

   contas.forEach((gastos) => {
      for(let i=0; i < gastos.compras.length; i++){
         gastos.saldoTotal = gastos.saldoTotal - gastos.compras[i]
      }
   })
   
   return contas
}