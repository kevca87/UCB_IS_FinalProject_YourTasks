import {Task} from "./Task.js"

class TasksList {

    constructor() {
      this.tasksList = [];
    }

    getTasksList()
    {
        return this.tasksList;
    }

    getTasksNamesList() {
        //var taskNamesLists = this.tasksList.map(x => {return x.getName();});
        var taskNamesLists = [];
        for(var i=0; i<this.tasksList.length; i=i+1)
        {
            taskNamesLists.push(this.tasksList[i].getName());
        }
        return taskNamesLists;
    }

    getNextId(){
        let nextId = 1;
        var listLenght = this.tasksList.length;
        if (listLenght > 0){
            nextId = this.tasksList[listLenght-1]["id"] + 1;
        }
        return nextId;
    }

    add(newTaskName, description,category,deadline){
        let sentenceExpression = new RegExp('\\w+');
        var hasNotOnlySpaces = newTaskName.match(sentenceExpression) != null;
        var nameNotEmpty = newTaskName !="";
        var id = this.getNextId();
        if(hasNotOnlySpaces && nameNotEmpty)
        {
            var newTask = new Task(id,newTaskName,description,category,deadline);
            this.tasksList.push(newTask);
        }
    }

    searchByName(name){
	    for(var i=0; i<this.tasksList.length; i++)
	    {
		    if(this.tasksList[i].getName() == name) return this.tasksList[i];
	    }
	    return;
    }

    removeTask(taskId){
        for(var i =0; i < this.tasksList.length; i++) {
            if(this.tasksList[i].hasSameId(taskId)) {
               this.tasksList.splice(i, 1);
            }
        }
    }

    getTask(taskId)
    {
        var searchedTask = null;
        for(var i=0; i<this.tasksList.length; i++)
	    {
            if(this.tasksList[i].hasSameId(taskId))
            {
                searchedTask = this.tasksList[i];
            }
	    }
        return searchedTask;
    }


    editTask(taskId,modifiedTask){
        var taskToEdit = this.getTask(taskId);
        if (taskToEdit!=null)
        {
            taskToEdit.set(modifiedTask);
        }
    }
};
export {TasksList as TasksList}
