import {TasksList} from "./TasksList"
import {Task} from "./Task"
import fs from "fs";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function createTask(inputTask){
  const taskName = document.getElementById('task-name-input');
  const taskDescription = document.getElementById('task-description-input');
  const btnCreateTask = document.getElementById('btnCreateTask');
  const btnSave = document.getElementById('btnSave');

  btnCreateTask.click();
  taskName.value = inputTask.name;
  taskDescription.value = inputTask.description;

  btnSave.click();
}

document.body.innerHTML = fs.readFileSync("index.html","utf-8");
require("./index.js");

describe("Al arrancar la aplicacion debe: ", () => {  
  beforeAll(() => {});
  it("Mostrarse el logo de la aplicacion", () => {
    var logo = document.getElementById('logo');
    expect(logo.textContent).toEqual('Your Tasks');
  });
  afterEach(() => {});
});

describe("Al presionar 'Create task', rellenar el campo 'Task name' y dar click en 'Save' se debe: ", () => {
  
  it("Agregar una tarea en la lista de tareas.", () => {
    
    var task1 = {"name":"Entrada 1","description":"description 1"};
    createTask(task1);
    
    var firstTaskAdded = document.getElementById('accordion-item-1').querySelector('.accordion-button').textContent.trim()
    expect(firstTaskAdded).toEqual('Entrada 1');
    
  });
  it("Agregar una segunda tarea en la lista de tareas.", () => {
    
    var task2 = {"name":"Entrada 2","description":"description 2"};
    createTask(task2);
    
    var firstTaskAdded = document.querySelectorAll('.accordion-button')
    expect(firstTaskAdded.length).toEqual(2);
    
  });
  it("No agregar nada, si no el campo de name contiene espacios o esta vacio.", () => {
    
    var task = {"name":"","description":"description 2"};
    createTask(task);

    var task = {"name":"    ","description":"description 2"};
    createTask(task);
    
    var tasks = document.querySelectorAll('.accordion-button')
    expect(tasks.length).toEqual(2);
    
  });
});


function expandTaskAccordion(taskAccordionId){
  document.getElementById('accordion-item-'+taskAccordionId).click();
  document.getElementById('bttn-edit-'+taskAccordionId).click();
}

describe("Al presionar 'Edit' se debe: ", () => {
  
  it("Recuperar los datos correspondientes a esa tarea y mostrarlos", () => {
    expandTaskAccordion(1);
    var taskNameRecovered = document.getElementById('task-name-input').value;
    expect(taskNameRecovered).toEqual('Entrada 1');
  });
  it("Poder editar los datos recuperados de una tarea especifica", () => {
    document.getElementById('task-name-input').value = 'Entrada 87';
    const btnSave = document.getElementById('btnSave');
    btnSave.click();
    
    var taskUpdated = document.getElementById('accordion-item-1').querySelector('.accordion-button').textContent.trim()
    expect(taskUpdated).toEqual('Entrada 87');
  });
});

describe("Al presionar 'Delete' se debe: ", () => {
  
  it("Eliminar una tarea especifica", () => {
    expandTaskAccordion(1);
    const bttnDelete = document.getElementById('bttn-del-1');
    
    bttnDelete.click();

    var tasks = document.querySelectorAll('.accordion-button')
    expect(tasks.length).toEqual(1);
  });
  /*
  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");
    lista_elem.innerHTML = "";
  });
  */
});