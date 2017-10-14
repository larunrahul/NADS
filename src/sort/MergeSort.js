module.exports = (function () {

    function mergeSort(array) {
        sort(array, 0, array.length - 1);
    }



    function sort(array, start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            sort(array, start, mid);
            sort(array, mid + 1, end);
            merge(array, start, mid, end);
        }
    }



    function merge(array, start, mid, end) {
        let left = [], right = [];
        for (let i = start; i <= mid; i++) {
            left.push(array[i]);
        }
        for (let i = mid + 1; i <= end; i++) {
            right.push(array[i]);
        }
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                array[start] = left[i];
                i++;
            } else {
                array[start] = right[j];
                j++;
            }
            start++;
        }
        if (i == left.length) {
            while (j < right.length) {
                array[start] = right[j];
                j++;
                start++;
            }
        }
        if (j == right.length) {
            while (i < left.length) {
                array[start] = left[i];
                i++;
                start++;
            }
        }
    }

    function mergeSortDescending(array) {
        sortDescending(array, 0, array.length - 1);
    }

    function sortDescending(array, start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            sortDescending(array, start, mid);
            sortDescending(array, mid + 1, end);
            mergeDescending(array, start, mid, end);
        }
    }

    function mergeDescending(array, start, mid, end) {
        let left = [], right = [];
        for (let i = start; i <= mid; i++) {
            left.push(array[i]);
        }
        for (let i = mid + 1; i <= end; i++) {
            right.push(array[i]);
        }
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] >= right[j]) {
                array[start] = left[i];
                i++;
            } else {
                array[start] = right[j];
                j++;
            }
            start++;
        }
        if (i == left.length) {
            while (j < right.length) {
                array[start] = right[j];
                j++;
                start++;
            }
        }
        if (j == right.length) {
            while (i < left.length) {
                array[start] = left[i];
                i++;
                start++;
            }
        }
    }


    return {
        mergeSort,
        mergeSortDescending
    }
})();