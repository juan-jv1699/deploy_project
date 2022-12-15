import React,{useState} from "react";
import { async } from "@firebase/util";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {useApiContext} from '../../hooks/context/ApiContext'
import '../css/login.css'


const Heart = ({id}) => {
    return (<svg id={id} width="30" viewBox="0 0 150 130"  fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M112.577 6.51645L112.588 6.51678L112.598 6.51707C124.83 6.85668 134.648 13.4871 139.798 25.162C147.658 42.9826 142.048 60.4882 131.657 75.7368C121.27 90.9784 106.855 102.747 99.8285 107.966C92.3832 113.495 84.0338 118.699 75 123.419C65.9653 118.698 57.6161 113.496 50.1717 107.966L50.1715 107.966C43.1455 102.747 28.7296 90.9784 18.3433 75.7368C7.95214 60.4882 2.34207 42.9826 10.2021 25.162L10.2022 25.1617C15.3515 13.4855 25.1696 6.85669 37.4015 6.51709L37.4155 6.51667C49.4687 6.15616 62.0214 12.1853 69.9783 21.8669L75 27.9771L80.0217 21.8669C87.982 12.1812 100.536 6.14284 112.577 6.51645" stroke="black" strokeWidth="10" />
  </svg>)}
  
  function CardPost({imagenPerfil,nombre,key,body,idPublicacion,imagePublication,onClick,id_publication}){
      
    const{getAllComment,deleteComment,createComment,data,isActive,createlike,deletelike} = useApiContext()
    // Constante para darle una clase a el boton de like
    const[Favorite, setFavorite]    = React.useState(false)
    // Constante para agregar like
    const[like,setLike]             = React.useState(false)
    // Constante para agregar like
    const[likedF,setLikedF] = useState()
    // Const para traer comentarios
    const[comments,setComments]     = useState([])
    // Const para hacer comentarios
    const[sendComment,setComment]   = useState('')
    // Const para borrar comentarios
    const[deleteComent,setDelete]   = useState(false)
    // Const para traer info del usuario
    const [user,setUser] = useState({})


    // Funcion para cambiar la clase del boton de like
    const handleClick = () => {
        setFavorite(!Favorite)
        setLike(!Favorite)
        
      }
    // Useffect para renderizar los comentarios
    useEffect(()=>{
            AllComments(idPublicacion)
    },[sendComment,deleteComent])
    // Function for bring all comments
    const AllComments = async (id)=>{
        const res = await getAllComment(id)
        console.log(res.data)
        if(!res.res == false){
            setComments(res.data)
        }else{
            // Si no hay comentarios renderiza este mensaje
            let messages = {
                id: 0,
                content:'Sin comentarios'
            }
            setComments([messages])
        }
    }
    // Funcion para borrar los comentarios
    const borrarComentario = async (id) => {
        let res = await deleteComment(id)
        setDelete(!deleteComent)
        };
    // Funcion para agregar los comentarios
    const agregarComments = async (content) =>{
        let res = await createComment(user.id,idPublicacion,content)
        
        setComment("")
    }
    // Controla el envio de los datos y los guarda despues de publicar
    const controladorDelEnvio = (e) => {
        e.preventDefault();
        agregarComments(sendComment)

    };
    // UseEffect para guardar la informacion del usuario en el localStorage
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
    // Funcion para agregar un like
    const agregarLike = async(id)=>{
    let res = await createlike(user.id,id)
    console.log(res)
    setLikedF(res.data.id)
    }
    // Funcion para borrar un like
    const deleteLike = async(id)=>{
        let res = await deletelike(id)
        setLikedF('')
    }
    // Funcion para la imagen de comentarios y pucblicacion
    
    return(
        <div className="card mx-auto mt-4" key={key}>
            <Link to={`/vistaUnaPubli/${idPublicacion}`}><img src={imagePublication} className="card-img-top cursor-pointer"/></Link>
            <div className="card-body">
                <h5 className="card-title">
                    <span>
                        <img className="rounded-5" src={imagenPerfil} width="50px" style={{marginRight:'10px'}} />
                    </span>
                    {nombre}
                </h5>
                <p className="card-text">{body}</p>
                <div className="d-flex justify-content-between">
                    <button className="clickLike" onClick={!like ? ()=>agregarLike(idPublicacion)  :   ()=>deleteLike(likedF)}>
                        <button style={{border:'none',background:'white'}}  onClick={handleClick}>
                            <Heart id={Favorite ?  'favorite-stroke': 'favorite-filled'}/>
                        </button>
                    </button>
                    {user.role == 1 || id_publication == user.id ? 
                            <button type="button" className="btn" style={{backgroundColor:'red', width:'80px', height:'30px',fontSize:'12px'}} onClick={onClick}>Borrar</button>
                        :
                            ''
                    }
                </div>
                {/* Renderizacion de los comentario de acuerdo al id de la publicacion */}
                {comments.map((comment)=>{
                    return(
                        <div className="comments">
                            <div className="border-top d-flex flex-wrap" key={comment.id}>
                                <span>
                                    <img src={imagenPerfil}className="rounded-5" width="25px" />
                                </span>
                                <div className="mt-2">
                                    <p className="">{comment.content}</p>
                                </div>
                                {comment.id == 0 || comment.user_id != user.id && user.role != 1 
                                    ?
                                        ''
                                    :
                                        <button  className="btn mx-5" style={{backgroundColor:'red', width:'80px', height:'30px',fontSize:'12px'}}  onClick={()=>borrarComentario(comment.id)}>Borrar</button>  }
                            </div>
                        </div>
                    )
                })}
                {/* Formulario para hacer el comentario */}
                <form action=""onSubmit={controladorDelEnvio} >
                    <div className="comentarBox" style={{width:'130%'}} >
                        <span><img src={user.image} className="rounded-5 photo-comment" width='50px' /></span>
                        <input type="text" className="inputComments" value={sendComment} onChange={(e) => setComment(e.target.value)} />
                        <input type="submit" className="submitComments" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CardPost