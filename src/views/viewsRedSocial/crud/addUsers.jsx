import React,{useState} from "react";
import { Link } from "react-router-dom";
import {useApiContext} from '../../../hooks/context/ApiContext'
function AddUsers(){
    const {createUser}=useApiContext()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cc, setCc] = useState('');
    const [rol, setRol] = useState('');
    // Name
    const ChangeName = event => {
        setName(event.target.value);
    };
    // Email
    const ChangeEmail = event => {
        setEmail(event.target.value);
    };
    // Password
    const ChangePassword = event => {
        setPassword(event.target.value);
    };
    // Birthday
    const ChangeBirthday = event => {
        setBirthday(event.target.value);
    };
    // Cc
    const ChangeCc = event => {
        setCc(event.target.value);
    };
    // Role
    const ChangeRol = event => {
        setRol(event.target.value);
    };
    return(
        <div>
            <form action="#" className="">
                <h2 className="title">Agregar Usuario</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Nombre" onChange={ChangeName}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Correo" onChange={ChangeEmail} />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Contraseña"  onChange={ChangePassword} />
                </div>
                <div className="input-field">
                    <i class="bi bi-calendar-date-fill"></i>
                    <input type="date" placeholder="Cumpleaños" onChange={ChangeBirthday} />
                </div>
                <div className="input-field">
                    <i class="bi bi-card-text"></i>
                    <input type="number" placeholder="Identificacion" onChange={ChangeCc}/>
                </div>
                <div className="input-field">
                    <i class="bi bi-globe2"></i>
                    <select className="select"  onChange= {ChangeRol}>
                        <option selected='true' disabled>Select an option</option>
                        <option Value="2">Usuario</option>
                        <option Value="3">Compañia</option>
                    </select>
                </div>
                <div className="main_div my-5">
                    <Link to='/vista-administrar-rol'>
                        <button className="fw-bold" onClick={()=>createUser(name,email,password,birthday,cc,rol)} >Agregar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default AddUsers