var assert = require('assert');
var api = require("../../src/sort/SelectionSort.js");
describe("Selection Sort", function() {
    describe("Ascending", function() {
        it("Should sort random numbers in ascending order", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            api.selectionSort(array)
            assert.deepEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16], array);
        });
    });
    describe("Descending", function() {
        it("Should sort random numbers in descending order", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            api.selectionSortDescending(array)
            assert.deepEqual([16, 14, 10, 9, 8, 7, 4, 3, 2, 1], array);
        });
    });
});
