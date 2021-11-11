class Task {
    constructor(id,name,description,category, deadline) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.deadline=deadline;
    }
    getName(){
        return this.name;
    }
    setTask(newName, newDescription,newDeadline){
        this.name = newName;
        this.description = newDescription;
        this.deadline=newDeadline;
    }
    set(newTask){
        this.name = newTask.name ?? this.name;
        this.description = newTask.description ?? this.description;
        this.deadline = newTask.deadline;
        this.category = newTask.category;
    }
    getDescription(){
        return this.description;
    }
    hasSameId(id)
    {
        return this.id == id;
    }
    getDeadline(){
        return this.deadline;
    }

}

export {Task}