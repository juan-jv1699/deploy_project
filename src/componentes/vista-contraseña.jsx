import React from "react";
import './css/login.css';
import{Link, Outlet} from'react-router-dom'


function VistaContraseña() {
return(
    <div className="containerRed containerRedOlvide" >
        <div className="forms-container">
            <div className="signin-signup">
                <Outlet/>
            </div>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                   <h3>Ni tú, ni yo ni nadie golpea tan fuerte como la vida. Pero no importa qué tan duro lo hagas. Importa lo duro que resistas.</h3>
                </div>
                <img className="image" src={require('../images/muñeco.png')}  style={{width:'400px'}}/>
            </div>
        </div>
    </div>

)
}

export default VistaContraseña;
