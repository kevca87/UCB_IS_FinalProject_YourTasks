class Task {
    constructor(name) {

        this.name = name;
    }
    getName(){
        return this.name;
    }
    setTask(newName){
        return this.name = newName; 
    }
}

export {Task}