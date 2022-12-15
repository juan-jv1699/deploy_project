import React from 'react'
import axios from "axios";


const role = (url) => {
  let apiUrl = `${url}role/`   

  const createRole= async(name)=>{
    let request = {name}
    try {
      const res = await axios.post(`${apiUrl}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const getRole = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data 
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  const updateRole = async(id,name)=>{
    let request = {id,name}
    try {
      const res = await axios.put(`${apiUrl}${id}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const deleteRole = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createRole,
    getRole,
    updateRole,
    deleteRole,
  }
}

export default role