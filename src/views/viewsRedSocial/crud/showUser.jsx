import React from "react";
import { Link,useParams } from "react-router-dom";
import { useApiContext } from "../../../hooks/context/ApiContext";
import { useState, useEffect } from "react";

import './crud.css'
function ShowUser(){
  const {getUser}=useApiContext()
  const [data, setData] = useState({
    image:'',
    name:'',
    email:'',
    birthdate:'',
    cc:'',
    role:''
  });
  const {id} = useParams()

  useEffect(() => {
      getDataUser()
    }, []);
    const getDataUser = async ()=>{
      const res = await getUser(id)
      setData(res.data)
    }
    
    return(

      <div className="contentCardShow border">
        <div class="cardshow">
          <div class="cardshow-border-top"></div>
          <div class="img"><img src={data.image} alt="" width='100px' /></div>
          <span> Name: {data.name}</span>
          <p class="job"> # {id}</p>
          <p class="job"> Correo: {data.email}  </p>
          <p class="job"> Fecha: {data.birthdate} </p>
          <p class="job"> Cedula: {data.cc} </p>
          <p class="job"> Rol: {data.role} </p>
          <Link to='/vista-administrar-rol' className="back border">
            <button>Back</button>
          </Link>
        </div>
      </div>
      
        
    )
}
export default ShowUser