import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/'>
                    <p className="navbar-brand"> We Love Food</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/Order'>
                                    <p className="nav-link">Menu<span className="sr-only">(current)</span></p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Carrito'>
                                    <p className="nav-link" href="#">Carrito</p>
                                </Link>  
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Desarrolladores</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='UploadFood'>
                                        <p className="dropdown-item" >Agregar Platillos</p>
                                    </Link>
                                    
                                    <Link to='Platillos'>
                                        <p className="dropdown-item">Eliminar Platillos</p>
                                    </Link>

                                    <div className="dropdown-divider"></div>
                                </div>
                            </li>
                        </ul>
                        
  </div>
</nav>
               
            </div>
                )
            }
        }
        
        export default Navbar
