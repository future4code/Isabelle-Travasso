let listaDeTarefas = [];
let indice;

listaDeTarefas[0] = prompt("Olá! Me diga 3 tarefas que você precisa fazer hoje")
listaDeTarefas[1] = prompt("Olá! Me diga 3 tarefas que você precisa fazer hoje")
listaDeTarefas[2] = prompt("Olá! Me diga 3 tarefas que você precisa fazer hoje")

console.log(listaDeTarefas);

indice = prompt("Por favor, digite o índice de uma tarefa que você já realizou")

listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas);