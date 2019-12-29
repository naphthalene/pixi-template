import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Stage, Text, Sprite } from '@inlet/react-pixi';

import Header from './header.jsx';
import Footer from './footer.jsx';

const BasicText = () => (
  <Text x={30} y={90} text="Basic text in pixi" />
);

class Content extends Component {
    render() {
        return (
            <Stage options={{ backgroundColor: 0xffffff }}>
              <BasicText />
              <Sprite image="assets/images/oval.svg"/>
            </Stage>
        );
    }
}

class App extends Component {
    render() {
        var page = {
            header: "Pixi Template",
            contents: "Game goes here"
        };
        return (
            <div className="main-wrapper">
              <Header header={page.header}/>
              <Content contents={page.contents}/>
              <Footer/>
            </div>
        );
    }
}

var mount = document.querySelector('#app');

ReactDOM.render(<App/>, mount);
