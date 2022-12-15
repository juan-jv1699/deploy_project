import React,{useState,useEffect} from "react";
import {motion} from 'framer-motion'
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import { Link, useParams } from "react-router-dom";
import {useApiContext} from '../../hooks/context/ApiContext'






function VistaUnaPubli(){
    const {getOnePublication}=useApiContext()
  const [data, setData] = useState({
    title:''
    
  });
  const {id} = useParams()

  useEffect(() => {
      getDataUser()
    }, []);
    const getDataUser = async ()=>{
      const res = await getOnePublication(id)
    //   console.log(res.data)
      setData(res.data)
    }
    return(
        <motion.div className="contenidoPostNotiRed p-2" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
                    <CardPost
                        key={data.id}
                        idPublicacion={data.id}
                        nombre={data.title}
                        imagePublication={data.image}

                        imagenPerfil={require('../../images/imagenPerfil.png')}
                        body={data.content}
                        fotoPerfilComenatrio={require('../../images/imagenPerfil.png')}
                    />
                    <Link to='/vistaPrincipal-red'><button className="btn">Volver</button></Link>
                    
        </motion.div>
    );
}
export default VistaUnaPubli
