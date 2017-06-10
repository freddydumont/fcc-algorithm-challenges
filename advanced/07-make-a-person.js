/* Fill in the object constructor with the following methods below:
 *
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * 
 * Run the tests to see the expected output for each method.
 * 
 * The methods that take an argument must accept only one argument and it has to be a string.
 * 
 * These methods must be the only available means of interacting with the object.
 */

var Person = function (firstAndLast) {
    // declare local variables
    var i, firstName, lastName;

    // retrieve first and last name from firstAndLast
    function updateFirstLast() {
        i = firstAndLast.search(/\s/);
        firstName = firstAndLast.slice(0, i);
        lastName = firstAndLast.slice(i + 1);
    }

    // call it cause we need our variables for the getters
    updateFirstLast();

    function updateFullName() {
        firstAndLast = firstName + ' ' + lastName;
    }

    // setters work by updating all related variables
    // e.g. if we set firstName we need to update firstAndLast
    this.setFirstName = function (first) {
        firstName = first;
        updateFullName();
    };

    this.setLastName = function (last) {
        lastName = last;
        updateFullName();
    };

    this.setFullName = function (full) {
        firstAndLast = full;
        updateFirstLast();
    };

    // getters
    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
