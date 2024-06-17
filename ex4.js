const express=require('express');
const app=express();
const router=express.Router();
const PORT=3000;


const middlew=(req,res,next)=>{
    console.log("routing");
    next();
}
app.use('/',middlew)

app.get('/',(req,res)=>
{
    console.log("routing to port:"+PORT);
    res.send("Welcome");
})

app.get('/:user_id',(req,res)=>
{
    const uid=req.params.user_id;
    res.send(`Welcome user ${uid}`)
})


app.listen(PORT,()=>
{
    console.log("Running in port:"+PORT)
})