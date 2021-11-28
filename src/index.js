import { Task } from './Task.js';
import { TasksList } from './TasksList.js';
const bootstrap = require('bootstrap');
const modalTasks = new bootstrap.Modal(document.getElementById('modalTasks'));


const taskListOutput = document.querySelector("#final-list-output");

//var wrapper = document.getElementById('final-list-output');
var wrapper = document.querySelector('#final-list-output');
//console.log('wrapper: ',wrapper);

const formTasks = document.getElementById('formTasks');
const taskName = document.getElementById('task-name-input');
const taskDescription = document.getElementById('task-description-input');
const taskDeadline = document.getElementById('task-deadline-input');
const taskCategory = document.getElementById('category-select');
const logo = document.getElementById('logo');
//const btnCreateTask = document.getElementById('btnCreateTask');
//console.log('create: ',btnCreateTask)

const searchInput = document.getElementById('search-input');
const taskTags = document.getElementById('task-tags-input');
//console.log('search: ' ,searchInput)

const searchForm = document.getElementById('search-form');
const categoryInput = document.getElementById('category-input');

var tasksList = new TasksList();

let option="";

//Open the modal for creating a task
btnCreateTask.addEventListener('click', () => {
    taskName.value = ''
    taskDescription.value = ''
    taskDeadline.value=''
    taskTags.value=''
    modalTasks.show()
    option = "create";
})

//Search task by descriptions or tags
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(searchInput.value != ""){
        if(searchInput.value.startsWith('#')){
            var matchingTasks = tasksList.searchByTag(searchInput.value);
        }
        else{
            var matchingTasks = tasksList.searchByDescription(searchInput.value);
        }
        console.log(searchInput.value);
        updateHtml(matchingTasks);
        if(matchingTasks.getTasksList().length == 0) taskListOutput.innerHTML =  "No se encontraron coincidencias";
    }
    else updateHtml(tasksList);
})

let taskId;

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
    return;
    }
    let buttonId = event.target.id;

    let regExpEdit = /-edit-/;
    let regExpDelete = /-del-/;
    var isEdit = regExpEdit.test(buttonId)
    var isDelete = regExpDelete.test(buttonId)
    if(isEdit){
        taskId = buttonId.split(regExpEdit)[1];
        var task = tasksList.getTask(taskId);
        taskName.value = task.getName();
        taskDescription.value = task.getDescription();
        taskDeadline.value=task.getDeadline();
        taskCategory.value = task["category"];
        option = "edit";
        modalTasks.show();
    }
    else if(isDelete){
        taskId= parseInt(buttonId.split(regExpDelete)[1]);
        tasksList.removeTask(taskId);
        updateHtml(tasksList);
    }
})

formTasks.addEventListener("submit",event=>{
    event.preventDefault();
    if(option=="create"){
        var task = new Task(null,taskName.value,taskDescription.value,taskCategory.value,taskDeadline.value);
        task.extractTags();
        task.addTags(taskTags.value);
        tasksList.addTask(task);
        //tasksList.add(taskName.value, taskDescription.value,taskCategory.value,taskDeadline.value);
    }
    else if(option == "edit"){
        var editedTask = new Task(null,taskName.value, taskDescription.value,taskCategory.value,taskDeadline.value)
        editedTask.extractTags();
        editedTask.addTags(taskTags.value);
        tasksList.editTask(taskId, editedTask);
        console.log(tasksList);
    }
    updateHtml(tasksList);
    modalTasks.hide();
    logo.textContent = "Whats up";
})



function updateHtml(taskListToShow){
    let taskListHtml = getTasksListHtml(taskListToShow);
    taskListOutput.innerHTML =  taskListHtml;
}

function introduceHtmlForTask(task, iteration){
    wrapper = document.getElementById('final-list-output');
    var htmlListElement = `
    <div id="accordion-item-`+task["id"]+`" class="accordion-item">
        <input type="checkbox" name="" id="heading` + iteration + `" class="hidden-box">
        <label for="heading` + iteration + `" class="accordion-header check-label" id="heading` + iteration + `">       
            <button class="accordion-button check-label-text collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse` + iteration + `" aria-expanded="false" aria-controls="collapse` + iteration + `">
                `+ task["name"] +`
            </button>
        </label>
       
        <div id="collapse` + iteration + `" class="accordion-collapse collapse" aria-labelledby="heading` + iteration + `" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="task-description">`
                    + task["description"] + `
                </div>
                <div class="task-description">
                    Category: `+ task["category"] + `
                </div>
                <div class="task-description">
                    Tags: ` + task.getTagsStr() + `
                </div>
                <div class="task-deadline">
                    <strong>Deadline:</strong>` + task["deadline"] + `
                </div>
                <div class="btnsTasks">
                    <button id="bttn-edit-`+task["id"]+`" type="button" class="btn-edit btn btn-success py-0">Edit</button>
                    <button id="bttn-del-`+task["id"]+`" type="button" class="btn-del btn btn-danger py-0 px-1">Delete</button>
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
