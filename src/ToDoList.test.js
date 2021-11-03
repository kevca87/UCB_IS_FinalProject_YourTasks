import {ToDoList} from "./ToDoList"
import {Task} from "./Task"

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
});

describe("Edit", () => {
  var task = new Task("Entada1");
  it("Deberia devolver un array de lenght 0", () => {
    expect(task.setTask("")).toEqual("");
  });
  it("Deberia devolver un array de lenght 0", () => {
    expect(task.setTask("Entada2")).toEqual("Entada2");
  });
});