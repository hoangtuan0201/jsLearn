const toDoList = [];



function addTask() {
    const taskInput = document.querySelector('.input-todo');
    const taskName = taskInput.value;
    toDoList.push(taskName);
    console.log(toDoList);
    taskInput.value = ''
}
