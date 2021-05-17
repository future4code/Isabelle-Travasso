// const tasks=["Lavar roupa"]
// const newTask = process.argv[2]

// if(newTask) {
//     tasks.push(`\n${newTask}`)

//     console.log('\x1b[32m%s\x1b[5m', "Tarefa adicionada com sucesso!")
//     console.log('\x1b[36m%s\x1b[0m', `tarefas: \n${tasks}\n`)
// } else (console.log("\x1b[31m%s\x1b[0m", "Adicione uma tarefa"))

const fs = require('fs')

fs.appendFile("./tasks.txt", `${process.argv[2]},\n`, (err)=> err&&console.log(err))

fs.readFile("./tasks.txt", function(err, file){
    console.log('\x1b[32m%s\x1b[5m', "Tarefa adicionada com sucesso!")
    console.log('\x1b[36m%s\x1b[0m', `Tarefas: \n` + file.toString())
})