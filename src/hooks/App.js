import VistaPrincipal from "../componentes/vista-principal";
import swal from 'sweetalert'

import { Routes, Route , BrowserRouter as Router, useLocation} from "react-router-dom";
import CmabiarContraseña from "../views/viewsContraseña/cambiar-contraseña";
import VistaContraseña from "../componentes/vista-contraseña";
import IngresarCorreo from "../views/viewsContraseña/ingresar-correo";
import VistaRedsocial from "../componentes/vistaPrincipal-red";
import RecibirCodigo from "../views/viewsContraseña/recibir-codigo";
import ContraseñaCambiada from "../views/viewsContraseña/contraseña-cambiada";
import { AnimatePresence } from "framer-motion";
import VistaPostRed from "../views/viewsRedSocial/vista-post-red";

import'./css/App.css';
import '../componentes/css/login.css'
import '../componentes/css/buttons.css';
import'../componentes/css/input.css'
import'../componentes/css/cardEcommerce.css'
import'../componentes/css/card_job.css'
import'../componentes/css/editarP.css'
import'../componentes/css/notificaciones.css'
import VistaEcommerce from "../views/viewsRedSocial/vista-ecommerce-red";
import VistaPerfil from "../views/viewsRedSocial/vistaPerfil/vista-perfil-red";
import VistaInfoPerfil from "../views/viewsRedSocial/vistaPerfil/vista-info-perfil";
import VistaPostPerfil from "../views/viewsRedSocial/vistaPerfil/vista-post-perfil";
import Recargar from "../componentes/componenteCargar/componenteCargar";
import React, { useState , useLayoutEffect } from "react";
import { ApiProvider,useApiContext } from "./context/ApiContext";
import AdministrarUsers from "../views/viewsRedSocial/vista-administrar-rol";
import ShowAllUsers from "../views/viewsRedSocial/crud/showAllUsers";
import ShowUser from "../views/viewsRedSocial/crud/showUser";
import AddUsers from "../views/viewsRedSocial/crud/addUsers";
import EditUser from "../views/viewsRedSocial/crud/editUser";
import VistaUnaPubli from "../views/viewsRedSocial/vistaUnaPubli";
import VistaGustados from "../views/viewsRedSocial/vista-gustados";



 export default ()=> <ApiProvider><App/></ApiProvider>
  function App (){
    const [loading,setLoading] = useState(false);
    // se importan las funciones de autenticacion 
    const {resul,resHandler,isActive} = useApiContext()
    useLayoutEffect(()=>{
      let active = isActive()
      if(active){
        resHandler()
      }
    },[])

    const cambiarEstado = () =>{

      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      },3000)
    }
    
    if(loading){
      return(
        <Recargar/>
      )
    }
    return (
      // name,email,password,birthdate,cc
        <div className="App overflow-hidden">
          <AnimatePresence>
        

                
                <Routes>
                  <Route path="/" element={resul ? <VistaRedsocial/> :<VistaPrincipal />}>
                        <Route path="/vistaPrincipal-red" element={<VistaPostRed />}></Route>
                        <Route path="/vista-ecommerce-red" element={<VistaEcommerce />}></Route>
                        <Route path="/vistaUnaPubli/:id" element={<VistaUnaPubli/>}></Route>
                        <Route path="/vista-gustados" element={<VistaGustados/>}></Route>
                        <Route path="/vista-administrar-rol" element={<AdministrarUsers/>}>
                          <Route path="/vista-administrar-rol" element={<ShowAllUsers/>}></Route>
                          <Route path="/vista-administrar-rol/addUsers" element={<AddUsers/>}></Route>
                          <Route path="/vista-administrar-rol/showUser/:id" element={<ShowUser/>}></Route>
                          <Route path="/vista-administrar-rol/editUser/:id" element={<EditUser/>}></Route>
                        </Route>
                        <Route path="/vista-perfil-red" element={<VistaPerfil />}>
                          <Route path="/vista-perfil-red" element={<VistaInfoPerfil />}></Route>
                          <Route path="/vista-perfil-red/vista-post-perfil" element={<VistaPostPerfil />}></Route>
                        </Route>
                    </Route>
                    <Route path="/" element={<VistaContraseña />}>
                      <Route path="/vista-contraseña" exact  element={<IngresarCorreo />}></Route>
                      <Route path="/recibir-codigo"  element={<RecibirCodigo/>}></Route>
                      <Route path="/cambiar-contraseña"  element={<CmabiarContraseña/>}></Route>
                      <Route path="/contraseña-cambiada"  element={<ContraseñaCambiada />}></Route>
                    </Route>
                 
                   
                    
              </Routes>
              
              
              </AnimatePresence>
          
          
            
        </div>
    );
  }



