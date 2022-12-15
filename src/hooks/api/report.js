import React, { memo } from 'react'
import axios from 'axios'

const report = (url) => {
  const apiUrl = `${url}reports/`

  const getAllReports = async()=>{
    try {
      const res = await axios.get(`${apiUrl}`)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }

  const createReport = async(reasons,publication_id)=>{
    let request = {reasons,publication_id}

    try {
      const res = await axios.post(apiUrl,request)
      return res.data
    } catch (error) {
      return error.response.data      
    }
  }

  const getReport = async(report_id)=>{
    try {
      const res = await axios.get(`${apiUrl}${report_id}`)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }

  const updateReport = async(report_id,reasons,publication_id)=>{
    let request = {reasons,publication_id}
    
    try {
      const res = await axios.put(`${apiUrl}${report_id}`,request)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }

  const deleteReport = async(report_id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${report_id}`)
      return res.data
    } catch (error) {
      return error.response.data      
    }
  }

  return {
    getAllReports,
    createReport,
    getReport,
    updateReport,
    deleteReport,
  }
}

export default report