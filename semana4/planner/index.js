function criaTarefa() {
    const minhaTarefa = document.getElementById("tarefa")

    if (minhaTarefa.value !== "") {
        const diaDaSemanaSelecionado = document.getElementById("dias-semana")
        const diaDaSemanaValor = diaDaSemanaSelecionado.value
        let adicionaTarefa = document.querySelector(`#` + diaDaSemanaValor)

        adicionaTarefa.innerHTML += `<li onclick="riscaTarefa(this)">${minhaTarefa.value}</li>`
        minhaTarefa.value = ""

        // Riscando paciente
        const lista = document.querySelector("li")

        lista.addEventListener("click", riscaTarefa)

    } else {
        alert("É necessário digitar uma tarefa na caixa de texto 'Nova tarefa' ")
    }

}

// Riscando paciente
function riscaTarefa(risca){
   risca.style = "text-decoration: line-through"
}

function limparTudo(){
    const removeLista = document.querySelector(".listaTarefas")

    removeLista.remove()

}

