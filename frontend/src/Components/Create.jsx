import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

function Create() {
  let navigate = useNavigate();
let [name, setName] = useState('');
let [lastName, setLastname] = useState('');
let [email, setEmail] = useState('');
let [tel, setTel] = useState('');
let [project, setProject] = useState('');

async function handleCreate(e){
  e.preventDefault()
  await axios.post('http://localhost:8080/create',{name,lastName,tel,email,project})
  .then((res)=>{
   if(res.data == "success"){
    alert("successfully created")
    navigate('/home')
   }
  })
  .catch((e)=>{
    console.log("error in submit form: ",e)
  })
}
  return (
    <div className="user">
    <form method='POST' onSubmit={handleCreate}>
      <h2>Create Client</h2>
      <div className='label'>
        <div className="inner-label" >
        <label htmlFor="name">Name: </label>
        </div>
        <div>
        <input type="text" id='name' name='name' onChange={(e => setName(e.target.value))} />
        </div>
      </div>
      <div className='label'>
        <div className="inner-label" >
        <label htmlFor="lastname">lastName: </label>
        </div>
        <div>
        <input type="text" id='lastname' name='lastName' onChange={(e=>setLastname(e.target.value))} />
        </div>
      </div>
      <div className='label'>
        <div className="inner-label" >
        <label htmlFor="email">Email: </label>
        </div>
          <div>
        <input type="text" name="email" id="email" onChange={(e=>setEmail(e.target.value))} />
          </div>
      </div>
      <div className='label'>
        <div className="inner-label" >
        <label htmlFor="tel">Mobile: </label>
        </div>
        <div>
        <input type="number" id='tel' name='tel' onChange={(e=>setTel(e.target.value))} />
        </div>
      </div>
      <div className='label'>
        <div className="inner-label" >
        <label htmlFor="project">Project: </label>
        </div>
        <div>
        <input type="text" id='porject' name='project' onChange={(e=>setProject(e.target.value))} />
        </div>
      </div>
      <button className='createBtn'>Create client</button>
    </form>
    </div>
  )
}

export default Create;