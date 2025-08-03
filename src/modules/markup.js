import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 10);

const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(({ id, text }) => `<li data-id=${id}><div><p>${text}</p></div></li>`)
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
