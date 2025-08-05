const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, text, isDone }) =>
        `<li data-id=${id} data-editing="false" class="js-item shadow-2xl shadow-black/20 rounded-xl bg-item-background w-65 h-55 flex flex-col items-center justify-between p-4 text-white"><div><p class="js-text text-lg text-center">${text}</p></div><div class="flex gap-4 justify-center items-center mt-20"><button class ="js-delete bg-accent-purple shadow-lg shadow-hover-purple/30 font-semibold p-2 rounded-lg w-25 text-sm ">Delete task</button><button class="js-edit bg-accent-purple shadow-lg shadow-hover-purple/30 font-semibold p-2 rounded-lg w-25 text-sm" >Edit</button>
      <button class="js-save is-hidden bg-accent-purple shadow-lg shadow-hover-purple/30 font-semibold p-2 rounded-lg w-25 text-sm">Save</button><button class="js-cancel is-hidden bg-accent-purple shadow-lg shadow-hover-purple/30 font-semibold p-2 rounded-lg w-25 text-sm">Cancel</button> </div>
         </li>`
    )
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
// <input type="checkbox" name="isDone" class ="js-done" ${
// isDone === true ? "checked" : ""
// } ></input>
