let MinHeap = require("./MinHeap.js");
module.exports = (function() {
    function minimum() {
        return this.minHeap.heap.array[0];
    }

    function extractMinimum() {
        let heap = this.minHeap.heap;
        if (heap.heapSize < 0) {
            throw new Error("Heap underflow");
        }
        let min = heap.array[0];
        heap.array[0] = heap.array[heap.heapSize];
        heap.heapSize -= 1;
        this.minHeap.heapify(0);
        return min;
    }

    function increaseKey(node, key) {
        let heap = this.minHeap.heap;
        if (key < heap.array[node]) {
            throw new Error("New key is smaller than current key");
        }
        heap.array[node] = key;
        while (node > 0 && heap.array[this.minHeap.parent(node)] > heap.array[node]) {
            let temp = heap.array[this.minHeap.parent(node)];
            heap.array[this.minHeap.parent(node)] = heap.array[node];
            heap.array[node] = temp;
            node = this.minHeap.parent(node);
        }
    }

    function insert(key) {
        let heap = this.minHeap.heap;
        heap.heapSize += 1;
        heap.array[heap.heapSize] = Math.NEGATIVE_INFINITY;
        this.increaseKey(heap.heapSize, key);
    }

    return function MinPriorityQueue(array) {
        this.minHeap = new MinHeap(array);
        this.minimum = minimum;
        this.extractMinimum = extractMinimum;
        this.increaseKey = increaseKey;
        this.insert = insert;
    }
})();