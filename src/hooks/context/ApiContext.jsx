import React,{ createContext, useMemo,useState, useContext} from "react";
import ApiUrl from '../api/helpers/config'
import Authentication from '../api/helpers/authentication'
import User from '../api/user'
import userData from '../api/userData'
import publicaciones from "../api/publicaciones";
import comments from "../api/comments";
import report from "../api/report";
import role from "../api/role";
import notification from "../api/notifications";
import typenotification from "../api/typenotification";
import imagespublication from "../api/imagespublication";
import typepublication from "../api/typepubliction";
import like from "../api/likes";
import Like from "../api/likes";


/* Creamos el context, se le puede pasar un valor inicial */
const ApiContext = createContext();

export const ApiProvider = (props) => {
  const[data,setData]= useState({})
  const [error,setError] = useState(false)
  const [resul,setResul] = useState(false)

  const resHandler = ()=>{
    console.log(!resul)
    setResul(!resul)
  }

 const LoginUser = async(email,password)=>{
    let res = await login(email,password)
    if(!res.errors){
      setData(res.user)
      setResul(res.res)
    }
    else {
      setError(true)
    }
  }

  const logoutUser = async()=>{
    let res = await logout()
    if(res.res === true){
      setData({})
      setResul(!resul)
    }

  }


  // se programa es uso de los hooks para la autenticacion async de la API
  const {login,logout,register,dataLogin,isActive} = Authentication(ApiUrl)  
  // se progrma el uso async de la API para la tabla de users
  const {createUser, getUser,getAllUsers,updateUser,deleteUser,getAllPublicationPerson} = User(ApiUrl)
  //se programa el uso asyn de la api para la tabla de data users 
  const {createData,getData,updateData} = userData(ApiUrl)
  // se importan las funciones de publicacion
  const {getAllPublication,getOnePublication,createPublication,updatePublication,deletePublication}=publicaciones(ApiUrl)
  // se importan las funciones de commentarios
  const {createComment,getComment,getAllComment,updateComment,deleteComment} = comments(ApiUrl)
  // se importan las funciones de report
  const {getAllReports,createReport,getReport,updateReport,deleteReport} = report(ApiUrl)

  //Esteban
  // se importan las funciones de roles
  const {getRole, createRole, updateRole, deleteRole} = role(ApiUrl)
  // se importan las funciones de notification
  const {getNotification, createNotification, updateNotification, deleteNotification, getAllNotifications} = notification(ApiUrl)
// se importan las funciones de TypeNotification
const {getTypeNotification, createTypeNotification, updateTypeNotification, deleteTypeNotification, getAllTypeNotifications} = typenotification(ApiUrl)
// se importan las funciones de images publication
const {createimages_publication, getimages_publication, updateimages_publication, deleteimages_publication, getAllimages_publications} = imagespublication(ApiUrl)
// se importan las funciones de images publication
const {createtypespublication, gettypespublication, updatetypespublication, deletetypespublication, getAlltypespublications} = typepublication(ApiUrl)
// se importan las funciones de likes
const {createlike, getlike, updatelike, deletelike, getAlllikes,getAllLikesOnePerson} = Like(ApiUrl)




  // ------> la parte de abajo se encarga de el envio de la data atraves del hook <----------
  const value = useMemo(()=>{
    return ({
      // aqui se retorna lo que se desea utilizar en el contexto
      // auth
      LoginUser,
      isActive,
      logoutUser,
      logout,
      resHandler,
      register,
      data,
      error,
      resul,
      // user
      createUser,
      getAllPublicationPerson,
      getUser,
      getAllUsers,
      updateUser,
      deleteUser,
      // userdata
      createData,
      getData,
      updateData,
      //publication
      getAllPublication,
      getOnePublication,
      createPublication,
      updatePublication,
      deletePublication,
      // comments
      createComment,
      getComment,
      getAllComment,
      updateComment,
      deleteComment,
      // report
      getAllReports,
      createReport,
      getReport,
      updateReport,
      deleteReport,
      //Esteban
      //Role
      getRole, createRole, updateRole, deleteRole,
      //report
      getReport, createReport, updateReport, deleteReport, getAllReports,
      //Notifications
      getNotification, createNotification, updateNotification, deleteNotification, getAllNotifications,
      //Notifications
      getTypeNotification, createTypeNotification, updateTypeNotification, deleteTypeNotification, getAllTypeNotifications,
      //imagesPublication
      createimages_publication, getimages_publication, updateimages_publication, deleteimages_publication, getAllimages_publications,
    //typePublication
    createtypespublication, gettypespublication, updatetypespublication, deletetypespublication, getAlltypespublications,
      //like
      createlike, getlike, updatelike, deletelike, getAlllikes,getAllLikesOnePerson
  })
    // nota: como segundo parametro se envia los hooks que no se desean alterar
  },[data,error,resul])

  return (
    // aqui se genera el jsx que genera el provedor
    <ApiContext.Provider value={value} {...props} />
  );
};

// aqui se genera el return del hook
export function useApiContext(){
  const context = useContext(ApiContext)
  if(!context){
    throw new Error('este hook debe estar dentro del provedor Api')
  }
  return context;
};