const express=require('express');
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>
{
    res.send(`
        <form action="/submit-form" method="POST">
            <label for="uname">username</label>
            <input type="text" id="un" name="un"></input>
             <label for="email">Email</label>                           //route
            <input type="text" id="em" name="em"></input>
            <button type="submit">Submit</button>
        </form>
    `);
})



app.listen(port,()=>
{
    console.log("running on port :"+port);
})

