/**
 * Problem: Object comparison in JavaScript
 *
 * Solution: http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
 *
 * User: JackyZhang213
 * Date: 14-1-1
 */
(function () {

    /*
     Fast and limited.
     Works when you have simple JSON-style objects without methods and DOM nodes inside:
     */
    function compareByJson(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    /*
     Slow and more generic.
     Compares objects without digging into prototypes, then compares properties' projections recursively,
     and also compares constructors.
     */
    function deepCompare() {
        var leftChain, rightChain;

        function compare2Objects(x, y) {
            var p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }

            // Compare primitives and functions.
            // Check if both arguments link to the same object.
            // Especially useful on step when comparing prototypes
            if (x === y) {
                return true;
            }

            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((typeof x === 'function' && typeof y === 'function') || (x instanceof Date && y instanceof Date) ||
                    (x instanceof RegExp && y instanceof RegExp) || (x instanceof String && y instanceof String) ||
                    (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }

            // At last checking prototypes as good as we can
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }

            if (x.constructor !== y.constructor) {
                return false;
            }

            if (x.prototype !== y.prototype) {
                return false;
            }

            // check for infinitive linking loops
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }

            // Quick checking of one object is a subset of another.
            // todo: cache the structure of arguments[0] for performance
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                switch (typeof (x[p])) {
                case 'object':
                case 'function':

                    leftChain.push(x);
                    rightChain.push(y);

                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                    break;

                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
                }
            }

            return true;
        }

        if (arguments.length < 1) {
            return true; //Die silently? Don't know how to handle such case, please help...
            // throw "Need two or more arguments to compare";
        }

        for (var i = 1, l = arguments.length; i < l; i++) {

            leftChain = []; //todo: this can be cached
            rightChain = [];

            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    }

    var obj1 = {here: {is: "an"}, object: 2};
    var obj2 = {here: {is: "an"}, object: 2};

    console.log("compareByJson:" + compareByJson(obj1, obj2));
    console.log("compareByDeep:" + deepCompare(obj1, obj2));

}());