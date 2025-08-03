

const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(({ id, text }) => `<li data-id=${id} class="js-item"><p>${text}</p><button class ="js-delete">Delete task</button></li>`)
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
