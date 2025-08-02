import { addTask } from "./modules/markup";

const form = document.querySelector("form");
const todoList = document.querySelector(".js-list");

const handleInput = event =>{
  event.preventDefault();
  const input = form.elements['todo-input'];
  if(input.value === "") return alert("You can not add empty task!");
  addTask(input.value, todoList);
  console.log();

}

form.addEventListener("submit", handleInput);
