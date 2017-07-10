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

    function decreaseKey(node, key) {
        let heap = this.minHeap.heap;
        if (key > heap.array[node]) {
            throw new Error("New key is greater than current key");
        }
        heap.array[node] = key;
        while (node > 0 && heap.array[this.minHeap.parent(node)] > heap.array[node]) {
            let temp = heap.array[this.minHeap.parent(node)];
            heap.array[this.minHeap.parent(node)] = heap.array[node];
            heap.array[node] = temp;
            node = this.minHeap.parent(node);
        }
    }

    function heapInsert(key) {
        let heap = this.minHeap.heap;
        heap.heapSize += 1;
        heap.array[heap.heapSize] = Number.POSITIVE_INFINITY;
        this.decreaseKey(heap.heapSize, key);
    }

    function heapDelete(position) {
        let heap = this.minHeap.heap;
        let temp = heap.array[position];
        heap.array[position] = heap.array[heap.heapSize];
        heap.array[heap.heapSize] = temp;
        heap.heapSize -= 1;
        if (heap.array[position] < heap.array[this.minHeap.parent(position)]) {
            increaseKey(position, heap.array[position]);
        } else {
            this.minHeap.heapify(position);
        }
    }

    return function MinPriorityQueue(array) {
        this.minHeap = new MinHeap(array);
        this.minimum = minimum;
        this.extractMinimum = extractMinimum;
        this.decreaseKey = decreaseKey;
        this.insert = heapInsert;
        this.delete = heapDelete;
    }
})();
