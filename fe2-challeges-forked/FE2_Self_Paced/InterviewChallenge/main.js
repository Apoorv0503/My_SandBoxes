console.log("main");

let date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

document.querySelector(".sub-heading").innerText = date;

// create the todos list item
let addTodos = () => {
  let todoInput = document.getElementById("todo-input");
  let todoText = todoInput.value.trim();
  console.log(todoText);
  if (todoText !== "") {
    const todoList = document.getElementById("todo-list");

    //  creating the list item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.style.overflow = "hidden";

    // creating checkbox
    const checkbox = document.createElement("input");
    checkbox.className = "list-check-input";
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "20px";

    // creating label
    const label = document.createElement("label");
    label.className = "list-group-label";
    label.innerText = todoText;

    // add all these item ti list element
    listItem.append(checkbox, label);

    // add listItem to list
    todoList.append(listItem);

    // clear input and focus back to it
    todoInput.value = "";
    todoInput.focus();
  }
};

// function to clear all todos
let clearTodos = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
};

// event listener for + button
document.getElementById("addButton").addEventListener("click", addTodos);

// event on hitting the enter button
let todoInput = document.getElementById("todo-input");
todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodos();
  }
});

// event listener for clear button
document.getElementById("clearButton").addEventListener("click", clearTodos);

// event listener for marking To-Do items as done
let todoList = document.getElementById("todo-list");
todoList.addEventListener("change", function (event) {
  const checkbox = event.target;
  const label = checkbox.nextElementSibling;
  if (checkbox.checked) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
});
