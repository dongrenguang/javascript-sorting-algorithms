function bubbleSort(array) {
    var arrLength = array.length;
    var i, j, temp, bubbled;
    for (i = 0; i < arrLength; i++) {
        bubbled = false;
        for (j = arrLength; j > i; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                bubbled = true;
            }
        }

        if (!bubbled) {
            break;
        }
    }

    return array;
}
