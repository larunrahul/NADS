var assert = require('assert');
var MaxPriorityQueue = require("../../src/datastructure/MaxPriorityQueue.js");
describe("Max Priority Queue", function() {
    describe("Maximum", function() {
        it("Should return maximum element from heap", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            let mpq = new MaxPriorityQueue(array);
            assert.equal(16, mpq.maximum());
        });
    });
    describe("Extract Maximum", function() {
        it("Should return maximum element from heap and remove it from heap", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            let mpq = new MaxPriorityQueue(array);
            assert.equal(16, mpq.extractMaximum());
            assert.equal(14, mpq.extractMaximum());
            assert.equal(10, mpq.extractMaximum());
            assert.equal(9, mpq.extractMaximum());
            assert.equal(8, mpq.extractMaximum());
            assert.equal(7, mpq.extractMaximum());
            assert.equal(4, mpq.extractMaximum());
            assert.equal(3, mpq.extractMaximum());
            assert.equal(2, mpq.extractMaximum());
            assert.equal(1, mpq.extractMaximum());
            try{
              mpq.extractMaximum();
              throw new Error("This should not be thrown");
            }catch(err){
              assert.equal("Heap underflow", err.message);
            }
        });
    });
    describe("Insert", function() {
        it("Should insert the given element into heap", function() {
            let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
            let mpq = new MaxPriorityQueue(array);
            assert.equal(16, mpq.extractMaximum());
            mpq.insert(15);
            assert.deepEqual([15, 14, 10, 4, 8, 9, 3, 2, 1, 7], array);
        });
    });
});
