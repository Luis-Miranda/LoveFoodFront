import React, { Component } from 'react';
import axios from 'axios';
import './carta2.css'

export class FoodCardOrder extends Component{

    state = {
        platillos:[],
        searchValue:""
    }

    componentDidMount(){
        this.getPlatillos()
        
    }

    getPlatillos(){
        axios.get(`https://tamales-server.herokuapp.com/all/food`)
        .then(response =>{ 
            this.setState({
                 platillos:response.data,
            })
        })
        .catch(err => console.log(err))
    }

    borrarPlatillo(id){
        axios.delete(`https://tamales-server.herokuapp.com/delete/food${id}`)
        .then(res =>{
            this.getPlatillos()
        })
        .catch(err => console.log(err))
    }

    buscaPlatilos = (e)=>{
        this.setState({
            searchValue:e.target.value.toLowerCase()
        })
    }

    renderPlatillos=()=>{
        return this.state.platillos.map(platillo => {
            if(platillo.platillo.toLowerCase().startsWith(this.state.searchValue)){
                return (
                    <div className="card" >
                        <img src={platillo.img_platillo} style={{width: '15rem'}} className="imgprro card-img-top" alt="Platillo Recomendado"/>
                        <div className="card-body">
                            <h5 className="card-title">{platillo.platillo}</h5>
                            <p className="card-text">{platillo.picante}</p>
                            <img className="logoRest" src={platillo.restaurante} alt="restaurante"/>
                            <p className="card-text">{platillo.ingredientes}</p>
                            <p className="card-text">{platillo.descripcion}</p>
                            <button type="button" className="btn btn-success" onClick={()=>this.mandarCarrito(platillo._id)}>Ordenar</button>
                        </div>
                    </div>
                )
            }
        })

    }

    render(){
        return (
            <div className='card-container'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="¿De que tienes antojo?" onChange={this.buscaPlatilos}/>
            </div>
                {
                    this.renderPlatillos()
                }
            </div>
        )
        
    }
}

export default FoodCardOrder
