import React from 'react'
import axios from "axios";


const notification = (url) => {
  let apiUrl = `${url}notification/`   

  const createNotification = async(content,type_notification_id,receiver_id,transmitter_id)=>{
    let request = {content,type_notification_id,receiver_id,transmitter_id}
    try {
      const res = await axios.post(`${apiUrl}new/`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const getNotification = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data 
    } catch (error) {
      console.log(error.response.data)
    }
  }
  // const getAllNotifications = async()=>{
  //   try {
  //     const res = await axios.get(`${apiUrl}`)
  //     console.log(res.data)
  //     return res.data
  //   } catch (error) {
  //     return error.response.data
  //   }
  // }
  
  // const updateNotification = async(id, reasons, publication_id)=>{
  //   let request = {reasons, publication_id}
  //   try {
  //     const res = await axios.put(`${apiUrl}${id}`,request)
  //     console.log(res.data)
  //     return res.data
  //   } catch (error) {
  //     console.log(error.response.data)
  //     return error.response.data
  //   }
  // }

  const deleteNotification = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}delete/${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createNotification,
    getNotification,
    /*updateNotification,*/
    deleteNotification,
    /*getAllNotifications,*/
  }
}

export default notification