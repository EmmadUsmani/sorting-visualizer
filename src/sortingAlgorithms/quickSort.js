// Adapted from https://www.geeksforgeeks.org/quick-sort/
function* quickSort(list) {
    yield* quickSortHelper(list, 0, list.length-1);
}

function* quickSortHelper(list, low, high) {
    if (low < high) {
        let p = {value: 0}; // p = pivot index after partition
        yield* partition(list, low, high, p);
        // Quick Sort left and right elems
        yield* quickSortHelper(list, low, p.value - 1);
        yield* quickSortHelper(list, p.value + 1, high);
    }
}

function* partition(list, low, high, p) {
    let pivot = list[high]; // Partition on right-most item
    let i = low - 1; // Pointer for last elem less than pivot
    // Moving smaller elems to left of list
    for (let j = low; j < high; j++) {
        // Marking comparison
        list.mark(j);
        list.mark(pivot.index);
        yield;
        list.unmarkAll();
        if (list[j].value < pivot.value) {
            i++;
            // Swap list[j] to end of the smaller elems
            let temp = list[i];
            list[i] = list[j];
            list[i].recalculate(i);
            list[j] = temp;
            list[j].recalculate(j);
        }
    }
    // Swap pivot after smaller elems
    let temp = list[i + 1];
    list[i + 1] = list[high];
    list[i + 1].recalculate(i);
    list[high] = temp;
    list[high].recalculate(high);
    // Setting pivot index
    p.value = i + 1;
} 

export default quickSort;