import { Task } from './Task.js';
import { ToDoList } from './ToDoList.js';


const form = document.querySelector("#form");
const task = document.querySelector("#task-input");
const taskDescription = document.querySelector("#task-description-input");
const taskListOutput = document.querySelector("#final-list-output");

const formEdit = document.querySelector("#form-edit");
const taskToEdit = document.querySelector("#task-to-edit-input");
const newTask = document.querySelector("#new-task-input");
const newTaskDescription = document.querySelector("#new-task-descripption-input");



var todo_list = new ToDoList();

form.addEventListener("submit",event=>{
    event.preventDefault();
    todo_list.add(task.value, taskDescription.value);
    let task_list = "";
    todo_list.getToDoList().forEach(element => {
        task_list = task_list + ("<li>" + element + "</li>");
    });
    taskListOutput.innerHTML =  task_list;
})

formEdit.addEventListener("submit",event=>{
    event.preventDefault();
    var task = new Task(newTask.value, newTaskDescription);
    todo_list.editTaskInTasksList(taskToEdit.value, task);
    let task_list = "";
    todo_list.getToDoList().forEach(element => {
        task_list = task_list + ("<li>" + element + "</li>");
    });
    taskListOutput.innerHTML =  task_list;
})