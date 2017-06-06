// Create a function that looks through an array (first argument) and returns the first element in the array
// that passes a truth test (second argument).

function findElement(arr, func) {
    //filter array to keep the values passing the test function
    var newArr = arr.filter(function (val) {
        if (func(val)) { return true; }
        return false;
    });

    //return the first one
    return newArr[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });
