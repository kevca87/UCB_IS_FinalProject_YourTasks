import { Task } from './Task.js';
import { TasksList } from './TasksList.js';

const taskListOutput = document.querySelector("#final-list-output");


const modalTasks = new bootstrap.Modal(document.getElementById('modalTasks'));
const formTasks = document.getElementById('formTasks');
const taskName = document.getElementById('task-name-input');
const taskDescription = document.getElementById('task-description-input');
const taskDeadline = document.getElementById('task-deadline-input');
/*Editar*/
const formEdit = document.querySelector("#form-edit");
const taskToEdit = document.querySelector("#task-to-edit-input");
const newTask = document.querySelector("#new-task-input");
const newTaskDescription = document.querySelector("#new-task-description-input");
/*eliminar*/
const formDelete = document.querySelector("#form-delete");
const taskToDelete = document.querySelector("#task-to-delete-input");


var tasksList = new TasksList();

btnCreateTask.addEventListener('click', () => {
    taskName.value = ''
    taskDescription.value = ''
    taskDeadline.value=''
    modalTasks.show()
})

formTasks.addEventListener("submit",event=>{
    event.preventDefault();
    tasksList.add(taskName.value, taskDescription.value);
    let task_list = getTasksListHtml(tasksList);
    taskListOutput.innerHTML =  task_list;
    modalTasks.hide()
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
        <h2 class="accordion-header" id="heading${iteration}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${iteration}" aria-expanded="false" aria-controls="collapse${iteration}">${task["name"]}</button>
        </h2>
        <div id="collapse${iteration}" class="accordion-collapse collapse" aria-labelledby="heading${iteration}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="description-task">
                    <p>${task["description"]}</p>
                </div>
                <div>
                    <button type="button" class="btn btn-success py-0">Edit</button>
                    <button type="button" class="btn btn-danger py-0 px-1">Delete</button>
                </div>
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