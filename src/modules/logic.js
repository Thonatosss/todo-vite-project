import { Notyf } from "notyf";
import "notyf/notyf.min.css";
const notyf = new Notyf();

import { deleteTask, getTasks, editTask } from "./storage";
let textValue = "";
function handleDelete(listItem, id) {
  listItem.classList.add("fade-out-remove");
  setTimeout(() => {
    listItem.remove();
    deleteTask(id);
  }, 300); // час має збігатись із transition
}
function enterEditMode(listItem) {
  listItem.dataset.editing = true;
  toggleButtons(listItem, true);
  const text = listItem.querySelector(".js-text");
  textValue = text.textContent.trim();
  const input = document.createElement("input");
  input.type = "text";
  input.value = textValue;
  input.className =
    "js-edit-input p-2 rounded-lg bg-item-background border-1 border-gray-500 outline-none ring-0 lg:w-full lg:mt-7 fade-in-edit w-5";
  text.replaceWith(input);
  input.focus();

  const { id } = listItem.dataset;

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveChanges(listItem, id);
    else if (event.key === "Escape") cancelEdit(listItem);
  });
}
function saveChanges(listItem, id) {
  listItem.dataset.editing = false;
  toggleButtons(listItem, false);
  const editInput = listItem.querySelector(".js-edit-input");

  if (editInput.value.trim() === "") {
    listItem.classList.add("fade-out-remove");
    setTimeout(() => {
      listItem.remove();
      deleteTask(id);
    }, 300);
    return;
  }
  const newText = editInput.value.trim();

  const newParagraph = document.createElement("p");
  newParagraph.className = "js-text text-lg text-center lg:mt-7 lg:text-xl";
  newParagraph.textContent = newText;
  editInput.replaceWith(newParagraph);

  editTask(id, newText);
}
function cancelEdit(listItem) {
  const editInput = listItem.querySelector(".js-edit-input");
  listItem.dataset.editing = false;
  toggleButtons(listItem, false);
  const p = document.createElement("p");
  p.className = "js-text text-lg text-center lg:mt-7 fade-in-edit lg:text-xl";
  p.textContent = textValue;
  editInput.replaceWith(p);
}
function toggleButtons(listItem, isEditing) {
  listItem.querySelector(".js-edit").classList.toggle("is-hidden", isEditing);
  listItem.querySelector(".js-delete").classList.toggle("is-hidden", isEditing);
  listItem.querySelector(".js-save").classList.toggle("is-hidden", !isEditing);
  listItem
    .querySelector(".js-cancel")
    .classList.toggle("is-hidden", !isEditing);
}

export { handleDelete, enterEditMode, saveChanges, cancelEdit };
