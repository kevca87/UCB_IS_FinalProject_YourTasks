import {TasksList} from "./TasksList"
import {Task} from "./Task"
import fs from "fs";

describe("Interfaz", () => {
    /*beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html",)
      require("./index.js");
    });*/
  
    it("Testear una interfaz intermedia", () => {
      expect(1).toEqual(1);
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