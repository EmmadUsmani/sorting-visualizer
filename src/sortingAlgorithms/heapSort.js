// Adapted from https://www.geeksforgeeks.org/heap-sort/
function* heapSort(list) {
    let n = list.length;
    // Max-heapify list
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        yield* heapify(list, n, i);
    // Move max to end of list
    for (let i = n - 1; i >= 0; i--) {
        let temp = list[0];
        list[0] = list[i];
        list[0].update(0);
        list[i] = temp;
        list[i].update(i);
        // Heapify unsorted portion
        yield* heapify(list, i, 0);
    }
}

// Heapify subtree rooted at index i of size n
function* heapify(list, n, i) {
    let largest = i;
    let l = 2 * i + 1; // index of left child
    let r = 2 * i + 2; // index of right child

    if (l < n) {
        // Marking comparison
        list.mark(l);
        list.mark(largest);
        yield;
        list.unmarkAll();
        if (list[l].value > list[largest].value)
            largest = l;
    }

    if (r < n) {
        // Marking comparison
        list.mark(r);
        list.mark(largest);
        yield;
        list.unmarkAll();
        if (list[r].value > list[largest].value)
            largest = r;
    }
    
    // Swap largest into root
    if (largest !== i) {
        let temp = list[i];
        list[i] = list[largest];
        list[i].update(i);
        list[largest] = temp;
        list[largest].update(largest);
        // Heapify affected subtree
        yield* heapify(list, n, largest);
    }
}

export default heapSort;