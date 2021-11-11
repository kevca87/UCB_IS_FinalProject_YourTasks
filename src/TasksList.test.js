import {TasksList} from "./TasksList"
import {Task} from "./Task"

/*var toDoList = new ToDoList();
toDoList.add("Entrada1");
console.log(toDoList.getTasksNamList());*/

describe("Test", () => {
  var toDoList = new TasksList();
  it("Deberia devolver un array de lenght 0", () => {
    expect(toDoList.getTasksNamesList()).toEqual([]);
  });
  it("Deberia agregar el elemento", () => {
    toDoList.add("Entrada1");
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada1"]);
  });
  it("Deberia agregar otro elemento conservando los anteriores", () => {
    toDoList.add("Entrada2");
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada1","Entrada2"]);
  });
  it("Deberia agregar otro elemento conservando los anteriores", () => {
    expect(toDoList.getTasksNamesList().length).toEqual(2);
  });
  it("No deberia agregar ningun  elemento", () => {
    toDoList.add("");
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada1","Entrada2"]);
  });
  it("No deberia agregar ningun  elemento (espacios)", () => {
    toDoList.add(" ");
    toDoList.add("  ");
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada1","Entrada2"]);
  });
  
});

describe("Edit task", () => {
  var task = new Task("Entada1");
  it("Deberia devolver undefined", () => {
    expect(task.setTask()).toEqual();
  });
  it("Deberia devolver Entrada2", () => {
    task.setTask("Entada2")
    expect(task.getName()).toEqual("Entada2");
  });
});

describe("Remove a task form the list", () => {
  var toDoList = new TasksList()
  toDoList.add("Entrada1");
  toDoList.add("Entrada2");
  toDoList.add("Entrada3");
  toDoList.add("Entrada4");
  it("Deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask(1);
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada2","Entrada3","Entrada4"]);
  });
  it("No deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask("");
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada2","Entrada3","Entrada4"]);
  });
  it("Deberia eliminar un elemento de la lista", () => {
    toDoList.removeTask(3);
    expect(toDoList.getTasksNamesList()).toEqual(["Entrada2","Entrada4"]);
  });
});

describe("Search task from a list", () => {
  var toDoList = new TasksList()
  toDoList.add("Entrada1");
  toDoList.add("Entrada2");
  toDoList.add("Entrada3");
  var task;
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

describe("Search task from a list by desciption", () => {
  var toDoList = new TasksList()
  toDoList.add("Entrada1", "Descripcion 1");
  toDoList.add("Entrada2", "Descripcion 2");
  toDoList.add("Entrada3", "Descripcion 3");
  var task;
  it("Deberia devolver una lista vacia", () => {
    expect(toDoList.searchByDescription("no coincide")).toEqual([]);
  });
  it("Deberia devolver Entrada1", () => {
    task = toDoList.searchByDescription("Descripcion 1")
    expect(task[0].getName()).toEqual("Entrada1");
  });
  it("Deberia devolver Entrada3", () => {
    task = toDoList.searchByDescription("Descripcion 3")
    expect(task[0].getName()).toEqual("Entrada3");
   });
   it("Deberia devolver Entrada1, Entrada2, Entrada3", () => {
    task = toDoList.searchByDescription("Descr")
    var taskNamesLists = task.map(x =>  x.getName());
    expect(taskNamesLists).toEqual(["Entrada1", "Entrada2", "Entrada3"]);;
   });
   it("Deberia devolver Entrada1, Entrada2, Entrada3 no siendo case sensitive", () => {
    task = toDoList.searchByDescription("descr")
    var taskNamesLists = task.map(x =>  x.getName());
    expect(taskNamesLists).toEqual(["Entrada1", "Entrada2", "Entrada3"]);;
   });
});


describe("Add description to the tasks", () => {
  var toDoList = new TasksList()
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
  });

describe("Edit task from list.", () =>{
    var toDoList = new TasksList()
    toDoList.add("Entrada1", "desc1");
    toDoList.add("Entrada2", "desc2");
    toDoList.add("Entrada3", "desc3");
    var task;
    it("Deberia devolver la lista sin ninguna modificacion", () => {
      toDoList.editTask(5);
      expect(toDoList.getTasksNamesList()).toEqual(["Entrada1", "Entrada2", "Entrada3"]);
    });
    it("Deberia editar la tarea Entrada1 con los datos de la tarea task.", () => {
      task = new Task(null,"Editar entrada1", "Editar des1");
      toDoList.editTask(1, task);
      expect(toDoList.getTasksNamesList()).toEqual(["Editar entrada1", "Entrada2", "Entrada3"]);
    });
    it("Deberia editar la tarea Entrada3 con los datos de la tarea task.", () => {
      task = new Task(null,"Editar entrada3", "Editar des3");
      toDoList.editTask(3, task)
      expect(toDoList.getTasksNamesList()).toEqual(["Editar entrada1", "Entrada2", "Editar entrada3"]);
    });
    it("Deberia editar la tarea Entrada3 con los datos de la tarea task.", () => {
      task = new Task(null,"Entrada3", null);
      toDoList.editTask(3, task)
      expect(toDoList.getTasksNamesList()).toEqual(["Editar entrada1", "Entrada2", "Entrada3"]);
    });
    it("Deberia editar la tarea Entrada3 con los datos de la tarea task.", () => {
      task = new Task(null,null, null);
      toDoList.editTask(3, task)
      expect(toDoList.getTasksNamesList()).toEqual(["Editar entrada1", "Entrada2", "Entrada3"]);
    });
});

describe("Debe devolver una lista de objetos (Task) con las task creadas", () => {
  var tasksList = new TasksList();
  var task1Name = "Task1";
  var task1Desc = "Description Task1";
  var task2Name = "Task2";
  var task2Desc = "Description Task2";
  it("Añadir tarea y descripción", () => {
    tasksList.add(task1Name,task1Desc);
    expect(tasksList.getTasksList()).toEqual([new Task(1,task1Name,task1Desc)]);
  });
  it("Añadir tarea y descripción sobre tareas previas", () => {
    tasksList.add(task2Name,task2Desc);
    expect(tasksList.getTasksList()).toEqual([new Task(1,task1Name,task1Desc), new Task(2,task2Name,task2Desc)]);
  });
});

describe("Debe devolver una lista con las task creadas", () => {
  var tasksList = new TasksList();
  var task1Name = "Task1";
  var task1Desc = "Description Task1";
  tasksList.add(task1Name,task1Desc);
  it("Añadir tarea y descripción", () => {
    expect(tasksList.getTasksList()).toEqual([new Task(1,task1Name,task1Desc)]);
  });
});