import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css'

function Edit() {
  let navigate = useNavigate()
let {id} = useParams()
let [name, setName] = useState('');
let [lastName, setLastname] = useState('');
let [email, setEmail] = useState('');
let [tel, setTel] = useState('');
let [project, setProject] = useState('');

async function handleCreate(e){
  e.preventDefault()
  await axios.patch(`http://localhost:8080/create/${id}`,{name,lastName,tel,email,project})
  .then((res)=>{
    if(res.data == 'success'){
      alert("successfully updated")
      navigate('/home')
    }
  })
  .catch((e)=>{
    console.log("error in edit form:", e)
  })
}
  return (
    <div className='user'>
    <form method='POST' onSubmit={handleCreate}>
    <h2>Edit Client</h2>
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
      <button className='createBtn'>Edit client</button>
    </form>
    </div>
  )
}

export default Edit;