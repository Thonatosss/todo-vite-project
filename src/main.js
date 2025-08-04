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
  const text = listItem.querySelector(".js-text");
  const editBtn = listItem.querySelector(".js-edit");
  const cancelBtn = listItem.querySelector(".js-cancel");
  const saveBtn = listItem.querySelector(".js-save");
  const editInput = listItem.querySelector(".js-edit-input"); 

  if (target.classList.contains("js-delete")) {
    handleDelete(listItem,id);
  } else if (target.classList.contains("js-done")) {
    const isChecked = target.checked;
    isDone(id, isChecked);
  }
  else if (target.classList.contains("js-edit")) {
    listItem.dataset.editing = true;
    editBtn.style.display = "none";
    cancelBtn.style.display = "block";
    saveBtn.style.display = "block";
    const textValue = text.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = textValue;
    input.classList.add("js-edit-input");
    text.replaceWith(input);
  } else if (target.classList.contains("js-save")) {
    listItem.dataset.editing = false;
    editBtn.style.display = "block";
    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
    editTask(id, editInput.value);

  } else if (target.classList.contains("js-cancel")) {
    listItem.dataset.editing = false;
    editBtn.style.display = "block";
    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
    
  }
}

document.addEventListener("DOMContentLoaded", getTasks);
form.addEventListener("submit", handleInput);
container.addEventListener("click", handleButtons);
