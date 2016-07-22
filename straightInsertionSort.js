function straightInsertionSort(array) {
    var arrLength = array.length;
    var i, j;
    for (i = 1; i < arrLength; i++) {
        var current = array.splice(i, 1)[0];
        for (j = i - 1; array[j] > current && j >= 0; j--) {}
        array.splice(j + 1, 0, current);
    }

    return array;
}
