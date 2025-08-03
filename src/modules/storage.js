import { customAlphabet } from "nanoid";
import { createMarkup } from "./markup";
import { tasksCounter } from "./counter";

const nanoid = customAlphabet("1234567890abcdef", 10);
const todoListElement = document.querySelector(".js-list");
let todoList = [];

function getTasks() {
  try {
    todoList =
      JSON.parse(localStorage.getItem("todo-list")) === null
        ? []
        : JSON.parse(localStorage.getItem("todo-list"));
  } catch (error) {
    console.log("Get tasks error:", error.message);
  }
  createMarkup(todoList);
  tasksCounter();
}
function addTask(todo) {
  const newTask = {
    id: nanoid(),
    text: todo,
    isDone: false,
  };
  todoList.push(newTask);
  try {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  } catch (error) {
    console.log("Add task error:", error.message);
  }
  todoListElement.innerHTML = "";
  createMarkup(todoList);
  tasksCounter();
}
function deleteTask(taskId) {
  const indexOfTask = todoList.findIndex(({ id }) => id === taskId);
  todoList.splice(indexOfTask, 1);
  try {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  } catch (error) {
    console.log("Add task error:", error.message);
  }
  tasksCounter();
}
function isDone(taskId, status) {
  console.log(`Checkbox with id ${taskId}, status ${status}`);
  const indexOfTask = todoList.findIndex(({ id }) => id === taskId);
  todoList[indexOfTask].isDone = status;

  try {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  } catch (error) {
    console.log("Error:", error.message);
  }
}
export { getTasks, addTask, deleteTask, isDone };
