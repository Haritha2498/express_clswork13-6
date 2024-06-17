const express=require('express');
const app=express();
const port=3000;

const midip=(req,res,next)=>
{
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    next();
}
app.use(midip);


app.get('/',(req,res)=>
{
    res.send('hello')
});

app.listen(port,()=>
{
    console.log("service running on port : "+port);
})