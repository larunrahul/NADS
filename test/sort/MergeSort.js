var assert = require('assert');
var api = require("../../src/sort/MergeSort.js");
describe("Insertion Sort", function () {
    describe("Ascending", function () {
        it("Should sort random numbers in ascending order", function () {
            let array = [1, 2, 3, 4, 9, 16, 1, 2, 7, 8, 10, 14];
            api.mergeSort(array)
            assert.deepEqual([1, 1, 2, 2, 3, 4, 7, 8, 9, 10, 14, 16], array);
        });
    });
    describe("Descending", function () {
        it("Should sort random numbers in descending order", function () {
            let array = [1, 2, 3, 4, 9, 16, 1, 2, 7, 8, 10, 14];
            api.mergeSortDescending(array)
            assert.deepEqual([16, 14, 10, 9, 8, 7, 4, 3, 2, 2, 1, 1], array);
        });
    });
});
