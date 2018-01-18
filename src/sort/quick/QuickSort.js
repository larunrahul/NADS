function QuickSort(partition){
  function _sortAscending(array, start, end) {
    if (start < end) {
      let mid = partition.partAscending(array, start, end);
      _sortAscending(array, start, mid - 1);
      _sortAscending(array, mid + 1, end);
    }
  }
  function _sortDescending(array, start, end) {
    if (start < end) {
      let mid = partition.partDescending(array, start, end);
      _sortDescending(array, start, mid - 1);
      _sortDescending(array, mid + 1, end);
    }
  }
  this.sortAscending = function sort(array) {
    _sortAscending(array, 0, array.length - 1);
  }
  this.sortDescending = function sortDescending(array) {
    _sortDescending(array, 0, array.length - 1)
  }
}
module.exports = QuickSort;
