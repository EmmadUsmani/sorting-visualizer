import testSort from './testSort';

describe('mergeSort', () => {
    it('should correctly sort ItemLists of size 1 to 100', testSort('Merge Sort'));
});

describe('insertionSort', () => {
    it('should correctly sort ItemLists of size 1 to 100', testSort('Insertion Sort'));
});

describe('selectionSort', () => {
    it('should correctly sort ItemLists of size 1 to 100', testSort('Selection Sort'));
});

describe('heapSort', () => {
    it('should correctly sort ItemLists of size 1 to 100', testSort('Heap Sort'));
});