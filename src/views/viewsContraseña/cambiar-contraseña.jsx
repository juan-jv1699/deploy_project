import React from "react";
import{Link} from 'react-router-dom'
import {motion} from 'framer-motion'
function CmabiarContraseña(){
    return(
        
        <motion.div className="" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            <form action="#" className="sign-in-form">
                <h2 className="title text-center">Usa una contraseña fuerte</h2>
                <img src={require('../../images/unlocked.gif')} className="infO" alt="" width="200px"/>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Nueva contraseña" />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Confirmar contraseña" />
                </div>
                <Link to='/contraseña-cambiada'>
                    <button className="btnOlvide mt-4 ">
                        <span className="box rounded w-100" style={{backgroundColor:'#639bd050'}}>
                            Cambiar contraseña
                        </span>
                    </button>
                </Link>
            </form>
        </motion.div>
    )
}
export default CmabiarContraseña