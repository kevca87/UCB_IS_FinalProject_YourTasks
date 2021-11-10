class Task {
    constructor(id,name,description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    getName(){
        return this.name;
    }
    setTask(newName, newDescription){
        this.name = newName;
        this.description = newDescription;
    }
    set(newTask){
        this.name = newTask.name ?? this.name;
        this.description = newTask.description ?? this.description;
    }
    getDescription(){
        return this.description;
    }
    hasSameId(id)
    {
        return this.id == id;
    }

}

export {Task}