import testSort from './testSort';

describe('mergeSort', () => {
    it('should correctly sort ItemLists of size 1 to 100', testSort('Merge Sort'));
});