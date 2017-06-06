/* Write a function that takes two or more arrays and returns a new array of unique values
 * in the order of the original provided arrays.
 * 
 * In other words, all values present from all arrays should be included in their original order,
 * but with no duplicates in the final array.
 * 
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * Check the assertion tests for examples.
 */

function uniteUnique() {
    //create an array with all arguments as arrays
    var args = Array.prototype.slice.call(arguments);

    //concat all arguments into a single array
    var arr = args.reduce(function (a, b) {
        return a.concat(b);
    });

    var newArr = [];

    for (i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
