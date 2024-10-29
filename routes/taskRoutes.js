const { getTasks ,createTask,upsateTasks,deleteTask } = require("../controllers/taskControllers")

const taskRoutes = (req,res)=>{
    if(req.method ==='GET'){
        getTasks(req,res)
    }
    else if (req.method ==='POST'){
        createTask(req,res)

    }
    else if(req.method ==='PATCH'){
        upsateTasks(req,res)
    }
    else if(req.method ==='DELETE'){
       deleteTask(req.res)
    }
    else
    {
        res.writeHead(404,'Not found',{'content-type':'application/js'})
        res.end(json.stringify({
            message:'PAGE not found'
        }))
    }


}
module.exports =taskRoutes