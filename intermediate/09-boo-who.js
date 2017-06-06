// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
    //check if bool is primitive using valueOf
    if (bool.valueOf() === true || bool.valueOf() === false) {
        return true;
    } else {
        return false;
    }
}

booWho(1);
