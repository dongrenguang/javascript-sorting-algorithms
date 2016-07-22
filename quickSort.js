// standard version
function quickSort(array, low, high) {
    low = (low === undefined) ? 0 : low;
    high = (high === undefined) ? (array.length - 1) : high;
    if (low < high) {
        var pivotpos = partition(array, low, high);
        (function(_pivotpos, _low, _high) {
            quickSort(array, _low, _pivotpos - 1);
            quickSort(array, _pivotpos + 1, _high);
        })(pivotpos, low, high);
    }

    return array;
}

function partition(array, low, high) {
    var pivot = array[low];
    while(low < high) {
        while(low < high && array[high] >= pivot) { high--; }
        array[low] = array[high];

        while(low < high && array[low] <= pivot) { low++; }
        array[high] = array[low];
    }

    array[low] = pivot;
    return low;
}

/****************************************************************************/
// another version
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
