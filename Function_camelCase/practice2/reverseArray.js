function reverseArray(array) {
    for (let index = 0; index < array.length / 2; index++) {
        array[i] += array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i] - array[array.length - 1 - i];
        array[i] -= array[array.length - 1 - i];
    }
    return array;
}