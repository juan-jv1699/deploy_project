import React from 'react'
import axios from "axios";


const comments = (url) => {
  let apiUrl = `${url}comment/`   

  const createComment = async(id,id_publication,content)=>{
    let request = {content,user_id:id,publication_id:id_publication}
    try {
      const res = await axios.post(`${apiUrl}new`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const getComment = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getAllComment = async(publication_id)=>{
    try {
      const res = await axios.get(`${apiUrl}all/${publication_id}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }
  
  const updateComment = async(id,id_publication,id_comment,content)=>{
    let request = {content,user_id:id,publication_id:id_publication}
    try {
      const res = await axios.put(`${apiUrl}update/${id_comment}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const deleteComment = async(id_comment)=>{
    try {
      const res = await axios.delete(`${apiUrl}delete/${id_comment}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createComment,
    getComment,
    getAllComment,
    updateComment,
    deleteComment,
  }
}

export default comments