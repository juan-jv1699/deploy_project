import React from "react";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
function ContraseñaCambiada(){
    return(
        <motion.div className="" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            <form action="#" className="sign-in-form">
                <h2 className="title text-center">Bienvenido de nuevo</h2>
                <img src={require('../../images/megusta.gif')} className="infO mt-1" alt="" width="200px"/>
                <Link to='/'>
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
export default ContraseñaCambiada