function* selectionSort(list) {
    // Iterate through entire list
    for (let i = 0; i < list.length; i++) {
        let min = list[i];
        // Find min in unsorted portion of list
        for (let j = i + 1; j < list.length; j++) {
            // Marking comparison
            list.mark(min.index);
            list.mark(j);
            yield;
            list.unmarkAll();
            if (list[j].value < min.value) {
                min = list[j];
            }
        }
        // Swap min into sorted portion
        list[min.index] = list[i];
        list[min.index].recalculate(min.index);
        list[i] = min;
        min.recalculate(i);
    }
}

export default selectionSort;