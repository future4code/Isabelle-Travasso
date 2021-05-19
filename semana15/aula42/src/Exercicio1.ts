// Exercicio 1
// a- Ao atribuir um número a variável minhaString o VSCode retorna um erro.
const minhaString: string = 'valor'

// b- Para que o meuNumero também aceite string, usar o union type como number|string 
const meuNumero: number = 3

// c-
const novoObjeto: {
    nome: string,
    idade: number,
    corFavorita: string
} = { nome: "Isabelle", idade: 26, corFavorita: "Verde" }

// c- parte 2
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = { nome: "Isabelle", idade: 26, corFavorita: "Verde" }
const pessoa2: pessoa = { nome: "Felipe", idade: 29, corFavorita: "Azul" }
const pessoa3: pessoa = { nome: "Tati", idade: 40, corFavorita: "Vermelho" }

// d-
enum corArcoIris {
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    Anil = "Anil",
    Violeta = "Violeta"
}

type novaPessoa = {
    nome: string,
    idade: number,
    corFavorita: corArcoIris
}

const pessoa4: novaPessoa = {
    nome:"Tadeu",
    idade: 23,
    corFavorita: corArcoIris.Anil
}

