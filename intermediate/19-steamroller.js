// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    //declare array that will be filled with the correct values
    var finalArr = [];

    function testArray(arr) {
        //loop through the array
        arr.forEach(function (val) {
            //if the current value is an array, call testArray() on value
            if (Array.isArray(val)) {
                testArray(val);
            } else {
                //if val is not an array, push the value into finalArr
                finalArr.push(val);
            }
        });
    }

    //call testArray on the array to steamroll
    testArray(arr);

    return finalArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
