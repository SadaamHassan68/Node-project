const { log } = require('console');
const http = require('http');
const { json } = require('stream/consumers');
const PORT =3000;
const HOSTNAME='localhost';

const server=http.createServer( (req,res)=>{
    if(req.url.startsWith('./task')){
        //Todo:Implement this method
    }
    else{
        res.writable(404,'not found',{'count-type':'application/js'})
        res.end(json.stringify({
            message:'PAGE '
        }))
    }
});

server.listen(PORT,HOSTNAME,()=>{
    console.log(`server running at ${PORT}`);
    


})