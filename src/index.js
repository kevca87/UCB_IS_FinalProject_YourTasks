import { Task } from './Task.js';
import { TasksList } from './TasksList.js';


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


var tasksList = new TasksList();

form.addEventListener("submit",event=>{
    event.preventDefault();
    tasksList.add(taskName.value, taskDescription.value);
    let task_list = getTasksListHtml(tasksList);
    taskListOutput.innerHTML =  task_list;
})

formEdit.addEventListener("submit",event=>{
    event.preventDefault();
    var task = new Task(newTask.value, newTaskDescription.value);
    tasksList.editTaskInTasksList(taskToEdit.value, task);
    let task_list = getTasksListHtml(tasksList);
    taskListOutput.innerHTML =  task_list;
});

formDelete.addEventListener("submit",event=>{
    event.preventDefault();
    tasksList.removeTask(taskToDelete.value);
    let task_list = getTasksListHtml(tasksList);
    taskListOutput.innerHTML =  task_list;
});

function introduceHtmlForTask(task, iteration){
    var htmlListElement = `
    <div class="accordion-item">
        <h2 class="accordion-header" id="heading` + iteration + `">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse` + iteration + `" aria-expanded="false" aria-controls="collapse` + iteration + `">`
                + task["name"] +
            `</button>
        </h2>
        <div id="collapse` + iteration + `" class="accordion-collapse collapse" aria-labelledby="heading` + iteration + `" data-bs-parent="#accordionExample">
            <div class="accordion-body">`
                + task["description"] + `
            </div>
        </div>
    </div>
    `;
    return htmlListElement;
}

function getTasksListHtml(tasksList){
    let taskListHtml = "";
    let iteration = 0;
    tasksList.getTasksList().forEach(task => {
        taskListHtml = taskListHtml + (introduceHtmlForTask(task, iteration));
        iteration++;
    });
    return taskListHtml;
}