import React, { Component } from 'react'
import axios from 'axios'
/* import './log2.css'
import logo from '' */

export class log2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <video autoplay muted loop id="myVideo">
                        <source src="./We_love_food2.mp4" type="video/mp4" />
                    </video>
                </div>
                <section class="contentContainer">
                    <div class="content">
                        <h1 class="titulo"><img class="logo" src="./imagenes/logo.png" alt="Tamlapp" /></h1>
                        <button type="button" class="btn btn-outline-primary" id="face">
                            <a href="https://www.facebook.com/" target="_blank">Log with Facebook</a>
                        </button>
                        <div class="username">
                            <input type="text" class="form-control" placeholder="Usuario" aria-label="Username"
                                aria-describedby="basic-addon1" id="username" />
                        </div>
                        <div class="contrasena">
                            <input type="password" class="form-control" placeholder="Contraseña" aria-label="Recipient's username "
                                aria-describedby="button-addon2" id="password"/>
                        </div>
                        <div class="direccion">

                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2 log">Ingresar</button>
                                <a href="./index.html" href="./delivery.html"> <button class="btn btn-outline-secondary noV"
                                    type="button" id="button-addon2 acceso" id="acceso">Puedes accesar</button></a>
                            </div>
                        </div>
                    </div>
                </section>
             </div>
                        )
    }
}

export default log2
