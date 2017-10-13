module.exports = (function () {
    function selectionSort(array){
        for (let i = 0; i < array.length - 1; i++) {
            let minPos = i;
            for (let j = i + 1; j < array.length; j++) {
                minPos = array[j] < array[minPos] ? j : minPos;
            }
            let temp = array[i];
            array[i] = array[minPos];
            array[minPos] = temp;
        }
    }

    function selectionSortDescending(array){
        for (let i = 0; i < array.length - 1; i++) {
            let maxPos = i;
            for (let j = i + 1; j < array.length; j++) {
                maxPos = array[j] > array[maxPos] ? j : maxPos;
            }
            let temp = array[i];
            array[i] = array[maxPos];
            array[maxPos] = temp;
        }
    }
    return {
        selectionSort,
        selectionSortDescending
    }
})();