const tasks = ['lavar louça', 'malhar', 'estudar', 'meditar'];
console.log(`Tarefas desatualizadas: ${tasks}`)
tasks.push(process.argv[2]);
console.log(`Tarefas atualizadas: ${tasks}`)