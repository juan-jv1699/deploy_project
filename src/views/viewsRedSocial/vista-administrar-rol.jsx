import React from "react";
import { motion } from "framer-motion";
import {Outlet } from "react-router-dom";
function AdministrarUsers(){
    
    return(
        <motion.div className="container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
          <Outlet />
        </motion.div>
    )
}
export default AdministrarUsers