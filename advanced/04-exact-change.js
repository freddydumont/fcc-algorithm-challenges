/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
 * Return the string "Closed" if cash-in-drawer is equal to the change due.
 * 
 * Otherwise, return change in coin and bills, sorted in highest to lowest order.
 */

function checkCashRegister(price, cash, cid) {
    // declare changeTotal in order to check conditions before calling returnChange
    var changeTotal = cash - price;

    // calculate total funds by accumulating the numerical values contained in the arrays in cid and round to 2 decimals
    var totalFunds = cid.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue[1];
    }, 0).toFixed(2);

    // check conditions and return proper strings if they are met
    if (totalFunds < changeTotal) {
        return "Insufficient Funds";
    } else if (totalFunds == changeTotal) {
        return "Closed";
    }

    // declare change object that will be filled by returnChange
    var change = {
        "ONE HUNDRED": 0,
        "TWENTY": 0,
        "TEN": 0,
        "FIVE": 0,
        "ONE": 0,
        "QUARTER": 0,
        "DIME": 0,
        "NICKEL": 0,
        "PENNY": 0
    };

    /* turn cid into an object of key: value pairs
     * https://stackoverflow.com/questions/26454655/
     * myObject is the accumulator and is initialized as an empty object
     *  because of the second argument in the callback function {}
     * currency is the array (value of cid array) being processed ex: ["PENNY", 1.01]
     * myObject accumulates key: value because currency[0] is "PENNY" and currency[1] is 1.01
     */
    var cidObject = cid.reduce(function (myObject, currency) {
        myObject[currency[0]] = currency[1];
        return myObject;
    }, {});

    // recursive function taking changeDue as parameter 
    var returnChange = function (changeDue) {
        changeDue = changeDue.toFixed(2);

        // base case
        if (parseFloat(changeDue) === 0) {
            // convert change to array
            var returnArr = Object.entries(change);
            // filter array to remove empty values
            returnArr = returnArr.filter(function (val) {
                if (val[1] !== 0) { return true; }
                else { return false; }
            });
            // return array with values rounded to 2 decimals
            // https://stackoverflow.com/questions/2283566 because toFixed(2) returns a string
            return returnArr.map(function (val) {
                val[1] = Math.round(val[1] * 1e2) / 1e2;
                return val;
            });
        }

        /* divide changeDue in coins and bills using switch and the following algorithm
         *      if changeDue >= 100 && cidObject["ONE HUNDRED"] >= 100
         *      remove 100 from cidObject["ONE HUNDRED"]
         *      add 100 to change["ONE HUNDRED"] and
         *      return changeDue - 100 for recursion
         */
        switch (true) {
            case changeDue >= 100.00 && cidObject["ONE HUNDRED"] >= 100.00:
                cidObject["ONE HUNDRED"] -= 100.00;
                change["ONE HUNDRED"] += 100.00;
                return returnChange(changeDue - 100.00);
            case changeDue >= 20.00 && cidObject.TWENTY >= 20.00:
                cidObject.TWENTY -= 20.00;
                change.TWENTY += 20.00;
                return returnChange(changeDue - 20.00);
            case changeDue >= 10.00 && cidObject.TEN >= 10.00:
                cidObject.TEN -= 10.00;
                change.TEN += 10.00;
                return returnChange(changeDue - 10.00);
            case changeDue >= 5.00 && cidObject.FIVE >= 5.00:
                cidObject.FIVE -= 5.00;
                change.FIVE += 5.00;
                return returnChange(changeDue - 5.00);
            case changeDue >= 1.00 && cidObject.ONE >= 1.00:
                cidObject.ONE -= 1.00;
                change.ONE += 1.00;
                return returnChange(changeDue - 1.00);
            case changeDue >= 0.25 && cidObject.QUARTER >= 0.25:
                cidObject.QUARTER -= 0.25;
                change.QUARTER += 0.25;
                return returnChange(changeDue - 0.25);
            case changeDue >= 0.10 && cidObject.DIME >= 0.10:
                cidObject.DIME -= 0.10;
                change.DIME += 0.10;
                return returnChange(changeDue - 0.10);
            case changeDue >= 0.05 && cidObject.NICKEL >= 0.05:
                cidObject.NICKEL -= 0.05;
                change.NICKEL += 0.05;
                return returnChange(changeDue - 0.05);
            case changeDue >= 0.01 && cidObject.PENNY >= 0.01:
                cidObject.PENNY -= 0.01;
                change.PENNY += 0.01;
                return returnChange(changeDue - 0.01);
            default:
                return "Insufficient Funds";
        }
    };

    return returnChange(changeTotal);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
