/* Sum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as a number greater than one and having only two divisors, one and itself.
 * For example, 2 is a prime number because it's only divisible by one and two.
 * 
 * The provided number may not be a prime.
 */

function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {

    var prime = 0;

    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            prime += i;
        }
    }

    return prime;
}

sumPrimes(977);
