const part = require('./Partition.js');
let partition = Object.create(part);
partition.partAscending = function (array, start, end) {
	let pivot = array[end];
	let next = start - 1;
	for (let index = start; index < end; index++) {
		if (array[index] <= pivot) {
			next++;
			this.swap(array, next, index);
		}
	}
	this.swap(array, next + 1, end);
	return next + 1;
}
partition.partDescending = function (array, start, end) {
	let pivot = array[end];
	let next = start - 1;
	for (let index = start; index < end; index++) {
		if (array[index] >= pivot) {
			next++;
			this.swap(array, next, index);
		}
	}
	this.swap(array, next + 1, end);
	return next + 1;
}
module.exports = partition;
