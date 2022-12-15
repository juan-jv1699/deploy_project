import React,{ useState,useEffect } from "react";
import axios from "axios";


const Authentication =(url)=>{

    // login (aqui se valida las credenciales con las almacenadas en la base de datos)
    const login =async(email,password)=>{
        try {
            const res = await axios.post(`${url}login`,
            {
                email:email,
                password:password,
            })
            let token = res.data.token
            let userData = res.data.user
            localStorage.setItem('token',token)
            localStorage.setItem('DataUser', JSON.stringify(userData))

            return res.data
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
        }
    }
    // funcion para eliminar le token y cerrar la sesion
    const logout =async()=>{
        let token = localStorage.getItem('token')
        const headers = {
            Authorization:`Bearer ${token}`
        }

        try {
            const res = await axios.post(`${url}logout`,{},
            {headers:headers})
            if(res){
                localStorage.removeItem('token')
                localStorage.removeItem('DataUser')
            }
            console.log(res.data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    // funcion en donde se registra un nuevo ususario
    const register = async(name,email,password,birthdate,cc,image)=>{
        let request = {name,email,password,birthdate,cc,image}
        try {
            const res = await axios.post(`${url}register`,request)
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
            console.log(error.response.data)

            return error.response.data
            
        }
        
    }
    const isActive = ()=>{
        let res = !!localStorage.getItem('DataUser')
        return res
    }

    return {
        isActive,
        login,
        logout,
        register,
    }
}
export default Authentication 