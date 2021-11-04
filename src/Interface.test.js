import {ToDoList} from "./ToDoList"
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