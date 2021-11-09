import {ToDoList} from "./ToDoList"
import {Task} from "./Task"

/*var toDoList = new ToDoList();
toDoList.add("Entrada1");
console.log(toDoList.getToDoList());*/

let task;

describe("Test", () => {
  var toDoList = new ToDoList();
  it("Deberia devolver un array de lenght 0", () => {
    expect(toDoList.getToDoList()).toEqual([]);
  });
  it("Deberia agregar el elemento", () => {
    toDoList.add("Entrada1");
    expect(toDoList.getToDoList()).toEqual(["Entrada1"]);
  });
  it("Deberia agregar otro elemento conservando los anteriores", () => {
    toDoList.add("Entrada2");
    expect(toDoList.getToDoList()).toEqual(["Entrada1","Entrada2"]);
  });
  it("Deberia agregar otro elemento conservando los anteriores", () => {
    expect(toDoList.getToDoList().length).toEqual(2);
  });
  /*it("No deberia agregar ningun  elemento", () => {
    toDoList.add("");
    expect(toDoList.getToDoList()).toEqual(["Entrada1","Entrada2"]);
  });
  it("No deberia agregar ningun  elemento (espacios)", () => {
    toDoList.add(" ");
    toDoList.add("  ");
    expect(toDoList.getToDoList()).toEqual(["Entrada1","Entrada2"]);
  });*/
  
});

describe("Edit task", () => {
  task = new Task("Entada1");
  it("Deberia devolver undefined", () => {
    expect(task.setTask()).toEqual();
  });
  it("Deberia devolver Entrada2", () => {
    expect(task.setTask("Entada2")).toEqual("Entada2");
  });
});

describe("Search task from a list", () => {
  var toDoList = new ToDoList()
  toDoList.add("Entrada1");
  toDoList.add("Entrada2");
  it("Deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask("Entrada1");
    expect(toDoList.getToDoList()).toEqual(["Entrada2"]);
  });
  it("Deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask("");
    expect(toDoList.getToDoList()).toEqual(["Entrada2"]);
  });
});

describe("Search task from a list", () => {
  var toDoList = new ToDoList()
  toDoList.add("Entrada1");
  toDoList.add("Entrada2");
  toDoList.add("Entrada3");
  it("Deberia devolver undefined", () => {
    expect(toDoList.searchByName()).toEqual();
  });
  it("Deberia devolver Entrada1", () => {
    task = toDoList.searchByName("Entrada1")
    expect(task.getName()).toEqual("Entrada1");
  });
  it("Deberia devolver Entrada3", () => {
    task = toDoList.searchByName("Entrada3")
    expect(task.getName()).toEqual("Entrada3");
   });
});

describe("Add description to the tasks", () => {
  var toDoList = new ToDoList()
  toDoList.add("Entrada1", "desc 1");
  toDoList.add("Entrada2", "desc 2");
  toDoList.add("Entrada3", "");
  toDoList.add("Entrada4", "desc 4");
  it("Ingresar una tarea que tenga una descripcion", () => {
    expect(toDoList.searchByName("Entrada1").getDescription()).toEqual("desc 1");
  });
  it("Se debe perimitir añadir una tarea sin descripcion", () => {
    expect(toDoList.searchByName("Entrada3").getDescription()).toEqual("");
  });
  it("Ingresar una tarea que tenga una descripcion", () => {
    expect(toDoList.searchByName("Entrada4").getDescription()).toEqual("desc 4");
  });

  describe("Edit task from list.", () =>{
    var toDoList = new ToDoList()
    toDoList.add("Entrada1", "desc1");
    toDoList.add("Entrada2", "desc2");
    toDoList.add("Entrada3", "desc3");
    it("Deberia devolver la lista sin ninguna modificacion", () => {
      toDoList.editTaskInTasksList();
      expect(toDoList.getToDoList()).toEqual(["Entrada1", "Entrada2", "Entrada3"]);
    });
  });
});