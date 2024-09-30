let toDoList = JSON.parse(localStorage.getItem('task')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

    renderTodoList();




function renderTodoList() {
    let todoListHTML = '';
    toDoList.forEach(function(value, index){
        const { name, dueDate } = value; //destructuring property dueDate, name to variable
        const html = `<div>
                                ${name} at ${dueDate} 
                                <button class="delete-button" onclick="
                                    toDoList.splice(${index}, 1); 
                                    renderTodoList();
                                    // Whenever we update the todo list, save in localStorage.
                                    saveToStorage();
                                ">Delete</button>
                              </div>`
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTask() {
    const taskInput = document.querySelector('.input-todo');
    const dateInput = document.querySelector('.input-date');

    if (!taskInput.value)  {
        alert('Please select a task');
    }else {
        toDoList.push({
            name:taskInput.value,
            dueDate:dateInput.value
        });

        console.log(toDoList);
        taskInput.value = '' // dòng này để sau mỗi lần thêm thì input sẽ trống
        renderTodoList();
        // Whenever we update the todo list, save in localStorage.
        saveToStorage();
    }

}
function saveToStorage() {
    localStorage.setItem('task', JSON.stringify(toDoList));
}