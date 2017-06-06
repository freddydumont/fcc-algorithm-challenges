/* Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */

//greatest common denominator using euclidean algorithm
function gcd(a, b) {
    var t;
    while (b !== 0) {
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

//least common multiple of two numbers using gcd
function lcm(a, b) {
    return (a * b / gcd(a, b));
}

//least common multiple of more than two numbers
//recursion = function that calls itself to iterate!
function lcmm(args) {
    if (args.length == 2) {
        return lcm(args[0], args[1]);
    } else {
        var arg0 = args[0]; //save first number
        args.shift(); //remove it from array
        return lcm(arg0, lcmm(args)); //calling itself
    }
}

function smallestCommons(arr) {
    //reverse array if the biggest number is first
    if (arr[0] > arr[1]) {
        arr.reverse();
    }

    //create arrFilled to have all the numbers in the array
    var arrFilled = [];

    for (var i = arr[0]; i <= arr[1]; i++) {
        arrFilled.push(i);
    }

    //call lcmm to resolve
    return lcmm(arrFilled);
}

smallestCommons([13, 1]);
