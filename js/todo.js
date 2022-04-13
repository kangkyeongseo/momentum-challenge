const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todoArray = [];
const TODO = "todo"

function saveTodo() {
    localStorage.setItem(TODO, JSON.stringify(todoArray));
}

function removeTodo(todo) {
    const removeList = todo.target.parentElement;
    removeList.remove();
    filterdTodo = todoArray.filter(todo => {
        return todo.id !== parseInt(removeList.id);
    });
    todoArray = filterdTodo;
    saveTodo()
};

function printTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;

    const span = document.createElement("span");
    span.innerText = todo.todo;
    
    const btn = document.createElement("buttton");
    btn.innerText = "❌";
    btn.addEventListener("click", removeTodo);
    
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
};

function handleTodoForm(event) {
    event.preventDefault();
    const todo = {
        todo : todoInput.value,
        id : Date.now(),
    };
    todoInput.value = "";
    todoArray.push(todo)
    saveTodo();
    printTodo(todo);
};

const savedTodo = localStorage.getItem(TODO);

if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todoArray = parsedTodo;
    parsedTodo.forEach(todo => printTodo(todo));
    todoForm.addEventListener("submit", handleTodoForm);
}else{
    todoForm.addEventListener("submit", handleTodoForm);
};
