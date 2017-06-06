// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    var newStr = str;

    // if the first letter is capitalized, lowercase it
    if (str[0] === str[0].toUpperCase()) {
        newStr = str.charAt(0).toLowerCase() + str.slice(1);
    }

    // remove space, dash or underscore before capital letters
    newStr = newStr.replace(/\s[A-Z]|-[A-Z]|_[A-Z]/g, function (match) {
        return "" + match[1];
    });

    // remove space, dash or underscore before lowercase letters
    // and replace it with the capitalized letter
    newStr = newStr.replace(/\s[a-z]|-[a-z]|_[a-z]/g, function (match) {
        return "" + match[1].toUpperCase();
    });

    // add a dash before each capital letter
    newStr = newStr.replace(/[A-Z]/g, function (match) {
        return "-" + match;
    });

    // return newStr lowercased
    return newStr.toLowerCase();
}

spinalCase('AllThe-small Things');
