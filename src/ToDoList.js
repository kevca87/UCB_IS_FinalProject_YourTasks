import {Task} from "./Task.js"

class ToDoList {
    constructor() {
      this.tasksList = [];
    }
  
    getToDoList() {
        //var taskNamesLists = this.tasksList.map(x => {return x.getName();});
        var taskNamesLists = [];
        for(var i=0; i<this.tasksList.length; i=i+1)
        {
            taskNamesLists.push(this.tasksList[i].getName());
        }
        return taskNamesLists;
    }

    add(newTaskName,descript){
        var newTask = new Task(newTaskName);
        this.tasksList.push(newTask);
        //['entra1','entra2','entra2'] - ['entra1','entra3','entra2']
    }
};
export {ToDoList}