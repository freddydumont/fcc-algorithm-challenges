// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
    //return the result of calling Array.every() on collection
    return collection.every(function (val) {
        //evaluate if pre is truthy on each element of collection
        return (val[pre]);
    });
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
