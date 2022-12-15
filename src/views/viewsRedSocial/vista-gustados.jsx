import { async } from "@firebase/util";
import React, { useState } from "react";
import { useEffect } from "react";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import { useApiContext } from "../../hooks/context/ApiContext";
import { motion } from "framer-motion";
function VistaGustados(){
    const{getAllLikesOnePerson} = useApiContext()
    const [user,setUser] = useState({})
    const[getOneLikes, setOneLike] = useState([])
    const {data,isActive} = useApiContext()

    useEffect(()=>{
      
        if(Object.entries(data).length == 0){
            if(()=>isActive()){
                let dataUser = JSON.parse(localStorage.getItem('DataUser'))
                setUser(dataUser)
            }
        }else{
  
            setUser(data)
        }
        console.log(user)
        
    },[])
    useEffect(()=>{
        if(user.id){
            getOneLikePerson(user.id)
        }
    },[user])
    const getOneLikePerson = async(id)=>{
        let res = await getAllLikesOnePerson(id)
        console.log(res)
        setOneLike(res.data)
    }

    console.log(getOneLikes)
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="gustados">
                
                {getOneLikes.map((getOneLike)=>{
                    return(
                       
                      <CardPost
                        key={getOneLike.publication_id
                        }
                      />
                
                           
                       
                    )
                })}
                
            </div>
        </motion.div>
    )
}
export default VistaGustados