//declare dom
const todoInput = document.getElementById('todoInput');
const button = document.getElementById('btn');
const todoList = document.getElementById('todo');


//eventListener
button.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteItem);

function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const todoItem = document.createElement('li');
    todoList.classList.add('listItem');
    todoItem.innerText = todoInput.value;
    todoInput.value = '';
    todoDiv.append(todoItem);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check-btn');
    todoDiv.appendChild(checkBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
}

function deleteItem(event){
    const item = event.target;

    //delete items
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    if(item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    
}