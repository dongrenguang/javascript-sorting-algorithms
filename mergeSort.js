function mergeSort(array, low, high) {
    low = (low === undefined) ? 0 : low;
    high = (high === undefined) ? (array.length - 1) : high;
    if (low < high) {
        var mid = Math.floor((low + high) / 2);
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high);
        merge(array, low, mid, high);
    }

    return array;
}

function merge(array, low, mid, high) {
    var arrCopy = array.concat();
    var i, j, k;
    for (i = low, j = mid + 1, k = i; i <= mid && j <= high; k++) {
        if (arrCopy[i] <= arrCopy[j]) {
            array[k] = arrCopy[i++];
        }
        else {
            array[k] = arrCopy[j++];
        }
    }

    while (i <= mid) {
        array[k++] = arrCopy[i++];
    }

    while (j <= high) {
        array[k++] = arrCopy[j++];
    }
}
