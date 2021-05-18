// a e b- Executar o comando tsc Exercicio4.ts no terminal dentro da pasta em que o arquivo está
// c- Sim, o comando tsc trampila todos os arquivos .ts
// d- O arquivo tsconfig.json gerado possui muito mais configurações.

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}