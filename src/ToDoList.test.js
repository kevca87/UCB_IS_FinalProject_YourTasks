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
    console.log(toDoList.getToDoList())
    expect(toDoList.getToDoList()).toEqual(["Entrada1","Entrada2"]);
  });
  it("Deberia agregar otro elemento conservando los anteriores", () => {
    expect(toDoList.getToDoList().length).toEqual(2);
  });
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