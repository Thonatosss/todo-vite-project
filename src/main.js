import { addTask, deleteTask, getTasks, isDone, editTask } from "./modules/storage";
import{handleDelete, enterEditMode, saveChanges, cancelEdit} from "./modules/logic"

const form = document.querySelector("form");
const container = document.querySelector(".js-container");

function handleInput(event) {
  event.preventDefault();
  const input = form.elements["todo-input"];
  if (input.value === "") return alert("You can not add empty task!");
  addTask(input.value);
  form.reset();
}
function handleButtons(event) {
  const { target } = event;
  const { id } = target.closest(".js-item").dataset;
  const listItem = target.closest(".js-item");
  
 

  if (target.classList.contains("js-delete")) {
    handleDelete(listItem,id);
  } else if (target.classList.contains("js-done")) {
    const isChecked = target.checked;
    isDone(id, isChecked);
  }
  else if (target.classList.contains("js-edit")) {
    enterEditMode(listItem);
   
  } else if (target.classList.contains("js-save")) {
    saveChanges(listItem, id);

  } else if (target.classList.contains("js-cancel")) {
    cancelEdit(listItem);
    
  }
}

document.addEventListener("DOMContentLoaded", getTasks);
form.addEventListener("submit", handleInput);
container.addEventListener("click", handleButtons);
