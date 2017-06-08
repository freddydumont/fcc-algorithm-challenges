/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1). If an item cannot be found,
 * add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
    // convert arrays to objects and extract an array of items
    var currentInventory = arr1.reduce(function (myObject, keyValue) {
        myObject[keyValue[1]] = keyValue[0];
        return myObject;
    }, {});

    var itemsInInventory = Object.keys(currentInventory);

    var newInventory = arr2.reduce(function (myObject, keyValue) {
        myObject[keyValue[1]] = keyValue[0];
        return myObject;
    }, {});

    var itemsToAdd = Object.keys(newInventory);

    //compare itemToAdd to itemsInInventory
    function update(itemToAdd) {
        return itemsInInventory.find(function (itemInInv) {
            // if found in inventory, returns itemInInv
            if (itemToAdd == itemInInv) { return true; }
            // if not, returns undefined
            else { return false; }
        });
    }

    //for each item to add, check if it corresponds to itemInInv
    for (let itemToAdd of itemsToAdd) {
        // call update to compare itemToAdd with inventory and store the result in item
        let item = update(itemToAdd);
        // if update returns undefined, itemToAdd cannot be found in itemsInInventory, create it
        if (item === undefined) {
            currentInventory[itemToAdd] = newInventory[itemToAdd];
        } else {
            // if update returns a value, itemToAdd already exists in itemsInInventory, update it
            currentInventory[item] += newInventory[item];
        }
    }

    // currentInventory is an object and must be converted back to array and key-value must be reversed
    var inventory = [];

    // iterate through key-value gracefully:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    for (let [key, value] of Object.entries(currentInventory)) {
        inventory.push([value, key]);
    }

    //sort the resulting array by name
    inventory.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
    });

    return inventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
