const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: "./.env" });
const cors = require('cors');
const route = require('./routes/router')
const app = express()
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@mydb.8qxcbep.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri).then(()=>{
    console.log("mubarak db connected")
}).catch(()=>{
    console.log("db na hora connect!")
})

app.use(cors());

app.use(express.json())

app.use('/task',route)

app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/gettasks',(req,res)=>{
    res.send("here are the taks");
})
const PORT = process.env.PORT_NAME
app.listen(PORT,()=>{ 
    console.log(`listening on port ${PORT}`);
})