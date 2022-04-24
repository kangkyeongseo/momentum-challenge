const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const importantList = document.querySelector(".important-list");

let todoArray = [];
const TODO = "todo";

function saveTodo() {
  localStorage.setItem(TODO, JSON.stringify(todoArray));
}

function handleStarClick(star) {
  const seletedStar = star.target;
  const seletedOrder = todoArray.findIndex((todo) => {
    return todo.id === parseInt(seletedStar.parentElement.id);
  });
  const seletedObject = todoArray[seletedOrder];

  seletedObject.important = !seletedObject.important;
  seletedStar.parentElement.remove();
  printTodo(seletedObject);

  const updatedArray = todoArray.filter((todo) => {
    return todo.id !== parseInt(seletedStar.parentElement.id);
  });
  todoArray = updatedArray;
  todoArray.push(seletedObject);
  saveTodo();
}

function removeTodo(todo) {
  const removeList = todo.target.parentElement.parentElement;
  removeList.remove();
  filterdTodo = todoArray.filter((todo) => {
    return todo.id !== parseInt(removeList.id);
  });
  todoArray = filterdTodo;
  saveTodo();
}

function removeImportant(todo) {
  const removeList = todo.target.parentElement;
  removeList.remove();
  filterdTodo = importantArray.filter((todo) => {
    return todo.id !== parseInt(removeList.id);
  });
  importantArray = filterdTodo;
  importantSave();
}

function animateCheckBox(event) {
  const checkBoxScale = [
    { transform: "scale(1)" },
    { transform: "scale(0.95)" },
    { transform: "scale(1)" },
  ];

  const checkBoxTiming = {
    duration: 100,
    iterations: 1,
  };

  const animateList = event.target.parentElement.parentElement;
  animateList.animate(checkBoxScale, checkBoxTiming);
}

function handleCheckBox(check) {
  const checkIcon = check.target;
  const checkIconLi = checkIcon.parentElement.parentElement;
  const checkOrder = todoArray.findIndex((todo) => {
    return todo.id === parseInt(checkIconLi.id);
  });

  todoArray[checkOrder].check = !todoArray[checkOrder].check;
  saveTodo();

  if (todoArray[checkOrder].check) {
    checkIcon.classList.remove("fa-square");
    checkIcon.classList.add("fa-check-square");
  } else {
    checkIcon.classList.remove("fa-chrck-square");
    checkIcon.classList.add("fa-square");
  }
}

function printTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const star = document.createElement("span");
  star.innerText = "★";
  star.addEventListener("click", handleStarClick);

  const span = document.createElement("span");
  span.innerText = todo.todo;

  const checkBox = document.createElement("i");
  if (todo.check) {
    checkBox.classList = "far fa-check-square";
  } else {
    checkBox.classList = "far fa-square";
  }
  checkBox.addEventListener("click", handleCheckBox);
  checkBox.addEventListener("click", animateCheckBox);

  const btn = document.createElement("i");
  btn.classList = "fas fa-trash-alt";
  btn.addEventListener("click", removeTodo);

  const column = document.createElement("div");
  column.appendChild(checkBox);
  column.appendChild(btn);

  li.appendChild(star);
  li.appendChild(span);
  li.appendChild(column);

  if (!todo.important) {
    todoList.appendChild(li);
  } else {
    importantList.appendChild(li);
  }
}

function handleTodoForm(event) {
  event.preventDefault();
  const todo = {
    todo: todoInput.value,
    id: Date.now(),
    important: false,
    check: false,
  };
  todoInput.value = "";
  todoArray.push(todo);
  saveTodo();
  printTodo(todo);
}

const savedTodo = localStorage.getItem(TODO);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todoArray = parsedTodo;
  parsedTodo.forEach((todo) => printTodo(todo));
  todoForm.addEventListener("submit", handleTodoForm);
} else {
  todoForm.addEventListener("submit", handleTodoForm);
}
