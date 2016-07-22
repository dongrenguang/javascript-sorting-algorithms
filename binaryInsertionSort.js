function binaryInsertionSort(array) {
    var arrLength = array.length;
    var i, low, high, middle, current;
    for (i = 1; i < arrLength; i++) {
        current = array.splice(i, 1)[0];
        low = 0;
        high = i - 1;
        while (low <= high) {
            middle = Math.floor((low + high) / 2);
            if (current > array[middle]) {
                low = middle + 1;
            }
            else {
                high = middle - 1;
            }
        }
        array.splice(low, 0, current);
    }

    return array;
}
