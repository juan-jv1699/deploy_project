import React from "react";
import {motion} from 'framer-motion'
import { useState,useEffect } from "react";
import CardPost from "../../../componentes/comCardPostCardJobs/componenteCardPost";
import { useApiContext } from "../../../hooks/context/ApiContext";
import { useParams } from "react-router-dom";

function VistaPostPerfil(){
  const{getAllPublicationPerson,deletePublication} = useApiContext()
  const {data,isActive} = useApiContext()
  const [user,setUser] = useState({})
  const[posts,setPosts] = useState([])


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
      useEffect(() => {
        if(user.id){

          AllPublications(user.id)
        }
        },[user]);
  
  
      //   Traer publicaciones
        const AllPublications = async (id)=>{
          const res = await getAllPublicationPerson(id)
          console.log(res)
          setPosts(res)
      }
      const borrarPost = async (id) => {
        let res = await deletePublication(id)
        if(res.res == true){
          AllPublications()
        }
      };


      

    return(
        <motion.div className="perfil-usuario-footer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                <div className="PostPerfil">
                  
                  {posts.map((post)=>{
                          return(
                              <CardPost
                              key={post.id}
                              idPublicacion={post.id}
                              nombre={post.title}
                              imagePublication={post.image}
                              imagenPerfil={require('../../../images/imagenPerfil.png')}
                              body={post.content}
                              fotoPerfilComenatrio={require('../../../images/imagenPerfil.png')}
                              onClick={()=>borrarPost(post.id)}
                              />
                          );
                      })}
                </div>
        </motion.div>
    )
}
export default VistaPostPerfil