const express = require('express');
const User = require('../Model/user')
const router = express.Router()

router.get('/user',async(req,res)=>{
  try{
    let user = await User.find({})
    res.json(user)
  }
  catch(e){
    console.log("error in data fetch: ",e)
  }
})

router.post('/create',async(req,res)=>{
  try{
  let {name,lastName, tel, email , project} = req.body;
  let user = await User.create({name, lastName , tel , email, project})
  res.json("success")
  }
  catch(e){
    console.log("error in signup catch: ",e)
  }
})

router.patch('/create/:id',async(req,res)=>{
  try{
    let {id} = req.params;
    let {name , lastName , tel ,email, project} = req.body;
    let user = await User.findByIdAndUpdate(id,{name , lastName, email, tel ,project})
    res.json("success")
  }
  catch(e){
    console.log("error in update form: ",e)
  }
})

router.delete('/create/:id',async(req,res)=>{
  try{
    let {id} = req.params;
    let user = await User.findByIdAndDelete(id)
    res.json('success')
  }
  catch(e){
    console.log("error in delete: ",e)
  }
})

















module.exports = router