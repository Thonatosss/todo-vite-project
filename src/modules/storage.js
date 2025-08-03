import { createMarkup } from "./markup";
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
}
function addTask(todo) {
  const newTask = {
    id: nanoid(),
    text: todo,
  };
  todoList.push(newTask);
  try {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  } catch (error) {
    console.log("Add task error:", error.message);
  }
  createMarkup(todoList);
  todoListElement.innerHTML = "";
}
function deleteTast(event) {}

export { getTasks, addTask, deleteTast };
