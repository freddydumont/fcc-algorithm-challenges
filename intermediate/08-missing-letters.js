// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

    //loops through str
    for (var i = 1; i < str.length; i++) {
        //if there is a missing letter, return it
        if (str.charCodeAt(i) !== (str.charCodeAt(i - 1) + 1)) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
    //otherwise return undefined
    return undefined;
}

fearNotLetter("abce");
