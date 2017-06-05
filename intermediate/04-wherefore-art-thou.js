/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have
 * matching property and value pairs (second argument). Each property and value pair of the source object has to be present
 * in the object from the collection if it is to be included in the returned array.
 * 
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
 * { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the
 * third object from the array (the first argument), because it contains the property and its value,
 *  that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {
    //get the properties to match in an array
    var propToMatch = Object.keys(source);

    //filter the collection
    var arr = collection.filter(function (obj) {
        if (obj[propToMatch[0]] === source[propToMatch[0]]) {
            if (propToMatch.length > 1) {
                //doesn't work if there are more than 2 properties to match,
                //ok for the challenge but not ideal
                if (obj[propToMatch[1]] === source[propToMatch[1]]) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    });

    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
