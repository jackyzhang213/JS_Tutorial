/**
 * Problem: Write a range function that takes two arguments, start and end,
 *          and returns an array containing all the numbers from start up to (and including) end.
 *          Next, write a sum function that takes an array of numbers, and returns the sum of these numbers.
 *
 *          As a bonus assignment, modify your range function to take an optional third argument
 *          that indicates the “step” value used to build up the array.
 *          If not given, it moves by steps of one, corresponding to the old behavior.
 *          The call range(1, 10, 2) should return [1, 3, 5, 7, 9].
 *          Make sure it also works with negative step values—so that range(5, 2, -1) produces [5, 4, 3, 2].
 *
 * User: JackyZhang213
 * Date: 13-12-25
 */

(function () {
    function range(from, to, step) {
        var i, arr = [];
        if (arguments.length === 2) {
            if (from > to) {
                step = -1;
            } else {
                step = 1;
            }

        }

        if (from < to) {
            for (i = from; i <= to; i += step) {
                arr.push(i);
            }
        } else {
            for (i = from; i >= to; i += step) {
                arr.push(i);
            }
        }

        return arr;
    }

    function sum(arr) {
        var i, sumNum = 0;
        for (i = 0; i < arr.length; i++) {
            sumNum += arr[i];
        }
        return sumNum;
    }

    console.log(sum(range(1, 10)));
    // → 55
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(range(5, 2));
}());