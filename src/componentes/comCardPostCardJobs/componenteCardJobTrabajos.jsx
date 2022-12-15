import React from "react";
function CardJobTrabajo({tituloTrabajo,contentCardJob,image}){
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={image}className="card-img-top" alt="..."/>
            <div className="card-body trb">
                <h5 className="card-title">{tituloTrabajo}</h5>
                <p className="card-text">{contentCardJob}</p>
            </div>
        </div>
    );
}
export default CardJobTrabajo