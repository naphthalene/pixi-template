import React from 'react';
import * as PIXI from 'pixi.js';

export default class Game extends React.Component {
    componentDidMount() {
        // Create a Pixi Application
        let type = "WebGL";
        if(!PIXI.utils.isWebGLSupported()){
            type = "canvas";
        }
        PIXI.utils.sayHello(type);

        let app = new PIXI.Application({
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        });
        const element = document.getElementById('game-container');
        element.parentNode.replaceChild(app.view, element);
    }

    render() {
        return (
            <div id="game-container"
                 className="pixiStage"
                 ref={el => (this.container = el)}/>
        );
    }
}
