import React from 'react'
import axios from "axios";


const images_publication = (url) => {
  let apiUrl = `${url}images_publication/`   

  const createimages_publication= async(name, description)=>{
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

  const getimages_publication = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data 
    } catch (error) {
      console.log(error.response.data)
    }
  }
 /* const getAllimages_publications = async()=>{
    try {
      const res = await axios.get(`${apiUrl}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }*/
  
  const updateimages_publication = async(id, name, description)=>{
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

  const deleteimages_publication = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createimages_publication,
    getimages_publication,
    updateimages_publication,
    deleteimages_publication,
    
  }
}

export default images_publication