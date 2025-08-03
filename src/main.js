import { addTask, deleteTast, getTasks } from "./modules/storage";

const form = document.querySelector("form");


const handleInput = event =>{
  event.preventDefault();
  const input = form.elements['todo-input'];
  if(input.value === "") return alert("You can not add empty task!");
  addTask(input.value);
  console.log();

}

document.addEventListener("DOMContentLoaded", getTasks);
form.addEventListener("submit", handleInput);
