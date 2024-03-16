const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  tel:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true,
  },
  project:{
    type:String,
    required:true,
  }
})
const User = mongoose.model('User',userSchema)
module.exports = User