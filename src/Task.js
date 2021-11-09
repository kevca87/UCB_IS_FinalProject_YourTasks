class Task {
    constructor(name,description) {
        this.name = name;
        this.description = description
    }
    getName(){
        return this.name;
    }
    setTask(newName, newDescription){
        this.name = newName;
        this.description = newDescription;
    }
    getDescription(){
        return this.description;
    }

}

export {Task}