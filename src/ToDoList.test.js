import {ToDoList} from "./ToDoList.js"

/*var toDoList = new ToDoList();
toDoList.add("Entrada1");
console.log(toDoList.getToDoList());*/

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
    console.log(toDoList.getToDoList())
    expect(toDoList.getToDoList()).toEqual(["Entrada1","Entrada2"]);
  });
  it("Deberia agregar otro elemento conservando los anteriores", () => {
    expect(toDoList.getToDoList().length).toEqual(2);
  });
  it("Deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask("Entrada1");
    expect(toDoList.getToDoList()).toEqual(["Entrada2"]);
  });
  it("Deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask("");
    expect(toDoList.getToDoList()).toEqual(["Entrada2"]);
  });
});