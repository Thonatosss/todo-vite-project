const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, text, isDone }) =>
        `<li data-id=${id} data-editing="false" class="js-item rounded-xl bg-item-background w-70 flex flex-col items-center justify-center p-2.5 text-white"><div><p class="js-text text-lg text-center">${text}</p></div><button class ="js-delete bg-accent-purple p-2 rounded-lg mb-2.5 w-30">Delete task</button><button class="js-edit bg-accent-purple p-2 rounded-lg w-30" >Edit</button><div class="flex gap-2"><button class="js-save is-hidden bg-accent-purple p-2 rounded-lg w-20">Save</button><button class="js-cancel is-hidden bg-accent-purple p-2 rounded-lg w-20">Cancel</button></div>
         </li>`
    )
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
} 

export { createMarkup };
// <input type="checkbox" name="isDone" class ="js-done" ${
          // isDone === true ? "checked" : ""
        // } ></input>