import React from 'react';
import './Canvas.css'

class Canvas extends React.Component {
    canvas = React.createRef();

    render() {
        return (
            <canvas 
            ref={this.canvas} 
            width={window.innerWidth} 
            height={window.innerHeight}/>
        );
    }
}

export default Canvas;