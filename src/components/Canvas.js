import React from 'react';
import './Canvas.css'

class Canvas extends React.Component {
    canvasRef = React.createRef();

    componentDidMount() {
        window.addEventListener("resize", this.resizeCanvas)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeCanvas);
    }

    resizeCanvas = () => {
        this.canvasRef.current.width = window.innerWidth;
        this.canvasRef.current.height = window.innerHeight;
        this.draw();
    }

    draw() {
        const ctx = this.canvasRef.current.getContext('2d');
        ctx.fillRect(100, 100, 100, 100);
    }

    render() {
        return (
            <canvas 
            ref={this.canvasRef} 
            width={window.innerWidth} 
            height={window.innerHeight}/>
        );
    }
}

export default Canvas;