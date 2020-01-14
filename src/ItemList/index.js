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

    // modern Fisher-Yates algorithm, adapted from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffle() {
        let i, j, temp;
        for (i = this.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
        for (i = 0; i < this.length; i++) {
            this[i].recalculate(i);
        }
    }
}

export default ItemList;