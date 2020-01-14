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
        this.setState({items: new ItemList(this.props.numItems)}, this.drawLines);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeCanvas);
    }

    resizeCanvas = () => {
        this.canvasRef.current.width = window.innerWidth;
        this.canvasRef.current.height = window.innerHeight;
        this.state.items.forEach((item) => {item.recalculate(item.index)} );
        this.drawLines();
    }

    drawLines() {
        const ctx = this.canvasRef.current.getContext('2d');
        ctx.fillStyle = "#88a8db";
        this.state.items.forEach((item) => {
            ctx.fillRect(item.x, item.y, item.width, item.height);
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