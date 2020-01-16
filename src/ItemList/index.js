import Item from './Item'
import mergeSort from '../sortingAlgorithms/mergeSort';
import insertionSort from '../sortingAlgorithms/insertionSort';

class ItemList extends Array {
    constructor(input) {
        super();
        this.generateList(input);
        this.isSorting = false;
        this.marked = {};
    }

    generateList(numItems) {
        const width = window.innerWidth / numItems;
        for (let i = 0; i < numItems; i++) {
            const height = window.innerHeight / numItems * (i + 1);
            this.push(new Item(i, i, i * width, window.innerHeight - height, width, height, numItems));
        }
    }

    mark(index) {
        this[index].mark();
        this.marked[index] = this[index];
    }

    unmark(index) {
        this[index].unmark();
        delete this.marked[index];
    }

    unmarkAll() {
        for (const index in this.marked) {
            this[index].unmark();
        }
        this.marked = {};
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
            this[i].unmark();
        }
    }

    *sorter(algo) {
        if(algo === "Merge Sort") {
            yield* mergeSort(this);
        } else if(algo === "Insertion Sort") {
            yield* insertionSort(this);
        }
        this.toggleSorting();
    }

    toggleSorting() {
        this.isSorting = !this.isSorting;
    }
}

export default ItemList;