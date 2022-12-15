import React from 'react'
import axios from "axios";


const typespublication = (url) => {
  let apiUrl = `${url}typespublication/`   

  const createtypespublication= async(name, description)=>{
    let request = {name, description}
    try {
      const res = await axios.post(`${apiUrl}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }//YA

  const gettypespublication = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const getAlltypespublications = async()=>{
    try {
      const res = await axios.get(`${apiUrl}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }
  
  const updatetypespublication = async(id, name, description)=>{
    let request = {name, description}
    try {
      const res = await axios.put(`${apiUrl}${id}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const deletetypespublication = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createtypespublication,
    gettypespublication,
    updatetypespublication,
    deletetypespublication,
    getAlltypespublications,
  }
}

export default typespublication