import React, { Component } from 'react';
import axios from 'axios';

export class FoodCard extends Component{

    state = {
        platillos:[]
    }

    componentDidMount(){
        
        axios.delete(`https://tamales-server.herokuapp.com/all/food`)
        .then(response =>{ 
            console.log(response.data)
            this.setState({
                 platillos:response.data
            })
        })
        .catch(err => console.log(err))
    }

    /* exportar renders de props */


    mandarCarrito(id){
        alert('Mandar axios para actualizar en el endpoint que hciieron para actualizar el platillo con id: '+id)
    }

    renderPlatillos(){
        return this.state.platillos.map(platillo => {
            return (
                <div className="card" style={{width: '18rem'}}>
                    <img src={platillo.img_platillo} style={{width: '20rem'}} className="card-img-top" alt="Platillo Recomendado"/>
                    <div className="card-body">
                        <h5 className="card-title">{platillo.platillo}</h5>
                        <p className="card-text">{platillo.picante}</p>
                        <p className="card-text">{platillo.restaurante}</p>
                        <p className="card-text">{platillo.ingredientes}</p>
                        <p className="card-text">{platillo.descripcion}</p>
                        <button type="button" className="btn btn-danger" onClick={()=>this.mandarCarrito(platillo._id)}>Borrar</button>
                    </div>
                </div>
            )
        })
    }

    render(){
        return (
            <div className='card-container'>
                {
                    this.renderPlatillos()
                }
            </div>
        )
        
    }
}

export default FoodCard
