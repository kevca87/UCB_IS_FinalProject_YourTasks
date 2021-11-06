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
        let wordsExpression = new RegExp('\\w+');
        var hasNotOnlySpaces = newTaskName.match(wordsExpression) != null;
        if(newTaskName !="" && hasNotOnlySpaces)
        {
            var newTask = new Task(newTaskName);
            this.tasksList.push(newTask);
        }
        //['entra1','entra2','entra2'] - ['entra1','entra3','entra2']
    }

    searchByName(name){
	    for(var i=0; i<this.tasksList.length; i++)
	    {
		    if(this.tasksList[i].getName() == name) return this.tasksList[i];
	    }
	    return;
    }

    removeTask(taskToDelete){
        for(var i =0; i < this.tasksList.length; i++) {
            if(this.tasksList[i].getName() === taskToDelete) {
               this.tasksList.splice(i, 1);
            }
        }
    }
};
export {ToDoList}
