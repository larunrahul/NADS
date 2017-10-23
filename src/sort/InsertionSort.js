module.exports = (function () {
    function insertionSort(array) {
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    function insertionSortDescending(array) {
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] < key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    function recursiveInsertionSort(array) {
        sort(array, array.length - 1);
    }

    function sort(array, index) {
        if (index > 0) {
            sort(array, index - 1);
            let j = index - 1;
            let key = array[index];
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    return {
        insertionSort,
        insertionSortDescending,
        recursiveInsertionSort
    }
})();