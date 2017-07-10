var assert = require('assert');
var MinPriorityQueue = require("../../src/datastructure/MinPriorityQueue.js");
describe("Min Priority Queue", function() {
    describe("Minimum", function() {
        it("Should return minimum element from heap", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            let mpq = new MinPriorityQueue(array);
            assert.equal(1, mpq.minimum());
        });
    });
    describe("Extract Minimum", function() {
        it("Should return minimum element from heap and remove it from heap", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            let mpq = new MinPriorityQueue(array);
            assert.equal(1, mpq.extractMinimum());
            assert.equal(2, mpq.extractMinimum());
            assert.equal(3, mpq.extractMinimum());
            assert.equal(4, mpq.extractMinimum());
            assert.equal(7, mpq.extractMinimum());
            assert.equal(8, mpq.extractMinimum());
            assert.equal(9, mpq.extractMinimum());
            assert.equal(10, mpq.extractMinimum());
            assert.equal(14, mpq.extractMinimum());
            assert.equal(16, mpq.extractMinimum());
            try {
                mpq.extractMinimum();
                throw new Error("This should not be thrown");
            } catch (err) {
                assert.equal("Heap underflow", err.message);
            }
        });
    });
    describe("Insert", function() {
        it("Should insert the given element into heap", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            let mpq = new MinPriorityQueue(array);
            assert.equal(1, mpq.extractMinimum());
            mpq.insert(1);
            assert.deepEqual([1, 2, 3, 8, 4, 9, 10, 14, 16, 7], array);
        });
    });
    describe("Delete", function() {
        it("Should delete the element at given position in heap", function() {
            let array = [25, 20, 16, 10, 18, 9, 13, 1, 2, 17];
            let mpq = new MinPriorityQueue(array);
            mpq.delete(0);
            assert.deepEqual([2, 10, 9, 18, 17, 16, 13, 25, 20, 1], array);
            mpq.insert(3);
            assert.deepEqual([2, 3, 9, 18, 10, 16, 13, 25, 20, 17], array);
        });
    });
});
