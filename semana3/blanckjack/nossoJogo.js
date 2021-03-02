/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

const usuario = []
const computador = []
const pontuacaoUsuario = []
const pontuacaoComputador = []
let calculoPontuacaoUsuario
let calculoPontuacaoComputador
let iniciar = confirm("Quer iniciar uma nova rodada?")

if (iniciar === true) {

         for (i = 0; i < 2; i++) {
         const carta = comprarCarta()
         usuario.push(carta.texto)
         pontuacaoUsuario.push(carta.valor)
         calculoPontuacaoUsuario = pontuacaoUsuario[0] + pontuacaoUsuario[1]
      }
      
      console.log("Usuário - cartas: " + usuario + " - pontuação " + calculoPontuacaoUsuario)
      
      
      for (i = 0; i < 2; i++) {
         const carta = comprarCarta()
         computador.push(carta.texto)
         pontuacaoComputador.push(carta.valor)
         calculoPontuacaoComputador = pontuacaoComputador[0] + pontuacaoComputador[1]
      }
      console.log("Computador - cartas: " + computador + " - pontuação " + calculoPontuacaoComputador)
      
      
      if (calculoPontuacaoComputador == calculoPontuacaoUsuario) {
         console.log(" Empatouu!! ") 
      } else if (calculoPontuacaoComputador > calculoPontuacaoUsuario) {
         console.log("O Computador ganho =(")
      } else if (calculoPontuacaoComputador < calculoPontuacaoUsuario) {
         console.log("O Usuário ganhou!! =D")
      }

} else {
   console.log("O jogo acabou")
}



