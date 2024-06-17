
const express=require('express');
const app=express();
const port=3000;

let maintenance=true;


const maintainmiddleware=(req,res,next)=>
{
    if(maintenance){
        res.send("service unavailable")
    }
    else{
        next();
    }
}

app.use(maintainmiddleware);

app.get('/',(req,res)=>
{
    res.send('hello');
})





app.listen(port,()=>
{
    console.log("service running in port : "+port)
})

