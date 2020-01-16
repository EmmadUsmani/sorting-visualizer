import testSort from './testSort';

describe('mergeSort', () => {
    it('should correctly sort ItemLists of size 1 to 200', testSort('Merge Sort'));
});

describe('insertionSort', () => {
    it('should correctly sort ItemLists of size 1 to 200', testSort('Insertion Sort'));
});

describe('selectionSort', () => {
    it('should correctly sort ItemLists of size 1 to 200', testSort('Selection Sort'));
});

describe('heapSort', () => {
    it('should correctly sort ItemLists of size 1 to 200', testSort('Heap Sort'));
});

describe('quickSort', () => {
    it('should correctly sort ItemLists of size 1 to 200', testSort('Quick Sort'));
});