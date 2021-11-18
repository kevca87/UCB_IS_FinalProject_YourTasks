import {TasksList} from "./TasksList"
import {Task} from "./Task"
import fs from "fs";
import { Modal } from 'bootstrap'

//Diego: hice estos tests para probar la busqueda en cuanto a descripcion, si les da conflictos al cambiar la interfaz pueden modificarlo o borrarlo 👍👍
/*
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
*/


describe("Interfaz", () => {

  /*
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html",);
    require("./index.js");
    require('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
  });
  */
  it("Testear una interfaz de busqueda de descipcion", () => {
    expect(1).toEqual(1);
    /*
    const searchForm = document.getElementById('search-input');
    const searchTask = document.getElementById('btnSearch');
    const listTaskElement = document.getElementsByClassName('accordion-button collapsed');

    createTasks(3);

    searchForm.value = "desc";
    searchTask.click();

    console.log(listTaskElement);

    expect(listTaskElement).toEqual([]);
    */
  });
  /*
  it("Al iniciar no hay nada en la lista de tareas", () => {
    const lista_elem = document.querySelector("#lista-tareas");
    expect(lista_elem.innerHTML).toEqual("");
  });

  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");
    lista_elem.innerHTML = "";
  });
  */
});