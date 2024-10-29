const {IncomingForm }=require('formidable')
const { readTaskToFile, writeTasksToFile } = require("../utils/fileHandler")
//this GetTask

exports.getTasks=(req,res)=>{
    const tasks=readTaskToFile();
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(tasks))

}
//this is CreateTask
exports.createTask=(req,res)=>{
    const form=new IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.writeHead(400,{'content-type':'application/json'})
            res.end(JSON.stringify({
                message:'error parsing form'
            }))
            return;
            
        }
        const tasks=readTasksFromFile()
        const NewTasks={
            id: Date.now(),
            title:fields.title,
            description:fields?.description || '',
            status:fields?.status || 'pending',
            Image:fields.Image? `/uploads/${files.Image.name}`: null,

        }
        tasks.push(NewTasks);
        
        writeTasksToFile(tasks);
         if(files.Image){
            copyFileSync(files.Image.path,path.join(__dirname,'../uploads',  files.Image.name));
            res.end(JSON.stringify(NewTasks))

         }
    })

}
//this updateTask
exports.updateTask=(req,res)=>{
    res.end(JSON.stringify({
        message:'Not Yet implemented'
    }))
}
//this DeleteTask
exports.deleteTask=(req,res)=>{
    res.end(JSON.stringify({
        message:'Not Yet implemented'
    }))

}


