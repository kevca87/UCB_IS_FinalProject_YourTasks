import {TasksList} from "./TasksList"
import {Task} from "./Task"
import fs from "fs";

describe("Interfaz", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html",)
      require("./index.js");
    });
  
    it("Al iniciar no hay nada en la lista de tareas", () => {
      const form = document.querySelector("#form");
      const task = document.querySelector("#task-input");
      const taskListOutput = document.querySelector("#final-list-output");
      expect(taskListOutput.innerHTML).toEqual("");
    });

    it("Insertar un elemento en la lista de tareas", () => {
        const form = document.querySelector("#form");
        const task = document.querySelector("#task-input");
        const taskListOutput = document.querySelector("#final-list-output");
        const button = document.querySelector("#button-submit");
        task.value = "Primera tarea";
        button.click();
        expect(taskListOutput.innerHTML).toEqual("<li>Primera tarea</li>");
    });

    it("Editar un elemento de la lista de tareas", () => {
      const taskToEdit = document.querySelector("#task-to-edit-input");
      const newTask = document.querySelector("#new-task-input");
      const taskListOutput = document.querySelector("#final-list-output");
      const editButton = document.querySelector("#edit-button-submit");
      taskToEdit.value = "Primera tarea";
      newTask.value = "Editar primera tarea";
      editButton.click();
      expect(taskListOutput.innerHTML).toEqual("<li>Editar primera tarea</li>");
    });

    it("Eliminar un elemento de la lista de tareas", () => {
      const taskToDelete = document.querySelector("#task-to-delete-input");
      const taskListOutput = document.querySelector("#final-list-output");
      const deleteButton = document.querySelector("#delete-button-submit");
      taskToDelete.value = "Editar primera tarea";
      deleteButton.click();
      expect(taskListOutput.innerHTML).toEqual("");
    });

    /*
    it("Al iniciar no hay nada en la lista de tareas", () => {
      const lista_elem = document.querySelector("#lista-tareas");
      expect(lista_elem.innerHTML).toEqual("");
    });*/
  
    afterEach(() => {
      //const lista_elem = document.querySelector("#lista-tareas");
      //lista_elem.innerHTML = "";
    });
  });