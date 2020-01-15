// In-place merge sort, adapted from https://www.geeksforgeeks.org/in-place-merge-sort/
function* mergeSort(list) {
    yield* mergeSortHelper(list, 0, list.length - 1)
}

function* mergeSortHelper(list, l, r) {
    if(l < r) {
        const m = Math.floor(l + (r - l) / 2);
        yield* mergeSortHelper(list, l, m);
        yield* mergeSortHelper(list, m + 1, r);
        yield* merge(list, l, m, r);
    }
}

function* merge(list, start, mid, end) {
    let start2 = mid + 1;
    // Marking comparison
    list[mid].mark();
    list[start2].mark();
    console.log(`comparing ${mid} and ${start2}`);
    yield;
    list[mid].unmark();
    list[start2].unmark();
    // If merge is already sorted, end alg
    if (list[mid].value > list[start2].value) {
        while (start <= mid && start2 <= end) {
            // Marking comparison
            list[start].mark();
            list[start2].mark();
            yield;
            list[start].unmark();
            list[start2].unmark();
            // If element in first list is in correct spot
            if (list[start].value <= list[start2].value) {
                start++;
            } else {
                // Shift elements in first list right, put element in second behind
                let item = list[start2];
                let index = start2;
                while(index !== start) {
                    list[index] = list[index - 1];
                    list[index].recalculate(index);
                    index--;
                }
                list[start] = item;
                list[start].recalculate(start);

                // Increment pointers
                start++;
                mid++;
                start2++;
            }
        }
    }
}

export default mergeSort;