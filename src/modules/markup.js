const todoListElement = document.querySelector(".js-list");

const saveIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.096 12.704q-.146-.146-.153-.345t.159-.363q.165-.16.354-.162t.354.162l3.896 3.896l.5-.5q.117-.036.263-.006t.283.168q.165.165.163.354q-.004.188-.169.353l-.48.481q-.243.237-.566.24q-.323.002-.566-.24zm10.254 3.183l8.846-8.846q.146-.147.345-.153t.363.158q.16.166.162.354q.003.189-.162.354l-8.988 8.988q-.243.243-.566.243t-.565-.243l-4.039-4.038q-.14-.14-.15-.342q-.01-.2.15-.366q.166-.165.357-.165t.357.165zm3.898-8.127l-4.237 4.236q-.14.14-.34.15q-.202.01-.367-.15q-.166-.165-.166-.356q0-.192.166-.357l4.236-4.237q.14-.14.342-.15q.2-.01.366.15q.165.166.165.357t-.165.357"/></svg>`
const editIcon =`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-5.5 md:h-5.5" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h8.386l-1 1H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-7.489l1-1v8.489q0 .69-.462 1.153T18.384 20zM10 14v-2.615l8.944-8.944q.166-.166.348-.23t.385-.063q.189 0 .368.064t.326.21L21.483 3.5q.16.166.242.365t.083.4t-.061.382q-.06.18-.226.345L12.52 14zm10.814-9.715l-1.112-1.17zM11 13h1.092l6.666-6.666l-.546-.546l-.61-.584L11 11.806zm7.212-7.211l-.61-.585zl.546.546z"/></svg>`
const cancelIcon =`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-5.5 md:h-5.5" viewBox="0 0 24 24"><path fill="currentColor" d="m12 12.708l3.246 3.246q.14.14.344.15t.364-.15t.16-.354t-.16-.354L12.708 12l3.246-3.246q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16L12 11.292L8.754 8.046q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354L11.292 12l-3.246 3.246q-.14.14-.15.345q-.01.203.15.363t.354.16t.354-.16zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>`
const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-5.5 md:h-5.5" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"/></svg>`;
function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, text, isDone }) =>
        `<li data-id=${id} data-editing="false" class="js-item fade-in-add shadow-xl shadow-black/50 rounded-xl bg-item-background w-65 h-55 flex flex-col items-center justify-between p-4 text-white md:w-75 md:h-full lg:h-full lg:w-90 transition ease-in duration-300 hover:scale-103 hover:bg-gray">
      <p class="js-text text-center text-lg md:text-lg lg:text-xl lg:mt-7">${text}</p><div class="flex gap-4 justify-center items-center mt-20">
      <button class ="js-delete bg-accent-purple flex gap-2 justify-center items-center shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg d w-27 text-xs hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-sm md:w-32 lg:w-35 lg:text-base">${deleteIcon}<span>Delete task</span></button>
      <button class="js-edit bg-accent-purple flex gap-2 justify-center items-center shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-27 text-xs hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-sm md:w-32 lg:w-35 lg:text-base">${editIcon}<span>Edit task</span></button>
      <button class="js-save is-hidden bg-accent-purple flex gap-2 justify-center items-center shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-27 text-xs hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-sm md:w-32 lg:w-35 lg:text-base">${saveIcon}<span>Save</span></button>
      <button class="js-cancel is-hidden bg-accent-purple flex gap-2 justify-center items-center shadow-lg shadow-hover-purple/30 font-normal p-2 rounded-lg w-27 text-xs hover:cursor-pointer transition ease-in duration-200 hover:scale-105 hover:bg-hover-purple md:text-sm md:w-32 lg:w-35 lg:text-base">${cancelIcon}<span>Cancel</span></button> </div>
         </li>`
    )
    .join("");

  todoListElement.insertAdjacentHTML("beforeend", markup);
}

export { createMarkup };
// <input type="checkbox" name="isDone" class ="js-done" ${
// isDone === true ? "checked" : ""
// } ></input>
