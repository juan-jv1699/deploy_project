import axios from 'axios'
import React from 'react'

const userData = (url) => {
    // constantes
    const apiurl = url+'datauser/'
    /*funciones de consumo de api */
    const createData = async(id,preferences,gender,photo = 'not-photo',description = 'hola soy nuevo aqui', docs = null, location = '...')=>{
        let request = {
            preferences,photo,gender,description,user_id:id, docs, location
        }
        try {
            let res = await axios.post(`${apiurl}new`,request)
            return res.data
        } catch (error) {
            return error.response.data          
        }
    }
    const getData = async(id)=>{
        try {
            let res = await axios.get(`${apiurl}${id}`)
            return res.data
        } catch (error) {
            return error.response.data          
        }

    }
    const updateData = async(id,preferences,photo,gender,description,location,docs='none')=>{
        try {
            let request = {preferences,photo,gender,description, docs, location}
            let res = await axios.put(`${apiurl}update/${id}`,request)
            return res.data
        } catch (error) {
            return error.response.data          
        }
    }

    // return del hook 
    return {
        createData,
        getData,
        updateData,
    }
}

export default userData