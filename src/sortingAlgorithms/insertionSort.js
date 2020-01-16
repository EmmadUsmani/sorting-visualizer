function* insertionSort(list) {
    // Iterate through every item back in list
    for (let i = 1; i < list.length; i++) {
        let item = list[i];
        let j = i;
        // Marking comparison
        list.mark(j);
        list.mark(j - 1);
        yield;
        list.unmark(j);
        list.unmark(j - 1);
        // Swap item back until items behind it are smaller
        while(j > 0 && item.value < list[j - 1].value) {
            list[j] = list[j-1];
            list[j - 1] = item;
            list[j].update(j);
            list[j - 1].update(j - 1);
            j--;
            if(j > 0) {
                // Marking comparison
                list.mark(j);
                list.mark(j - 1);
                yield;
                list.unmark(j);
                list.unmark(j - 1);
            }
        }
    }
}

export default insertionSort;