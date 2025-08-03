import { addTask, deleteTask, getTasks } from "./modules/storage";

const form = document.querySelector("form");
const container = document.querySelector(".js-container");
console.log(container);


function handleInput(event) {
  event.preventDefault();
  const input = form.elements["todo-input"];
  if (input.value === "") return alert("You can not add empty task!");
  addTask(input.value);
  form.reset();
}
function handleDelete(event) {
  
  if(event.target.classList.contains('js-delete')){
    const {id} = event.target.closest(".js-item").dataset;
    event.target.closest(".js-item").remove();
    deleteTask(id);
    
  }
}

document.addEventListener("DOMContentLoaded", getTasks);
form.addEventListener("submit", handleInput);
container.addEventListener("click", handleDelete);
