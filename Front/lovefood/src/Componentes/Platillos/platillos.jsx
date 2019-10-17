import React, { Component } from 'react';
import axios from 'axios';

function FoodCard(props){

    const removeFood=(id)=>{
        
        axios.delete(`https://tamales-server.herokuapp.com/all/food/${id}`)
        .then(res =>{ 
            console.log(res)
        })
    }

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.image} style={{width: '20rem'}} className="card-img-top" alt="Platillo Recomendado"/>
                <div className="card-body">
                    <h5 className="card-title">{props.platillo}</h5>
                    <p className="card-text">{props.picante}</p>
                    <p className="card-text">{props.restaurante}</p>
                    <p className="card-text">{props.ingredientes}</p>
                    <p className="card-text">{props.descripcion}</p>
                    <button type="button" className="btn btn-danger" onClick={()=>removeFood(props.id)}>Borrar</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
