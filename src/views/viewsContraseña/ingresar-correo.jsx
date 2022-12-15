import React from "react";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
function IngresarCorreo(){
    return(
        <motion.div className="" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            <form action="#" class="sign-in-form">
                <h2 className="title text-center">Olvidaste tu contraseña</h2>
                <img src={require('../../images/enviar-correo.gif')} className="infO" alt="" width="200px"/>
                <p className="fw-bold fs-4">Ingresa tu correo</p>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Correo" />
                </div>
                <Link to='/recibir-codigo'>
                    <button className="btnOlvide mt-4">
                        <span className="box rounded" style={{backgroundColor:'#639bd050'}}>
                            Continuar
                        </span>
                    </button>
                </Link>
            </form>
        </motion.div>
    )
}
export default IngresarCorreo