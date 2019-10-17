import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import popper from 'popper.js';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './Componentes/Navbar/navbar'
import Platillos from './Componentes/Platillos/platillos'
import UploadFood from './Componentes/UploadFood/upload'
import Carta from './Componentes/Carta/carta'
import Carrito from './Componentes/Delivery/delivery'
import Login from './Componentes/LogIn/log2'
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar/>
            <main>
              <Route exact path='/' component={Login}/>

              <Route exact path='/UploadFood' component={UploadFood}/>

              <Route exact path='/Platillos' component={Platillos}/>

              <Route exact path='/Order' component={Carta}/>

              <Route exact path='/Carrito' component={Carrito}/>
            </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
