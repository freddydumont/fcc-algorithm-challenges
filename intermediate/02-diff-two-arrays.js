// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    //concat both arrays into newArr
    var newArr = arr1.concat(arr2);
    //filter newArr by comparing each value to both initial arrays
    return newArr.filter(function (val) {
        //see if the value is present in both initial arrays
        if ((arr1.indexOf(val) === -1) || (arr2.indexOf(val) === -1)) {
            return true;
        } else {
            return false;
        }
    });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);