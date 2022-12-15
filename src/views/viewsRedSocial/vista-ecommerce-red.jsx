import React from "react";
import {motion} from 'framer-motion'
import { CartProvider } from "../../componentes/componentesEcommerce/context/CartContext";
import Home from "../../componentes/componentesEcommerce/components/Home/index";





function VistaEcommerce(){
    return(
        <motion.div className="contenidoPostNotiRed p-2" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
                    <CartProvider>
                        <Home />
                    </CartProvider>
        </motion.div>
    );
}
export default VistaEcommerce
