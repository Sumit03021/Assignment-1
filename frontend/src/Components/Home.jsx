import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
  let [ data , setData] = useState([])
 let navigate = useNavigate()
  useEffect((()=>{
   async function userData(){
    let res = await axios.get('http://localhost:8080/user')
     setData(res.data)
     console.log(res.data)
   }
   userData()
  }),[])
 
  async function handleDelete(id){
    await axios.delete(`http://localhost:8080/create/${id}`)
    .then((res)=>{
      if(res.data == 'success'){
        alert("successfully deleted")
        navigate('/')
      }
    })
    .catch((e)=>{
      console.log("error in delete form : ",e)
    })
  }
  return (
    <div className='table'>
    <table>
            <thead className='table-head'>
              <tr>
                <th>Name</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Projects</th>
              </tr>
            </thead>
     {
       data.map((item,index)=>{
         return(
           <tbody className='table-body' id={item._id} key={item._id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.tel}</td>
                <td>{item.project}</td>
                <td><Link style={{textDecoration:"none"}} to={`/client/${item._id}`}><button style={{padding:"4px"}}>Edit</button></Link> <button style={{padding:"4px"}} onClick={()=>handleDelete(item._id)}>Delete</button></td>
              </tr>
            </tbody>
        )
      })
    }
    </table>
    </div>
  )
}


export default Home