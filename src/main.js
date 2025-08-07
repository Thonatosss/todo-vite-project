import { Notyf } from "notyf";
import "notyf/notyf.min.css";
const notyf = new Notyf();

import {
  addTask,
  deleteTask,
  getTasks,
  isDone,
  editTask,
} from "./modules/storage";
import {
  handleDelete,
  enterEditMode,
  saveChanges,
  cancelEdit,
} from "./modules/logic";

const form = document.querySelector("form");
const container = document.querySelector(".js-container");

function handleInput(event) {
  event.preventDefault();
  const input = form.elements["todo-input"];
  const value = input.value.trim();
  if (value === ""){
    notyf.error({
    message: `You can't add an empty task!`,
    duration: 2000,
    position: {
      x: "right",
      y: "top",
    },
  });
  return
  };
  addTask(value);
  form.reset();
  notyf.success({
    message: `Task ${value} added successfully!`,
    duration: 2000,
    position: {
      x: "right",
      y: "top",
    },
  });
}
function handleButtons(event) {
  const target = event.target;
  const listItem = target.closest(".js-item");
  if (!listItem) return;

  const { id } = listItem.dataset;

  if (target.closest(".js-delete")) {
    handleDelete(listItem, id);
    const textValue = listItem.querySelector('.js-text').textContent.trim();
    notyf.success({
    message: `Task ${textValue} deleted successfully!`,
    duration: 2000,
    position: {
      x: "right",
      y: "top",
    },
  });
  } else if (target.closest(".js-edit")) {
    enterEditMode(listItem);
  } else if (target.closest(".js-save")) {
    saveChanges(listItem, id);
    let textValue = null;
    if(!listItem.querySelector('.js-text')) return;
    textValue = listItem.querySelector('.js-text').textContent.trim();
    notyf.success({
    message: `Task ${textValue} edited successfully!`,
    duration: 2000,
    position: {
      x: "right",
      y: "top",
    },
  });
  } else if (target.closest(".js-cancel")) {
    cancelEdit(listItem);
  } else if (target.classList.contains("js-done")) {
    isDone(id, target.checked);
  }
}

document.addEventListener("DOMContentLoaded", getTasks);
form.addEventListener("submit", handleInput);
container.addEventListener("click", handleButtons);
