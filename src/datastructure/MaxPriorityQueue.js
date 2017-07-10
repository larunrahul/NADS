let MaxHeap = require("./MaxHeap.js");
module.exports = (function() {
    function maximum() {
        return this.maxHeap.heap.array[0];
    }

    function extractMaximum() {
        let heap = this.maxHeap.heap;
        if (heap.heapSize < 0) {
            throw new Error("Heap underflow");
        }
        let max = heap.array[0];
        heap.array[0] = heap.array[heap.heapSize];
        heap.heapSize -= 1;
        this.maxHeap.heapify(0);
        return max;
    }

    function increaseKey(node, key) {
        let heap = this.maxHeap.heap;
        if (key < heap.array[node]) {
            throw new Error("New key is smaller than current key");
        }
        heap.array[node] = key;
        while (node > 0 && heap.array[this.maxHeap.parent(node)] < heap.array[node]) {
            let temp = heap.array[this.maxHeap.parent(node)];
            heap.array[this.maxHeap.parent(node)] = heap.array[node];
            heap.array[node] = temp;
            node = this.maxHeap.parent(node);
        }
    }

    function heapInsert(key) {
        let heap = this.maxHeap.heap;
        heap.heapSize += 1;
        heap.array[heap.heapSize] = Number.NEGATIVE_INFINITY;
        this.increaseKey(heap.heapSize, key);
    }

    function heapDelete(position) {
        let heap = this.maxHeap.heap;
        let temp = heap.array[position];
        heap.array[position] = heap.array[heap.heapSize];
        heap.array[heap.heapSize] = temp;
        heap.heapSize -= 1;
        if (heap.array[position] > heap.array[this.maxHeap.parent(position)]) {
            increaseKey(position, heap.array[position]);
        } else {
            this.maxHeap.heapify(position);
        }
    }

    return function MaxPriorityQueue(array) {
        this.maxHeap = new MaxHeap(array);
        this.maximum = maximum;
        this.extractMaximum = extractMaximum;
        this.increaseKey = increaseKey;
        this.insert = heapInsert;
        this.delete = heapDelete;
    }
})();
