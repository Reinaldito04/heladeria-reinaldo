import React from "react";
import "./hojas-estilos/Cards.css";
import BasicModal from "./BasicModal";


function Cards({ tittle, imageUrl, body ,texto , precio ,imagen}) {
  return (
   
    <div className="container">
        <div className="card card-container-css" >
            <img className="card-img-top img-card" src={imageUrl}/>
            <div className="card-body">
                <p className="card-text text-center fw-bold text-capitalize fs-2">
                    {tittle}
                </p>
                <p className="card-text">
                    {body}
                </p>
                <button className="btn text-center justify-content-center text-center align-center">
                <BasicModal
                texto={ texto}
                precio={precio}
                imagen={imagen}/>
                </button>
            </div>
        </div>
        
    </div>


  );
}

export default Cards;
