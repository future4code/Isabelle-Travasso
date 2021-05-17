const tasks=["Lavar roupa"]
const newTask = process.argv[2]

if(newTask) {
    tasks.push(`\n${newTask}`)

    console.log('\x1b[32m%s\x1b[5m', "Tarefa adicionada com sucesso!")
    console.log('\x1b[36m%s\x1b[0m', `terefas: \n${tasks}\n`)
} else (console.log("\x1b[31m%s\x1b[0m", "Adicione uma tarefa"))