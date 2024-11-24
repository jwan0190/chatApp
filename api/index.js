const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const User = require('/models/User')
const jwt = require('jsonwebtoken')

dotenv.config();
const app = express();
console.log(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET


//get api
app.get('/test',(req,res)=>{
    res.json('test ok')
})

//post api
app.post('/register',async (req,res)=> {
    const {username, password} = req.body; 
    const createdUser = await User.create({username,password})
    jwt.sign({userId:createdUser._id},jwtSecret).then((err,token)=>{
        if(err) throw err; 
        res.cookie('token',token).status(201).json('ok')
    })
})

//start listening to the port. 
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.BASE_URL}`);
  });


  //mern_chat_app
  //kYzciyd9KrqWj5d1