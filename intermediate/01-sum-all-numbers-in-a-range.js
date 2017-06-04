// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {

    //finds biggest and smallest number in the array
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
    var sum = 0;
    //add all numbers from min to max
    for (i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

sumAll([1, 4]);