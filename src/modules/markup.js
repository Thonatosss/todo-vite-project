const todoListElement = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, text, isDone }) =>
        `<li data-id=${id} data-editing="false" class="js-item fade-in-add shadow-xl shadow-black/50 rounded-xl bg-item-background w-65 h-55 flex flex-col items-center justify-between p-4 text-white md:w-75 md:h-full lg:h-full lg:w-90 transition ease-in duration-300 hover:scale-103 hover:bg-gray"><p class="js-text text-center text-lg md:text-lg lg:text-xl lg:mt-7">${text}</p><div class="flex gap-4 justify-center items-center mt-20"><button class ="js-delete bg-accent-purple shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-25 text-sm hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-base md:w-30 lg:w-35 lg:text-base ">Delete task</button><button class="js-edit bg-accent-purple shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-25 text-sm hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-base md:w-30 lg:w-35 lg:text-base" >Edit</button>
      <button class="js-save is-hidden bg-accent-purple shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-25 text-sm hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-base md:w-30 lg:w-35 lg:text-base">Save</button><button class="js-cancel is-hidden bg-accent-purple shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-25 text-sm hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-base md:w-30 lg:w-35 lg:text-base">Cancel</button> </div>
         </li>`
    )
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
// <input type="checkbox" name="isDone" class ="js-done" ${
// isDone === true ? "checked" : ""
// } ></input>
