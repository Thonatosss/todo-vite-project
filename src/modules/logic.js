import { addTask, deleteTask, getTasks, isDone, editTask } from "./storage";
function handleDelete (listItem, id) {
    listItem.remove();
    deleteTask(id);
}
function enterEditMode (listItem){

}
function saveChanges (listItem, id){

}
function cancelEdit(listItem){

}

export{handleDelete, enterEditMode, saveChanges, cancelEdit}