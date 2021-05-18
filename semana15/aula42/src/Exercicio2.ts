// a- A entrada da é a obterEstatisticas e sua saida é estatisticas
// b - Temos também as variaveis numerosOrdenado, a , b e soma

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenado: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenado[numeros.length - 1],
        menor: numerosOrdenado[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c - 

type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {
        maior: number, menor: number, media: number
    }
}

const amostraDeIdades: amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas
}

console.log(obterEstatisticas(amostraDeIdades.numeros))