/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
 *
 * The second argument, func, is a function you'll use to test the first elements of the array to decide if you should
 * drop it or not.
 * 
 * Return the rest of the array, otherwise return an empty array.
 */

function dropElements(arr, func) {
    //very easy using recursion

    //base case
    if (func(arr[0])) {
        return arr;
    }

    //termination condition
    if (arr.length === 0) {
        return arr;
    }

    //recursive case
    arr.shift();
    return dropElements(arr, func);
}

dropElements([0, 1, 0, 1], function (n) { return n >= 3; });
