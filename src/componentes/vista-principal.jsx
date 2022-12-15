import React ,{useState}from "react";
import './css/login.css';
import{Link} from'react-router-dom'
import{motion} from'framer-motion';
import {useApiContext} from "../hooks/context/ApiContext";
import { uploadFile } from "../firebase/config";
import { useEffect } from "react";
import { async } from "@firebase/util";


function VistaPrincipal(props) {
    // Funciones de registro y entrar
    const {LoginUser,register,error} = useApiContext()
    //funciones de tomar los valores de los inputs
    // Constante para manejar el estado del input nombre
    const [name, setName] = useState('');
    // Constante para manejar el estado del input email
    const [email, setEmail] = useState('');
    // Constante para manejar el estado del input password
    const [password, setPassword] = useState('');
    // Constante para manejar el estado del input birthday
    const [birthday, setBirthday] = useState('');
    // Constante para manejar el estado del input cc
    const [cc, setCc] = useState('');
    // Seleccionar imagen y subirla
    const [file, setFile] = useState(null)
    // Previsualizar la imagen
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // Funcion para cambiar a vista de registrarse
    const AddClick = ()=>{
        document.querySelector('.containerRed').classList.add("sign-up-mode")
    }
    // Funcion para cambiar a vista de ingresar
    const RemoveClick = ()=>{
        document.querySelector('.containerRed').classList.remove("sign-up-mode")
    }
    // Funcon para meter dos funciones necesarias
    // const someOnclicks = ()=>{
    //     RemoveClick();
    //     registrarse();
        
    // }
    const registrarse = async (name,email,password,birthday,cc,image)=>{
        let res = await register(name,email,password,birthday,cc,image)
        setName("")
        setEmail("")
        setPassword("")
        setBirthday("")
        setCc("")
        setFile(null)
    }
    // Controlando el envio de datos
    const controladorDelEnvio = async (e) => {
        e.preventDefault();
        const result = await uploadFile(file)
        registrarse(name,email,password,birthday,cc,result)
      };

     

    // Useffect para crear estado de la imagen
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    },[selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    return(
        <motion.div className="containerRed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        {error ?
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Ups!</strong> Credenciales incorrectas
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            :
                            ''
                        }
                        <h2 className="title">Ingresar</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input id="password1" type="password" placeholder="Contraseña"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="main_div my-5">
                            <Link to='/vistaPrincipal-red'><button onClick={()=>LoginUser(email,password)}>Ingresar</button></Link>
                        </div>
                        <Link to='/vista-contraseña'><p className="social-text olv">Olvidé mi contraseña</p></Link>
                    </form>
                    {/*  */}
                    <form action="#" className="sign-up-form"  onSubmit={controladorDelEnvio}>
                        <h2 className="title">Crear</h2>
                        <h3>Escoge una foto</h3>
                        <div className="imagePost">
                            <label for='file-input'>
                                {selectedFile ? <img src={preview} width='100px' className="rounded-5 m-3"/> : <img src={require('../images/imagenPerfil.png')} width='100px' className="rounded-5 m-3" />  }
                            </label>
                            <input id="file-input" type="file" onChange={(e)=>{setFile(e.target.files[0]) ; onSelectFile(e);}}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="date" placeholder="Cumpleaños" onChange={(e) => setBirthday(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="number" placeholder="Identificacion" onChange={(e) => setCc(e.target.value)}/>
                        </div>
                        <div className="main_div my-5">
                            <button type="submit" className="fw-bold" onClick={()=>RemoveClick()} >Crear</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>¿Eres nuevo?</h3>
                        <p>
                            Crea tu cuenta y haz parte de esta gran familia
                        </p>
                        <button className="btn transparent w-50" id="sign-up-btn" onClick={AddClick}>
                            Crear cuenta
                        </button>
                    </div>
                    <img src={require('../images/imageLogin.png')} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>¿Ya eres uno de nosotros?</h3>
                        <p>
                            Ingresa a tu cuenta para que no te pierdas de todo lo que tenemos para ti
                        </p>
                        <button className="btn transparent w-50" id="sign-in-btn" onClick={RemoveClick}>
                            Ingresar cuenta
                        </button>
                    </div>
                <img src={require('../images/imageCreate.png')} className="image" alt="" />
                </div>
            </div>
        </motion.div>
    )
}
export default VistaPrincipal;
