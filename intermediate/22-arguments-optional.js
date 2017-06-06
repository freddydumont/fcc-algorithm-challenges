/* Create a function that sums two arguments together. If only one argument is provided,
 * then return a function that expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * 
 * Calling this returned function with a single argument will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * 
 * If either argument isn't a valid number, return undefined.
 */

function addTogether(a, b) {
    //if the first argument is not a number, return undefined
    if (!Number.isInteger(a)) {
        return undefined;
    }

    //if the second arg exists
    if (b !== undefined) {
        //return a + b if b is a number
        if (Number.isInteger(b)) {
            return a + b;
        } else {
            //otherwise return undefined
            return undefined;
        }
        //if there is no second arg
    } else {
        //return a function that expects a number to add
        return function (y) {
            if (Number.isInteger(y)) {
                return a + y;
            } else {
                return undefined;
            }
        };
    }
}

addTogether(2, 3);
