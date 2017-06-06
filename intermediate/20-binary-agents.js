// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
    //declare an array containing binary values
    var arr = str.split(" ");

    //declare a function to convert binary to int and to convert that int to a char
    function convert(val, i) {
        return String.fromCharCode(parseInt(val, 2));
    }

    //call convert on each value, join them and return
    return arr.map(convert).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
