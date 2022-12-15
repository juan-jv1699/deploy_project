import React from "react";
import { Link } from "react-router-dom";
import {motion}from'framer-motion'
function RecibirCodigo(){
    return(
        <motion.div className="" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            <form action="#" class="sign-in-form">
                <h2 class="title">Verificacion</h2>
                <img src={require('../../images/enviar-correo.gif')} className="infO" alt="" width="200px"/>
                <p className="fw-bold fs-4">Ingrese el codigo mandado a su correo</p>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Correo" />
                </div>
                <Link to='/cambiar-contraseña'>
                    <button className="btnOlvide mt-4">
                        <span class="box rounded" style={{backgroundColor:'#639bd050'}}>
                            Continuar
                        </span>
                    </button>
                </Link>
            </form>
        </motion.div>
    )
}
export default RecibirCodigo