import { deleteTask, getTasks, editTask } from "./storage";
let textValue = "";
function handleDelete(listItem, id) {
  listItem.remove();
  deleteTask(id);
}
function enterEditMode(listItem) {
  listItem.dataset.editing = true;
  toggleButtons(listItem, true);
  const text = listItem.querySelector(".js-text");
  textValue = text.textContent.trim();
  const input = document.createElement("input");
  input.type = "text";
  input.value = textValue;
  input.className = "js-edit-input p-2.5 rounded-lg outline-accent-purple bg-gray-500";
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
  const newText = editInput.value.trim();

  const newParagraph = document.createElement("p");
  newParagraph.className = "js-text text-lg text-center";
  newParagraph.textContent = newText;
  editInput.replaceWith(newParagraph);

  editTask(id, newText);
}
function cancelEdit(listItem) {
  const editInput = listItem.querySelector(".js-edit-input");
  listItem.dataset.editing = false;
  toggleButtons(listItem, false);
  const p = document.createElement("p");
  p.className = "js-text text-lg text-center";
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
