import React from "react";
import { Link, Outlet } from "react-router-dom";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import{motion} from'framer-motion'
import { useState, useEffect } from "react";
import{useApiContext} from '../../hooks/context/ApiContext'
import {uploadFile} from '../../firebase/config'
import CardJobTrabajo from "../../componentes/comCardPostCardJobs/componenteCardJobTrabajos";



function VistaPostRed (){

  const {getAllPublication,createlike,createPublication,deletePublication,getAlllikes} = useApiContext()

  const {data,isActive} = useApiContext()
  const [user,setUser] = useState({})
  const [posts, setPosts] = useState([]);
  const [cargar, setCargar] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [cuerpoMsj, setCuerpoMsj] = useState("");

  // Obtener datos con fetch API




    useEffect(() => {
        AllPublication()
      },[]);

      useEffect(() => {
        if(posts.length != 0){

          // AllComments()
        }
      },[posts]);

    //   Traer publicaciones
      const AllPublication = async ()=>{
        const res = await getAllPublication()
        setPosts(res.data)
    }
    //   Traer comentarios
    
    // console.log(comments)
    // console.log(comments.id)

    // Crear un comentario
    const [comentarioPost, setComentarioPost] = useState('');
      const ChangeComentario = event => {
        setComentarioPost(event.target.value);
        // console.log(comentarioPost)
      };
  // Like
 
  // Borrar datos
  const borrarPost = async (id) => {
    let res = await deletePublication(id)
    if(res.res == true){
      // AllComments()
      AllPublication()
    }
  };

  
  // Publicar datos
    
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
  
    const[error,setError] = useState(false)
  const agregarPosts = async  (titulo, mensaje,image) => {
    let data = await createPublication(user.id,titulo,mensaje,image)
    if(data.res == true){
      AllPublication()
      // AllComments()
      
    }else{
      setError(true)
    }
    setTitulo("");
    setCuerpoMsj("");
    setFile(null);
  };
  const [file, setFile] = useState(null)
  const[appear,setAppear] = useState(true)
  // Controlador que maneja el envio del formulario
  const controladorDelEnvio = async (e) => {
    e.preventDefault();
    const result = await uploadFile(file)
    agregarPosts(titulo, cuerpoMsj,result);
    setAppear(false)
  };


  useEffect(()=>{
    getAllLikes()
},[])
const[getLikes,setGetLikes] = useState([])
const getAllLikes = async()=>{
    let res = await getAlllikes()
    console.log('App ya')
    console.log(res)
    setGetLikes(res)
    return res
}

const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="post p-4">
                    <form action="" onSubmit={controladorDelEnvio} > 
                        <div className="cuadroPublicar rounded-2 p-2 d-flex"> 
                                <div className="imagePost">
                                    <label for='file-input'>
                                      {!selectedFile || appear == false ? <img src={require('../../images/publicar.png')} width='50px' className="border-rounded" />  : <img src={preview} width='50px' className="border-rounded" />   }

                                    </label>
                                    <input id="file-input" type="file" onChange={(e)=>{setFile(e.target.files[0]) ; onSelectFile(e);}}/>
                                </div>
                                <div className="escribirElegirPu mt-1 mx-3">
                                    <input className="inputPublicar rounded-5 border-0" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                                    <input className="inputPublicar rounded-5 mt-2 border-0" type='text'value={cuerpoMsj} onChange={(e) => setCuerpoMsj(e.target.value)}/> 
                                    <div className="mt-2 d-flex justify-content-between">
                                        <button type="submit" className="btnSB">Publicar</button>
                                    </div>
                                </div>
                        </div>
                        {error &&
                          <p>Error al publicar</p>
                          }
                    </form>
                    
                    
                <div className="seePost mt-1 p-2">
                {posts.map((post) => {
                  
                    return (
                      <CardPost
                                        key={post.id}
                                        id_publication={post.user_id}
                                        idPublicacion={post.id}
                                        nombre={post.title}
                                        imagePublication={post.image}
                                        imagenPerfil={require('../../images/imagenPerfil.png')}
                                        body={post.content}
                                        fotoPerfilComenatrio={require('../../images/imagenPerfil.png')}
                                        onClick={()=>borrarPost(post.id)}
                                    />
                    );
                  
         
        })}
                </div>
            </div>
            <div className="noticias p-5 d-none d-sm-table-cell">
                
                <div className="imgsJobs" >
                <div id="carouselExampleControls" style={{width:'100%'}} class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('../../images/cafe1.jpg')}class="d-block w-100"alt="..."/>
    </div>
   
    <div class="carousel-item">
      <img src={require('../../images/cafe3.jpeg')} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
                <div className="Jobs mx-4 mt-4">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  
  <div class="carousel-inner caroul">
    <div class="carousel-item active">
      <CardJobTrabajo
      image='https://d1ym9li8i4iu0v.cloudfront.net/07-29-2020/t_be3292f62f6d402fac2f0c24e0423997_name_Cafe__3.jpg'
      tituloTrabajo='Se busca recolector de café'
      contentCardJob='Una oferta de empleo deseada por muchos, comunicate a este numero 212131'
      />
    </div>
    <div class="carousel-item">
    <CardJobTrabajo
      image='https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_45294210_subscription_monthly_xxl-1612523879.webp'
      tituloTrabajo='¿Estas buscando empleo de Capataz?'
      contentCardJob='Trabaja en una de las mejores fincas producturas de leche comunicate con nosotros 754385467'
      />
      
    </div>
    <div class="carousel-item">
    <CardJobTrabajo
      image='https://tipsparatuviaje.com/wp-content/uploads/2018/11/los-angeles-california.jpg'
      tituloTrabajo='Comunicate con nosotros'
      contentCardJob='Adentrate en un viaje con nosotros a la ciudad, comunicate 43643278'
      />
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
               
            </div>
        </motion.div>
        
    )
}
export default VistaPostRed