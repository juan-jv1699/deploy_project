import React from 'react'
import axios from "axios";


const typenotification = (url) => {
  let apiUrl = `${url}typenotification/`   

  const createTypeNotification= async(name, description)=>{
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

  const getTypeNotification = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data 
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const getAllTypeNotifications = async()=>{
    try {
      const res = await axios.get(`${apiUrl}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }
  
  const updateTypeNotification = async(id, name, description)=>{
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

  const deleteTypeNotification = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createTypeNotification,
    getTypeNotification,
    updateTypeNotification,
    deleteTypeNotification,
    getAllTypeNotifications,
  }
}

export default typenotification