const express = require('express')
const app = express();

app.get('/test',(req,res)=>{
    res.json('test ok')
})

app.post('/register',(req,res)=>{
    res.json('success')
})

app.listen(4000);