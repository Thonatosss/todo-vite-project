const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, text, isDone }) =>
        `<li data-id=${id} class="js-item"><div><p>${text}</p><input type="checkbox" name="isDone" class ="js-done" ${isDone === true ? 'checked' : '' } ></div><button class ="js-delete">Delete task</button></li>`
    )
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
