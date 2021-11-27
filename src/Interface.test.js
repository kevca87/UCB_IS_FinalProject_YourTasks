import {TasksList} from "./TasksList"
import {Task} from "./Task"
import fs from "fs";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
//import { Modal } from 'bootstrap'

//Diego: hice estos tests para probar la busqueda en cuanto a descripcion, si les da conflictos al cambiar la interfaz pueden modificarlo o borrarlo 👍👍

function createTasks(numberOfTasks){
  const taskName = document.getElementById('task-name-input');
  const taskDescription = document.getElementById('task-description-input');
  const submitTask = document.getElementById('btnSaveTask');
  for(var i=0; i < numberOfTasks; i++){
    taskName.value = "Entrada " + i;
    taskDescription.value = "Descripcion " + i;
    submitTask.click();
  }
  taskName.value = "Entrada " + numberOfTasks;
  taskDescription.value = "nodo " + numberOfTasks;
  submitTask.click();
}

/*
describe("Interfaz 1", () => {
  
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html","utf-8");
    require("./index.js");
  });
  it("Testear interfaz al iniciar la aplicacion", () => {
    var logo = document.getElementById('logo');
    expect(logo.textContent).toEqual('Your Tasks');
  });
  afterEach(() => {
     
  });
});
*/

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

describe("Al presionar 'Create task', rellenar el campo 'Task name' y dar click en 'Save' se debe: ", () => {
  
  beforeAll(() => {
    /*const options = {
      resources: "usable",
      runScripts: "dangerously",
    }
    const dom = new JSDOM(fs.readFileSync("index.html", "utf8"), options).window.document;*/
    document.body.innerHTML = fs.readFileSync("index.html","utf-8");
    require("./index.js");
  });
  it("Agregar una tarea en la lista de tareas.", () => {
    var task1 = {"name":"Entrada 1","description":"description 1"};
    createTask(task1);
    
    var firstTaskAdded = document.getElementById('accordion-item-1').querySelector('.accordion-button').textContent.trim()
    expect(firstTaskAdded).toEqual('Entrada 1');

    const logo = document.getElementById('logo');
    console.log('logo after change: ',logo.textContent);
    
  });
  /*
  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");
    lista_elem.innerHTML = "";
  });
  */
});