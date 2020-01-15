import ItemList from '../ItemList';

function testSort(algo) {
    return () => {
        for (let i = 1; i <= 100; i++) {
            let sorted = new ItemList(i);
            let toSort = new ItemList(i);
            toSort.shuffle();
            sort(toSort, algo);
            expect(toSort).toEqual(sorted);
        }
    }
}

function sort(list, algo) {
    const sorter = list.sorter(algo);
    list.toggleSorting();
    while(list.isSorting) {
        sorter.next();
    }
}

export default testSort;