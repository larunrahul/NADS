module.exports = (function () {
	function swap(array, first, second) {
		let temp = array[second];
		array[second] = array[first];
		array[first] = temp;
	}
	function partAscending() {
		throw new Error("Must implement a Ascedning partition strategy");
	}
	function partDescending() {
		throw new Error("Must implement a Descending partition strategy");
	}
	return {
		swap,
		partAscending,
		partDescending
	}
})();
