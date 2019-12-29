import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './header.jsx';
import Footer from './footer.jsx';
import Game from './game.jsx';


class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
              <Header header="pixi.js Game"/>
              <Game/>
              <Footer/>
            </div>
        );
    }
}

var mount = document.querySelector('#app');

ReactDOM.render(<App/>, mount);
