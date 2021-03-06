class Item {
    constructor(value, index, x, y, width, height, numItems) {
        this.value = value;
        this.index = index;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.numItems = numItems;
        this.color = this.calculateColor();
        this.marked = false;
    }

    update(index) {
        const width = window.innerWidth / this.numItems;
        const height = window.innerHeight / this.numItems * (this.value+1);
        this.index = index;
        this.x = index *  width;
        this.y = window.innerHeight - height;
        this.width = width;
        this.height = height;
    }

    calculateColor() {
        const degPerItem = 360 / this.numItems;
        return `hsl(${degPerItem * this.value}, 65%, 55%)`;
    }

    mark() {
        this.marked = true;
    }

    unmark() {
        this.marked = false;
    }
    
}

export default Item;