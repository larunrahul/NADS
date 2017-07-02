let Heap = require("../element/Heap.js");
module.exports = (function() {

    function parent(node) {
        return node == 0 ? node : (node % 2 == 0 ? node / 2 - 1 : node / 2);
    }

    function leftChild(node) {
        return 2 * node + 1;
    }

    function rightChild(node) {
        return 2 * node + 2;
    }

    function heapify(node) {
        let left = leftChild(node);
        let right = rightChild(node);
        let array = this.heap.array;
        let max = node;
        if (left <= this.heap.heapSize && array[left] > array[node]) {
            max = left;
        }
        if (right <= this.heap.heapSize && array[right] > array[max]) {
            max = right;
        }
        if (max != node) {
            let temp = array[node];
            array[node] = array[max];
            array[max] = temp;
            this.heapify(max);
        }
    }

    return function MaxHeap(array){
        this.parent = parent;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.heapify = heapify;
        let heap = new Heap(array, array.length - 1);
        this.heap = heap;
        for(let i = array.length /2 -1; i >=0; i--){
          this.heapify(i);
        }
    };

})();
