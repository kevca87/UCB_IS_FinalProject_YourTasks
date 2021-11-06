import { ToDoList } from './ToDoList.js';


const form = document.querySelector("#form");
const task = document.querySelector("#task-input");
const taskDescription = document.querySelector("#task-description-input");
const taskListOutput = document.querySelector("#final-list-output");

var todo_list = new ToDoList();

form.addEventListener("submit",event=>{
    event.preventDefault();
    todo_list.add(task.value,taskDescription);
    let task_list = "";
    todo_list.getToDoList().forEach(element => {
        task_list = task_list + ("<li>" + element + "</li>");
    });
    taskListOutput.innerHTML =  task_list;
})
