import { Task } from './Task.js';
import { ToDoList } from './ToDoList.js';


const form = document.querySelector("#form");
const taskName = document.querySelector("#task-input");
const taskDescription = document.querySelector("#task-description-input");
const taskListOutput = document.querySelector("#final-list-output");

const formEdit = document.querySelector("#form-edit");
const taskToEdit = document.querySelector("#task-to-edit-input");
const newTask = document.querySelector("#new-task-input");
const newTaskDescription = document.querySelector("#new-task-description-input");

const formDelete = document.querySelector("#form-delete");
const taskToDelete = document.querySelector("#task-to-delete-input");


var todo_list = new ToDoList();

form.addEventListener("submit",event=>{
    event.preventDefault();
    todo_list.add(taskName.value, taskDescription.value);
    let task_list = ToDoListHtml(todo_list);
    taskListOutput.innerHTML =  task_list;
})

formEdit.addEventListener("submit",event=>{
    event.preventDefault();
    var task = new Task(newTask.value, newTaskDescription.value);
    todo_list.editTaskInTasksList(taskToEdit.value, task);
    let task_list = ToDoListHtml(todo_list);
    taskListOutput.innerHTML =  task_list;
});

formDelete.addEventListener("submit",event=>{
    event.preventDefault();
    todo_list.removeTask(taskToDelete.value);
    let task_list = ToDoListHtml(todo_list);
    taskListOutput.innerHTML =  task_list;
});

function introduceHtmlForTask(task, iteration){
    var htmlListElement = `
    <div class="accordion-item">
        <h2 class="accordion-header" id="heading` + iteration + `">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse` + iteration + `" aria-expanded="false" aria-controls="collapse` + iteration + `">`
                + task["Name"] +
            `</button>
        </h2>
        <div id="collapse` + iteration + `" class="accordion-collapse collapse" aria-labelledby="heading` + iteration + `" data-bs-parent="#accordionExample">
            <div class="accordion-body">`
                + task["Description"] + `
            </div>
        </div>
    </div>
    `;
    return htmlListElement;
}

function ToDoListHtml(todoList){
    let task_list = "";
    let iteration = 0;
    todoList.getToDoList().forEach(element => {
        task_list = task_list + (introduceHtmlForTask(element, iteration));
        iteration++;
    });
    return task_list;
}