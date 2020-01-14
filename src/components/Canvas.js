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
        this.props.shuffleRef.current.onclick = this.shuffleItems;
        this.setState({items: new ItemList(this.props.numItems)}, this.drawLines);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.numItems !== this.props.numItems)
            this.setState({items: new ItemList(this.props.numItems)}, this.drawLines);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeCanvas);
        this.props.shuffleRef.current.onclick = () => {console.log("shuffling")};
    }

    resizeCanvas = () => {
        this.canvasRef.current.width = window.innerWidth;
        this.canvasRef.current.height = window.innerHeight;
        this.state.items.forEach((item) => {item.recalculate(item.index)});
        this.drawLines();
    }

    shuffleItems = () => {
        this.state.items.shuffle();
        this.drawLines();
    }

    drawLines() {
        const context = this.canvasRef.current.getContext('2d');
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "#88a8db";
        this.state.items.forEach((item) => {
            context.fillRect(item.x, item.y, item.width, item.height);
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