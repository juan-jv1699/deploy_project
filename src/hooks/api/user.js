import axios from "axios";
import React from "react";

const User = (url) => {
    // constantes
    const apiurl = url+'user/'
    // funciones de llamado async
    // CREAR USUARIO <<<<name,email,password,birthdate,cc>>>
    const createUser = async(name,email,password,birthdate,cc,role)=>{
      /*aqui se utiliza fetch para guardar el usuario en la base de datos atraves de la API*/ 
      // try {
      //   const res = await fetch(`${apiurl}new`,{
      //     method: "POST",
      //     credentials: "same-origin",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name:"desde el front",
      //       email:"teste02@gmail.com",
      //       password:"12345",
      //       birthdate:"2000-05-02",
      //       cc:"12775149912"
      //     }),
      //   });
      //   const response = await res.json()
      //   console.log(response)
      // } catch (error) {
      //   console.log(error)
      // }
        
      // console.log(name,'\n',email,'\n',password,'\n',birthdate,'\n',cc,'\n',role)
      
      let request = (typeof role === 'undefined') ? {name,email,password,birthdate,cc} : {name,email,password,birthdate,cc,role}
      
      try {
        const res = await axios.post(`${apiurl}new`,request)
        console.log(res.data)
        return res.data
      } catch (error) {
        return error.response.data        
      }
     }
    // VER UN USUARIO
    const getUser = async(id)=>{
      try {
        const res = await axios.get(`${apiurl}mostrar/${id}`)
        console.log(res.data)
        return res.data
      } catch (error) {
        console.log(error.response.data)
        return error.response.data
      }
    }
    // VER TODOS LOS USARIOS
    const getAllUsers = async()=>{
      try {
        const res = await axios.get(`${apiurl}all`)
        console.log(res.data)
        return res.data
      } catch (error) {
        return error.response.data
      }
    }
    //ACTUALIZAR USER 
    const updateUser = async(id,name,email,password,birthdate,cc,image)=>{
      let request = {name,email,password,birthdate,cc,image}
      console.log(request)
      console.log(id)
      try {
        const res = await axios.put(`${apiurl}update/${id}`,request)
        console.log(res.data)
        return res.data
      } catch (error) {
        console.log(error)
        return error.response.data
      }
    }

    const getAllPublicationPerson = async(user_id)=>{
      try {
        let res = await axios.get(`${apiurl}publications/${user_id}`)
        console.log(res.data)
        return res.data
      } catch (error) {
        console.log(error)
        return error.response.data
        
      }
    }
    // ELIMINAR USUARIO
    const deleteUser = async(id)=>{
      try {
        const res = await axios.delete(`${apiurl}delete/${id}`)

        return res.data
      } catch (error) {
        console.log(error.response.data)
        return error.response.data
      }
    }

    // EL HOOK DEVULEVE LAS FUNCIONES ASYNC NECESARIAS
    return {
      getUser,
      getAllPublicationPerson,
      deleteUser,
      getAllUsers,
      createUser,
      updateUser,
     }
}

export default User 