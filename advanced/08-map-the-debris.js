/* Return a new array that transforms the element's average altitude into their orbital periods.
 *
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * 
 * You can read about orbital periods on wikipedia.
 * 
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * 
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const EARTH_RADIUS = 6367.4447;

    // loop over arr's elements
    arr.forEach(val => {
        // retrieve avgAlt and delete it from object within array
        let avgAlt = val.avgAlt;
        delete val.avgAlt;

        // equations for semi-major axis (SMa) and rounded orbital period (P)
        let SMa = avgAlt + EARTH_RADIUS;
        let P = Math.round(2 * Math.PI * Math.sqrt(Math.pow(SMa, 3) / GM));

        // create property orbitalPeriod in object
        val.orbitalPeriod = P;
    });

    return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
