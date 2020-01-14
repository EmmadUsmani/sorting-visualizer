import Item from './Item'

class ItemList extends Array {
    constructor(input) {
        super();
        this.generateList(input);
    }

    generateList(numItems) {
        const width = window.innerWidth / numItems;
        for (let i = 0; i < numItems; i++) {
            const height = window.innerHeight / numItems * (i + 1);
            this.push(new Item(i, i, i * width, window.innerHeight - height, width, height, numItems));
        }
    }
}

export default ItemList;