function selectionSort(array) {
    var arrLength = array.length;
    var i, j, min, temp;
    for (i = 0; i < arrLength; i++) {
        min = i;
        for (j = i + 1; j < arrLength; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min !== i) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}
