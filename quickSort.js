function quickSort(array) {
	if (array.length <= 1)
	{
		return array;
	}
	var midIndex = Math.round(array.length / 2);
	var midValue = array.splice(midIndex, 1);
	var left = [];
	var right = [];
	array.forEach(function(item) {
		if (item < midValue) {
			left.push(item);
		}
		else {
			right.push(item);
		}
	});

	return quickSort(left).concat(midValue).concat(quickSort(right));
}