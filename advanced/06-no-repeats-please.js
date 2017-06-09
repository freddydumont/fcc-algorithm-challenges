/* Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * Assume that all characters in the provided string are each unique.
 * 
 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
 * but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

function permAlone(str) {
    // if there is only one letter, return 1
    if (str.length == 1) {
        return 1;
    }

    /* if all the letters are the same, return 0
     * https://stackoverflow.com/questions/6619528/ for regex solution
     * ^(.) matches the first character and remembers the match
     * \1 backreferences it and +$ checks if it is repeating until the end of the string
     */
    if (/^(.)\1+$/.test(str)) {
        return 0;
    }

    // declare counter and initialize to 0
    var counter = 0;

    // convert str to array to feed heapsPermute
    var arr = str.split('');

    // heap's permutation algorithm js implementation from:
    // http://dsernst.com/2014/12/14/heaps-permutation-algorithm-in-javascript/
    var swap = function (array, pos1, pos2) {
        var temp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    };

    var heapsPermute = function (array, output, n) {
        n = n || array.length; // set n default to array.length
        if (n === 1) {
            output(array);
        } else {
            for (var i = 1; i <= n; i += 1) {
                heapsPermute(array, output, n - 1);
                if (n % 2) {
                    var j = 1;
                } else {
                    var j = i;
                }
                swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
            }
        }
    };

    /* modified print to count
     * convert array back to string
     * using regex, if there is no match, increment counter
     * (.) match any char, \1 backreference the match, + check if repeated
     */
    var count = function (input) {
        if (!/(.)\1+/i.test(input.join(''))) {
            counter++;
        }
    };

    heapsPermute(arr, count);

    return counter;
}

permAlone('abfdefa');