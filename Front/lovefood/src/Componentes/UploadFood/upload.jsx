import React, { Component } from 'react'
import axios from 'axios';

export class FoodUploader  extends Component {
    constructor(props){
        super(props)
        this.state={
            platillo:'',
            ingredientes:[''],
            picante:'',
            precio: '',
            restaurante:'',
            imgPlatillo:'',
            descripcion:''
        }

    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://tamales-server.herokuapp.com/create/food',this.state)
        .then(response => alert('Platillo añadido'))
        .catch(error => console.log(error))
    }

    onInputChange = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    render() {
        return (
            <div>
                <form className="p-5" onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Platillo</label>
                        <input type="text" className="form-control" id="platillo"
                            onChange={this.onInputChange}
                            value={this.state.platillo}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">ingredientes</label>
                        <input type="text" className="form-control" id="ingredientes"
                            onChange={this.onInputChange}
                            value={this.state.ingredientes}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label for="formGroupExampleInput2">picante</label>
                    <select className="form-control" id="picante" onChange={this.onInputChange} value={this.state.picante}>
                        <option>Nada</option>
                        <option>Poco</option>
                        <option>Medio</option>
                        <option>Picante</option>
                        <option>Muy Picante</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">precio</label>
                        <input type="text" className="form-control" id="precio"
                            onChange={this.onInputChange}
                            value={this.state.precio}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">restaurante</label>
                        <input type="text" className="form-control" id="restaurante"
                            onChange={this.onInputChange}
                            value={this.state.restaurante}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">img_platillo</label>
                        <input type="text" class="form-control" id="imgPlatillo"
                        onChange={this.onInputChange}
                        value={this.state.imgPlatillo}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">descripcion</label>
                        <input type="text" className="form-control" id="descripcion"
                            onChange={this.onInputChange}
                            value={this.state.descripcion}
                        />
                    </div>
                
                    <button className="btn btn-success" type="submit">Guardar</button>
                </form>
            </div>
        )
    }
}

export default FoodUploader
