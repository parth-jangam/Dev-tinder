const express = require('express')

const app = express()

app.use("/init",(req,res)=>{
    res.send("this is init page")
})

app.get("/user/:userId",(req,res)=>{
    console.log("request need user with id ",req.params.userId);
    res.send(`userId ${req.params.userId}`)
})
app.use("/",(req,res)=>{
    res.send("welcome")
})
app.listen(3000,()=>{
    console.log("app is running on port 3000");
    
})