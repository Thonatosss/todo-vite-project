const counter = document.querySelector(".js-counter");

function tasksCounter() {
  let tasks = [];
  try {
    const raw = localStorage.getItem("todo-list");
    if (raw !== null) {
      tasks = JSON.parse(raw);
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
  counter.textContent = `(${tasks.length})`;
}
export { tasksCounter };
