let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()



// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    // const arrValor = arrDespesas.map((arrDespesaAdd, index, array) => {
    //     return arrDespesaAdd.valor
    // })

    // const arrTipo = arrDespesas.map((arrDespesaAdd, index, array) => {
    //     return arrDespesaAdd.tipo
    // })

    // const arrDescricao = arrDespesas.map((arrDespesaAdd, index, array) => {
    //     return arrDespesaAdd.descricao
    // })

    // for (i = 0; i < arrValor.length; i++) {
    //     divDespesas.innerHTML += `<p> valor: R$ ${arrValor[i]} | tipo: ${arrTipo[i]} | descrição: ${arrDescricao[i]}</p> `
    // }

    for (i = 0; i < despesas.length; i++) {
        divDespesas.innerHTML += `<p> valor: R$ ${despesas[i].valor} | tipo: ${despesas[i].tipo} | descrição: ${despesas[i].descricao}</p> `
    }
}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    const somaAlimentacao = (arrDespesas) => {
        return arrDespesas.tipo === 'alimentação'
    }
    const somaUtilidades = (arrDespesas) => {
        return arrDespesas.tipo === 'utilidades'
    }
    const somaViagem = (arrDespesas) => {
        return arrDespesas.tipo === 'viagem'
    }

    const alimentacao = arrDespesas.filter(somaAlimentacao)
    for (i = 0; i < alimentacao.length; i++) {
        gastoAlimentacao += alimentacao[i].valor
    }

    const utilidades = arrDespesas.filter(somaUtilidades)
    for (i = 0; i < utilidades.length; i++) {
        gastoUtilidades += utilidades[i].valor
    }

    const viagem = arrDespesas.filter(somaViagem)
    for (i = 0; i < viagem.length; i++) {
        gastoViagem += viagem[i].valor
    }

    gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`

}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    let despesasFiltradas = arrDespesas.filter((arrDespesas) => {
        if (arrDespesas.tipo === tipoFiltro && arrDespesas.valor >= valorMin && arrDespesas.valor <= valorMax) {

            return arrDespesas

        } else if ( tipoFiltro === 'todos' && arrDespesas.valor >= valorMin && arrDespesas.valor <= valorMax) {

            return arrDespesas
        
        }
    })

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}
