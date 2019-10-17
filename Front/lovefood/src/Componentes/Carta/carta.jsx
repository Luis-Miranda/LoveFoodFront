import React, { Component } from 'react';
import axios from 'axios';
import './carta.css';

export class FoodCardOrder extends Component{

    state = {
        carta:[]
    }

    componentDidMount(){
        
        axios.get(`https://tamales-server.herokuapp.com/all/food`)
        .then(response =>{ 
            console.log(response.data)
            this.setState({
                 carta:response.data
            })
        })
        .catch(err => console.log(err))
    }


    mandarCarrito(id){
        alert('Mandar axios para actualizar en el endpoint que hciieron para actualizar el platillo con id: '+id)
    }

    renderCarta(){
        return this.state.carta.map(platillo => {
            return (
                <div className="card" style={{width: '18rem'}}>
                    <img src={platillo.img_platillo} style={{width: '20rem'}} className="card-img-top" alt="Platillo Recomendado"/>
                    <div className="card-body">
                        <h5 className="card-title">{platillo.platillo}</h5>
                        <p className="card-text">{platillo.picante}</p>
                        <p className="card-text">{platillo.restaurante}</p>
                        <p className="card-text">{platillo.ingredientes}</p>
                        <p className="card-text">{platillo.descripcion}</p>
                        <button type="button" className="btn btn-success" onClick={()=>this.mandarCarrito(platillo._id)}>Ordenar</button>
                    </div>
                </div>
            )
        })
    }

    render(){
        return (
            <div className='card-container'>
                {
                    this.renderCarta()
                }
            </div>
        )
        
    }
}

export default FoodCardOrder
