import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import{motion} from 'framer-motion';
import { useState,useEffect } from "react";
import{useApiContext} from '../hooks/context/ApiContext'
import Recargar from "./componenteCargar/componenteCargar";


function VistaRedsocial(){
    const {logoutUser,data,isActive} = useApiContext()
    const [user,setUser] = useState(undefined)
    useEffect(()=>{
        if(Object.entries(data).length == 0){
            if(()=>isActive()){
                let dataUser = JSON.parse(localStorage.getItem('DataUser'))
                setUser(dataUser)
            }
        }else{
            setUser(data)
        }
    },[])
    if(user === undefined){
        return(
            <Recargar/>
        )
    }

    return(
        <div class="container-fluid bg-redS" >
        <div class="row">
            <div class="col-12 col-sm-3 col-xl-2 p-2  d-flex sticky-top bg-green">
                <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white ">
                    <h1 className="fs-5 tittleLogo text-light fw-bold d-flex align-items-center"><img className="logoApp"  src={require('../images/logopequeño.png')}alt="" width='80px' /><span className="textApp">Coffecom</span></h1>
                        {user.role == 1 ? <ul className="nav ul nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-around align-items-center align-items-sm-start" id="menu"><li class="nav-item">
                            <Link  to='/vistaPrincipal-red' class="nav-link px-sm-0 px-2">
                             <i className="fs-5 bi bi-house hvo"></i><span class="ms-1 d-none d-sm-inline fw-bold fs-5 li">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/vista-administrar-rol' class="nav-link px-sm-0 px-2">
                            <i class=" fs-5 bi bi-sliders hvo fs-5"></i><span class="ms-1 d-none d-sm-inline fw-bold fs-5 li">Administar</span></Link>
                        </li>
                        </ul>
                        : <ul className="nav ul nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-around align-items-center align-items-sm-start" id="menu"><li class="nav-item">
                            <Link  to='/vistaPrincipal-red' class="nav-link px-sm-0 px-2">
                             <i className="fs-5 bi bi-house hvo"></i><span class="ms-1 d-none d-sm-inline fw-bold fs-5 li">Inicio</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/vista-gustados' class="nav-link px-sm-0 px-2">
                            <i class="fs-5 bi bi-box2-heart-fill hvo"></i><span class="ms-1 d-none d-sm-inline fw-bold fs-5 li">Gustados</span></Link>
                        </li>
                        <li>
                            <Link to='/vista-config-red' class="nav-link px-sm-0 px-2">
                            <i class=" fs-5 bi bi-sliders hvo fs-5"></i><span class="ms-1 d-none d-sm-inline fw-bold fs-5 li">Notificaciones</span></Link>
                        </li> */}
                        <li>
                            <Link to='/vista-ecommerce-red' class="nav-link px-sm-0 px-2">
                            <i class=" fs-5 bi bi-cart4 hvo"></i><span class="ms-1 d-none d-sm-inline fw-bold fs-5 li">Tienda</span> </Link>
                        </li>
                        </ul> }
                    <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1 px-2">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={user.image} alt="hugenerd" width="28" height="28" class="rounded-circle"/>
                            <span class="d-none d-sm-inline fs-5 mx-1">{user.name}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link class="dropdown-item" to='/vista-perfil-red'>Perfil</Link></li>
                            <li><Link  to='/'><button class="dropdown-item border-none" onClick={()=>logoutUser()}> Salir</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col p-0 bg-inf h-sm-100">
                <div className="contenido d-flex flex-column ">
                    <div className="contenidoRed p-4">
                        <div className="subContenidoRed p-2 rounded-4">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}
export default VistaRedsocial