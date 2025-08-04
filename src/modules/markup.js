const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, text, isDone }) =>
        `<li data-id=${id} data-editing="false" class="js-item"><div><p class="js-text">${text}</p><input type="checkbox" name="isDone" class ="js-done" ${
          isDone === true ? "checked" : ""
        } ></div><button class ="js-delete">Delete task</button><div><button class="js-edit" >Edit</button><button class="js-save is-hidden">Save</button><button class="js-cancel is-hidden">Cancel</button></div>
         </li>`
    )
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
