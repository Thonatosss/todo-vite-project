import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)


const todoList = [];


function addTask (todo, list) {

    
    todoList.push(todo);
    localStorage.setItem("todo-list", JSON.stringify(todoList));
    const markup = todoList.map((task) => `<li><div data-id=${nanoid()}><p>${task}</p></div></li>`);
    console.log(markup);
    list.insertAdjacentHTML('beforeend', markup); ;
    
}
function deleteTast (taskId){

}
export{addTask};