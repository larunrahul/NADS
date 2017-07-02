let MinHeap = require("../datastructure/MinHeap.js");
let MaxHeap = require("../datastructure/MaxHeap.js");
module.exports = (function() {

    function heapSort(array) {
        let maxHeap = new MaxHeap(array);
        let heap = maxHeap.heap;
        for (let i = heap.array.length - 1; i >= 1; i--) {
            let temp = heap.array[0];
            heap.array[0] = heap.array[i];
            heap.array[i] = temp;
            heap.heapSize -= 1;
            maxHeap.heapify(0);
        }
    }

    function heapSortDescending(array) {
      let minHeap = new MinHeap(array);
      let heap = minHeap.heap;
      for (let i = heap.array.length - 1; i >= 1; i--) {
          let temp = heap.array[0];
          heap.array[0] = heap.array[i];
          heap.array[i] = temp;
          heap.heapSize -= 1;
          minHeap.heapify(0);
      }
    }

    return {
        heapSort,
        heapSortDescending
    }

})();
