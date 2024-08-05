const toDoList = [];
    renderTodoList();




function renderTodoList() {
    let todoListHTML = '';
    for (let i in toDoList) {
        const html = `<p>${toDoList[i]}</p>`
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTask() {
    const taskInput = document.querySelector('.input-todo');
    const taskName = taskInput.value;
    toDoList.push(taskName);
    console.log(toDoList);
    taskInput.value = ''
    renderTodoList();
}
