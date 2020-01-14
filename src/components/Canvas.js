import React from 'react';
import ItemList from '../ItemList';
import '../css/Canvas.css'

class Canvas extends React.Component {
    state = {
        items: null
    }

    canvasRef = React.createRef();

    componentDidMount() {
        window.addEventListener("resize", this.resizeCanvas);
        this.setState({items: new ItemList(100)}, this.drawLines);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeCanvas);
    }

    resizeCanvas = () => {
        this.canvasRef.current.width = window.innerWidth;
        this.canvasRef.current.height = window.innerHeight;
        // this.draw();
    }

    drawLines() {
        const ctx = this.canvasRef.current.getContext('2d');
        ctx.fillStyle = "#e4a5e6";
        this.state.items.forEach((line) => {
            console.log("test");
            ctx.fillRect(line.x, line.y, line.width, line.height);
        });
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