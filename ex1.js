const express=require('express');
const app=express();
const port=3000;
const product=["apple","pear","bottle","pen"];
const middlog=(req,res,next)=>
{
    const { method , url }= req;
    console.log(`${method} ${url}`)
    next();
}

app.use(middlog);

app.get('/',(req,res)=>
{
    res.send('welcome to store');            //route
});

app.get('/products',(req,res)=>
{
    res.send(`here are our products ${product}`);         //route
});

app.listen(port,()=>
{
    console.log("server is running on "+port)
})