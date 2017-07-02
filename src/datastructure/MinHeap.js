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
        let min = node;
        if (left <= this.heap.heapSize && array[left] < array[node]) {
            min = left;
        }
        if (right <= this.heap.heapSize && array[right] < array[min]) {
            min = right;
        }
        if (min != node) {
            let temp = array[node];
            array[node] = array[min];
            array[min] = temp;
            this.heapify(min);
        }
    }

    return function MinHeap(array){
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
