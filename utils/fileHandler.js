//this is file handler
const fs=require('fs');
exports.writeTasksToFile=(data)=>{
    
    fs.writeFileSync('./../data/tasks.json',data)
    return data;
}
exports.readTaskToFile =()=>{
    if(fs.existsSync('./../data/tasks.json')){
        this.writeTasksToFile([])

    }
    const data=fs.readFileSync(('./../data/tasks.json'))
        return JSON.parse(data);

    
   
}
