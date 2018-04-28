import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Genres from './genres/genres';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';



class App extends Component{

  render() {

    return(
      <div>
      <Navbar />
      <Genres />
      </div>
    )

  }

}


export default App;
