import { addTask, deleteTask, getTasks, isDone, editTask } from "./storage";

let textValue = "";
function handleDelete(listItem, id) {
  listItem.remove();
  deleteTask(id);
}
function enterEditMode(listItem) {
  listItem.dataset.editing = true;
  toggleButtons(listItem, true);
  const text = listItem.querySelector(".js-text");
  textValue = text.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = textValue;
  input.classList.add("js-edit-input");
  text.replaceWith(input);
}
function saveChanges(listItem, id) {
  listItem.dataset.editing = false;
  toggleButtons(listItem, true);
  const editInput = listItem.querySelector(".js-edit-input");
  const newText = editInput.value;

  const newParagraph = document.createElement("p");
  newParagraph.className = "js-text";
  newParagraph.textContent = newText;
  editInput.replaceWith(newParagraph);

  editTask(id, newText);
}
function cancelEdit(listItem) {
  const editInput = listItem.querySelector(".js-edit-input");
  listItem.dataset.editing = false;
  toggleButtons(listItem, true);
  const p = document.createElement("p");
  p.className = "js-text";
  p.textContent = textValue;
  editInput.replaceWith(p);
}
function toggleButtons(listItem, isEditing) {
  if (isEditing) {
    listItem.querySelector(".js-edit").classList.toggle("is-hidden");
    listItem.querySelector(".js-save").classList.toggle("is-hidden");
    listItem.querySelector(".js-cancel").classList.toggle("is-hidden");
  }
}

export { handleDelete, enterEditMode, saveChanges, cancelEdit };
