let toDoList = JSON.parse(localStorage.getItem('task')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

    renderTodoList();


//hoisting có nghĩa là khi ta tạo function ở dưới nhưng vẫn call function ở trên được arrow function ko hoisting được nhưng regular thì oke

function renderTodoList() {
    let todoListHTML = '';
    toDoList.forEach((value, index) =>{
        const { name, dueDate } = value; //destructuring property dueDate, name to variable
        const html = `<div>
                                ${name} at ${dueDate} 
                                <button class="delete-button">Delete</button>
                              </div>`
        todoListHTML += html;
        saveToStorage();
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', ()=>{
            toDoList.splice(index, 1);
            renderTodoList();
            // Whenever we update the todo list, save in localStorage.
        })
    })
}



document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
    addTask();  // call hàm addTask khi click vào nút thêm
})
//querySelector all will take all elements instead of just one


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