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
        this.props.sortRef.current.onclick = this.sortItems;
        this.setState({items: new ItemList(this.props.numItems)}, this.drawLines);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.numItems !== this.props.numItems)
            this.setState({items: new ItemList(this.props.numItems)}, this.drawLines);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeCanvas);
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

    sortItems = () => {
        if (!this.state.items.isSorting) {
            this.state.items.unmarkAll();
            console.log("sort button pressed");
        }
        this.props.toggleSorting();
        this.state.items.toggleSorting();
        this.sortHelper(this.state.items.sorter(this.props.selectedAlgo));
    }

    sortHelper = (sorter) => {
        if(this.state.items.isSorting) {
            sorter.next();
            this.drawLines();
            setTimeout(this.sortHelper, 1000 - (this.props.speed / 10 * 100), sorter);
        } else {
            this.props.toggleSorting();
        }
    }

    drawLines() {
        const context = this.canvasRef.current.getContext('2d');
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.state.items.forEach((item) => {
            if(item.marked) {
                context.fillStyle = 'white';
                context.strokeStyle = 'black';
                context.fillRect(item.x, item.y, item.width, item.height);
                context.strokeRect(item.x, item.y, item.width, item.height);
            } else {
                context.fillStyle = item.color;
                context.fillRect(item.x, item.y, item.width, item.height);
            }
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