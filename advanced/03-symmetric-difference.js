/* Create a function that takes two or more arrays and returns an array of the symmetric difference
 * (△ or ⊕) of the provided arrays.
 * 
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference"
 * of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
 * For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with
 * elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

function sym() {

    var args = [].slice.call(arguments); //convert arguments to array
    var newArr = [];

    /* create a new array with the result of filter() being called on both arrays
     * val is returned if it is not included in the array
     * concat is used to merge the arrays
     */
    function merge(arr1, arr2) {
        return arr1.filter(val => !arr2.includes(val)).concat(
            arr2.filter(val => !arr1.includes(val)));
    }

    //remove duplicates from array using Set object
    //from https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
    function uniq(a) {
        return Array.from(new Set(a));
    }

    function recursion() {
        //base case
        if (args.length <= 1) {
            return uniq(newArr);
        } else {
            //recursive case
            newArr = merge(args[0], args[1]);
            args.splice(0, 2, newArr);
            return recursion();
        }
    }

    return recursion();
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
