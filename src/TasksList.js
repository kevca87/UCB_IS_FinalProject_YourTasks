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

    //js no soporta sobrecarga de metodos, not change to add.
    addTask(newTask){
        var newTaskName = newTask.getName();
        let sentenceExpression = new RegExp('\\w+');
        var hasNotOnlySpaces = newTaskName.match(sentenceExpression) != null;
        var nameNotEmpty = newTaskName !="";
        var id = this.getNextId();
        if(hasNotOnlySpaces && nameNotEmpty)
        {
            newTask['id'] = id;
            this.tasksList.push(newTask);
        }
    }

    add(newTaskName, description,category,deadline,isComplete){
        let sentenceExpression = new RegExp('\\w+');
        var hasNotOnlySpaces = newTaskName.match(sentenceExpression) != null;
        var nameNotEmpty = newTaskName !="";
        var id = this.getNextId();
        if(hasNotOnlySpaces && nameNotEmpty)
        {
            var newTask = new Task(id,newTaskName,description,category,deadline,isComplete);
            newTask.extractTags();
            this.tasksList.push(newTask);
        }
    }

    addExistingTask(task){
        this.tasksList.push(task);
    }

    filterTasksBy(taskFieldToMatch,pattern){
        let patternRegExp = new RegExp(pattern, "i");
        var matchedTasks = new TasksList();
        for(var i=0; i<this.tasksList.length; i++)
	    {
            var taskField = this.tasksList[i][taskFieldToMatch];
		    if(patternRegExp.test(taskField)) {
                matchedTasks.addTask(this.tasksList[i]);
            }
	    }
	    return matchedTasks;
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

    searchByTag(tag){
        var matchedTasks = new TasksList();
        for(var i=0; i<this.tasksList.length; i++){
            var taskTags = this.tasksList[i].getTags();
            if(taskTags.includes(tag)) matchedTasks.addExistingTask(this.tasksList[i]);
        }
        return matchedTasks
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
    searchByCategory(category){
        var matchedTasks = new TasksList();
        for(var i = 0; i < this.tasksList.length; i++){
		    if(this.tasksList[i].getCategory() == category) matchedTasks.addExistingTask(this.tasksList[i]);
        }
        return matchedTasks;
    }
    CompleteTask(taskId,isChecked){
        /*var status;
        if(isChecked===true){
            status=true;
        }else if(isChecked===false){
            status=false;
        }*/
        let statusTask = new Task(taskId,null,null,null,null,isChecked);
        this.editTask(taskId,statusTask);
    }

    getTasksListIncompletes()
    {
        var tasksListIncompletes = [];
        tasksListIncompletes = this.tasksList.filter(function(Task){return Task.isComplete === false})
        return tasksListIncompletes;
    }
};
export {TasksList as TasksList}
