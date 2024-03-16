const express = require('express')
const mongoose = require('mongoose')
const UserRoute = require('./Routes/User')
const cors = require('cors')
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/clientCrud")
.then(()=>{
  console.log("DB connected")
})
.catch((e)=>{
  console.log("error in DB connection: ",e)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:['http://localhost:5173']
}))

app.use(UserRoute)


app.listen(8080,()=>{
  console.log("server connected")
})