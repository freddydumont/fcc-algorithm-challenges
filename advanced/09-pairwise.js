/* Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 *
 * If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices.
 * Once an element has been used, it cannot be reused to pair with another.
 * 
 * For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
 * We can then write out the array with their indices and values.
 * 
 * Index	0	1	2	3	4
 * Value	7	9	11	13	15
 * 
 * Below we'll take their corresponding indices and add them.
 * 
 * 7 + 13 = 20 → Indices 0 + 3 = 3
 * 9 + 11 = 20 → Indices 1 + 2 = 3
 * 3 + 3 = 6 → Return 6
 */

function pairwise(arr, arg) {
    // if array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    let indices = [];

    // for each index in arr
    arr.forEach(function (current, i) {
        // loop over other indices
        arr.forEach(function (secondary, j) {
            if (i != j) {
                // check if the sum of the pair is equal to arg
                if (current + secondary == arg) {
                    // if the pair is not already in indices array, push it in
                    if (indices.some(value => {
                        if (value == i || value == j) { return true; }
                        else { return false; }
                    }) === false) {
                        indices.push(i, j);
                    }
                }
            }
        });
    });

    // accumulate the values in indices and return
    return indices.reduce(function (sum, val) {
        return sum + val;
    });
}

pairwise([1, 4, 2, 3, 0, 5], 7);
