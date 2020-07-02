import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Break } from './components/Break'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Header></Header>
        <div id="sections">
          <About></About>
        </div>
        <Break num="break2" src="./images/alaska.jpeg"></Break>
        <div id="sections">
          <Experience></Experience>
        </div>
        <Break num="break" src="./images/art.jpeg"></Break>
        <div id="sections">
          <Portfolio></Portfolio>
        </div>
        <Contact></Contact>
        <p style={{ "textAlign": "center" }}>Copyright © 2020 Liza Pressman, all rights reserved</p>

      </div>
    );
  }
}

export default App;