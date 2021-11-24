function getTags(text){
    var tagStructure = /#(\w)+\b/g;
    var tags = text.match(tagStructure) ?? [];
    tags = tags.filter((value,index)=>tags.indexOf(value)===index)
    return tags;
}

class Task {
    constructor(id,name,description,category, deadline, isComplete) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.deadline=deadline;
        this.isComplete = isComplete ?? false;
        this.tags = []
        
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
        this.isComplete = newTask.isComplete;
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
    getTags(){
        return this.tags;
    }
    extractTags(){
        var isDescriptionSet = this.description != undefined || this.description != null;
        if(isDescriptionSet){
            this.tags = getTags(this.description);
        }
        return this.tags;
    }
    getTagsStr(){
        return this.tags.join(' ')
    }
    getCategory(){
        return this.category;
    }
}

export {Task,getTags}