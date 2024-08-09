const toDoList = [
    {
        name:'make dinner',
        dueDate: '2023-6-8'
    },
    {
        name: 'go to the gym', 
        dueDate: '2023-6-10'
    }
];
    renderTodoList();




function renderTodoList() {
    let todoListHTML = '';
    for (let i in toDoList) {
        // Tạo HTML cho từng task ứng với thông tin của task
        // const name = toDoList[i].name;
        const { name } = toDoList[i]; //destructuring property name to variable
        // const dueDate = toDoList[i].dueDate;
        const { dueDate } = toDoList[i]; //destructuring property dueDate to variable
        const html = `<div>${name}</div>
                             <div>${dueDate}</div>
                            <button class="delete-button" onclick="
                                toDoList.splice(${i}, 1); 
                                renderTodoList();
                            ">Delete</button>`
        todoListHTML += html;
    }
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
    }
}
