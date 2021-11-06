class Task {
    constructor(name,description) {
        this.name = name;
        this.description = description
    }
    getName(){
        return this.name;
    }
    setTask(newName){
        return this.name = newName; 
    }
    getDescription(){
        return this.description;
    }

}

export {Task}