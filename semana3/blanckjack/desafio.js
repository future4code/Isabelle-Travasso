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
// console.log("Bem vindo ao jogo de Blackjack!")

// const usuario = []
// const computador = []
// const pontuacaoUsuario = []
// const pontuacaoComputador = []
// let calculoPontuacaoUsuario
// let calculoPontuacaoComputador
// let iniciar = confirm("Quer iniciar uma nova rodada?")


// if (iniciar === true) {

//    for (i = 0; i < 2; i++) {
//       const carta = comprarCarta()
//       usuario.push(carta.texto)
//       pontuacaoUsuario.push(carta.valor)
//    }
//    calculoPontuacaoUsuario += pontuacaoUsuario[i]

//    if (calculoPontuacaoUsuario > 21) {
//       for (i = 0; i < 2; i++) {
//          const carta = comprarCarta()
//          usuario.push(carta.texto)
//          pontuacaoUsuario.push(carta.valor)
//       }
//    }

//    for (i = 0; i < 2; i++) {
//       const carta = comprarCarta()
//       computador.push(carta.texto)
//       pontuacaoComputador.push(carta.valor)
//    }

//    calculoPontuacaoComputador += pontuacaoComputador[i]

//    if (calculoPontuacaoComputador = 22) {
//       for (i = 0; i < 2; i++) {
//          const carta = comprarCarta()
//          computador.push(carta.texto)
//          pontuacaoComputador.push(carta.valor)
//       }
//    }

//    console.log("Suas cartas são: " + usuario + " A carta revelada do computador é  " + computador[0] + "\n" + "Deseja comprar mais uma carta?")

//    let confirme = confirm("Deseja comprar mais uma carta?")

//    if (confirme == true) {
//       const carta = comprarCarta()
//       usuario.push(carta.texto)
//       calculoPontuacaoUsuario += pontuacaoUsuario[i]
//       console.log("Suas cartas são " + usuario + ". A carta revelada do computador é " + computador[1] + "." + "\n" + "Deseja comprar mais uma carta?")
//       if (calculoPontuacaoUsuario >= 21) {
//          confirm == false
//          alert("Suas cartas são " + usuario + ". Sua pontuação é " + calculoPontuacaoUsuario + "\n" +
//             "As cartas do computador são " + computador + ". A pontuação do computador é " + calculoPontuacaoComputador + "\n" +
//             "O computador ganhou!")
//       } else {
//          console.log("Suas cartas são " + usuario + ". A carta revelada do computador é " + computador[1] + "." + "\n" + "Deseja comprar mais uma carta?")
//          confirme
//       }
//    } else {

//       if (calculoPontuacaoComputador == calculoPontuacaoUsuario) {
//          alert("Suas cartas são " + usuario + ". Sua pontuação é " + calculoPontuacaoUsuario + "\n" +
//             "As cartas do computador são " + computador + ". A pontuação do computador é " + calculoPontuacaoComputador + "\n" +
//             "Empatou!!")
//       } else if (calculoPontuacaoComputador > calculoPontuacaoUsuario) {
//          alert("Suas cartas são " + usuario + ". Sua pontuação é " + calculoPontuacaoUsuario + "\n" +
//             "As cartas do computador são " + computador + ". A pontuação do computador é " + calculoPontuacaoComputador + "\n" +
//             "O Computador ganho =(")

//       } else if (calculoPontuacaoComputador < calculoPontuacaoUsuario) {
//          alert("Suas cartas são " + usuario + ". Sua pontuação é " + calculoPontuacaoUsuario + "\n" +
//             "As cartas do computador são " + computador + ". A pontuação do computador é " + calculoPontuacaoComputador + "\n" +
//             "O Usuário ganhou!! =D")
//       }
//       else {
//          alert("Suas cartas são " + usuario + ". Sua pontuação é " + calculoPontuacaoUsuario + "\n" +
//             "As cartas do computador são " + computador + ". A pontuação do computador é " + calculoPontuacaoComputador + "\n" +
//             "O jogo acabou")
//       }
//    }
// }
