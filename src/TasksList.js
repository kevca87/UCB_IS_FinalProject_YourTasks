import {Task,getTags} from "./Task.js"

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
            newTask.extractTags();
            this.tasksList.push(newTask);
        }
    }

    addExistingTask(task){
        this.tasksList.push(task);
    }

    searchByName(name){
	    for(var i=0; i<this.tasksList.length; i++)
	    {
		    if(this.tasksList[i].getName() == name) return this.tasksList[i];
	    }
	    return;
    }
    searchByDescription(description){
        let matchDescription = new RegExp(description, "i");
        var matchedTasks = new TasksList();
        for(var i=0; i<this.tasksList.length; i++)
	    {
            var taskDescription = this.tasksList[i].getDescription();
		    if(matchDescription.test(taskDescription)) matchedTasks.addExistingTask(this.tasksList[i]);
	    }
	    return matchedTasks;
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
            taskToEdit.extractTags();
        }
    }
    searchByCategory(category){
        var matchedTasks = new TasksList();
        var i = 0;
        let matchCategory = new RegExp(category, "i");
        while(i < this.tasksList.length){
            var taskCategory = this.tasksList[i].getCategory();
		    if(matchCategory.test(taskCategory)) matchedTasks.addExistingTask(this.tasksList[i]);
            i++;
        }
        return matchedTasks;
    }
};
export {TasksList as TasksList}
