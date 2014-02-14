/**
 * Problem: Write a program that prints the integers from 1 to 100.
 *          But for multiples of three print "Fizz" instead of the
 *          number and for the multiples of five print "Buzz".
 *          For numbers which are multiples of both three and five print "FizzBuzz".
 * User: jackyzhang
 * Date: 13-12-23
 */
(function () {
    var i,
        n = 100;

    for (i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }

    }
}());

(function () {

    console.log("second function");
    var i,
        n = 100;

    for (i = 1; i <= n; i++) {
        console.log(((i % 3 === 0) ? "Fizz" : "") + ((i % 5 === 0) ? "Buzz" : "") || i);
    }
}());