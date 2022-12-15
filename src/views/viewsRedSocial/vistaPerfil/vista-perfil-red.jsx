import React from "react";
import { Link, Outlet } from "react-router-dom";
import './cssPerfil.css'
import { useApiContext } from "../../../hooks/context/ApiContext";
import { useState } from "react";
import { useEffect } from "react";
function VistaPerfil(){
    const {data,isActive} = useApiContext()
    const[role,setRole] = useState()
    const[user,setUser] = useState({})
    useEffect(()=>{
        let res = DataValidate()
        setRole(res.role)
        setUser(res)
    },[])
    
    const DataValidate = () =>{
        if(Object.entries(data).length == 0){
            if(()=>isActive()){
                let dataUser = JSON.parse(localStorage.getItem('DataUser'))
                return dataUser
            }
        }
        return data
    }
    return(
        <section className="perfil-usuario">
            <div className="contenedor-perfil">
                <div className="portada-perfil" >
                    <div className="sombra"></div>
                    <div className="avatar-perfil">
                        <img src={user.image} className='imgPerfil' alt="img"/>
                    </div>
                    <div className="datos-perfil">
                        <h4 className="titulo-usuario">{user.name}</h4>
                    </div>
                    <div className="opcciones-perfil">
                        <Link to={`/vista-administrar-rol/editUser/${user.id}`} >
                            <button type=""><i className="fas fa-wrench"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="menu-perfil">
                <ul>
                    <li><Link to='/vista-perfil-red' title=""><i className="icono-perfil fas fa-info-circle"></i> Informacion</Link></li>
                    <li><Link to='/vista-perfil-red/vista-post-perfil'><i className="icono-perfil fas fa-bullhorn"></i> Publicaciones</Link></li>
                    </ul>
                </div>
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
export default VistaPerfil