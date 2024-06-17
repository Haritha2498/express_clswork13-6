const express=require('express');
const app=express();
const port=3000;

const bodyParser = require('body-parser');


// const middlog=(req,res,next)=>
// {
    
//     next();
// }

// app.use(middlog);
app.use(bodyParser.json());
app.post('/submitreview',(req,res)=>
{
    const { title , content }=req.body;
    res.send(`${title} has reviewed as ${content}`);
    console.log(`${title} has reviewed as ${content}`);

})

app.listen(port,()=>
{
    console.log("running on port: "+port);
})