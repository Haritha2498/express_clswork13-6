const express=require('express');
const app=express();
const port=3000;

const path=require('path')


app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'ex8.html'))
})

app.listen(port,()=>
{
    console.log("server running on port : "+port);
})