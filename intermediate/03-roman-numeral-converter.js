// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

    //creates a conversion-ready array by placing each digit in reverse order and multiplying it according to its position 
    var numArr = num.toString(10).split("").map(Number).reverse();

    var numbers = numArr.map(function (val, i) {
        switch (i) {
            case 1:
                return val *= 10;
            case 2:
                return val *= 100;
            case 3:
                return val *= 1000;
            default:
                return val;
        }
    });

    var romans = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];

    var finalArr = numbers.map(function (val) {
        switch (true) {
            //0-9
            case (val < 10): return romans[val];
            //10-90
            case (val >= 10 && val < 100): return romans[val / 10 + 9];
            //100-900
            case (val >= 100 && val < 1000): return romans[val / 100 + 18];
            //1000
            //using str.repeat(count) because there is no limit to the number of thousands
            case (val >= 1000): return romans[28].repeat(val / 1000);
        }
    });

    return finalArr.reverse().join("");
}

convertToRoman(2014);