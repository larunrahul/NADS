var assert = require('assert');
var QuickSort = require("../../../src/sort/quick/QuickSort.js");
var partApi = require("../../../src/sort/quick/LomutoPartition.js");
describe("Quick Sort", function () {
    let api = new QuickSort(partApi);
    describe("Ascending", function () {
        it("Should sort random numbers in ascending order", function () {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            api.sortAscending(array);
            assert.deepEqual(array, [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
        });
        it("Should sort already sorted in ascending order", function () {
            let array = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16];
            api.sortAscending(array);
            assert.deepEqual(array, [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
        });
        it("Should sort array of all same values in ascending order", function () {
            let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            api.sortAscending(array);
            assert.deepEqual(array, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        });
    });
    describe("Descending", function () {
        it("Should sort random numbers in descending order", function () {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            api.sortDescending(array);
            assert.deepEqual(array, [16, 14, 10, 9, 8, 7, 4, 3, 2, 1]);
        });
        it("Should sort already sorted in descending order", function () {
            let array = [16, 14, 10, 9, 8, 7, 4, 3, 2, 1];
            api.sortDescending(array);
            assert.deepEqual(array, [16, 14, 10, 9, 8, 7, 4, 3, 2, 1]);
        });
        it("Should sort array of all same values in descending order", function () {
            let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            api.sortDescending(array);
            assert.deepEqual(array, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        });
    });
});