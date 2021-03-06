/**
 * Problem: High Order function
 *
 * Array forEach: to do something with each element in an array
 *       map: build a new array where each element has been put through a function
 *       reduce: to combine all the elements in the array into a single value.
 *       every: there is no way to stop or break a forEach loop. The solution is to use Array.every or Array.some.
 *              every is like &&, some is like ||
 *
 * Functions apply: can be used to call them with an array specifying their arguments.
 *           bind: which is used to create a partially applied version of the function.
 *
 * User: JackyZhang213
 * Date: 14-1-3
 */
(function () {
    var ANCESTRY_FILE = "[\n  " + [
        '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
        '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
        '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
        '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
        '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
        '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
        '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
        '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
        '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
        '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
        '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
        '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
        '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
        '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
        '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
        '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
        '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
        '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
        '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
        '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
        '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
        '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
        '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
        '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
        '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
        '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
        '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
        '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
    ].join(",\n  ") + "\n]";

    var ancestry = JSON.parse(ANCESTRY_FILE);
    console.log("ancestry.length =" + ancestry.length);

    //sample filter implementation
    function filter(array, test) {
        var i, passed = [];
        for (i = 0; i < array.length; i++) {
            if (test(array[i])) {
                passed.push(array[i]);
            }
        }
        return passed;
    }

    console.log(filter(ancestry, function (person) {
        return person.born > 1900 && person.born < 1925;
    }));

    //invoke the Array build in function
    console.log(ancestry.filter(function (person) {
        return person.born > 1900 && person.born < 1925;
    }));

    //Array filter Polyfill, learn purpose.
    if (!Array.prototype.filter) {
        Array.prototype.filter = function (fun /*, thisArg */) {
            "use strict";

            if (this === void 0 || this === null) {
                throw new TypeError();
            }

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun != "function") {
                throw new TypeError();
            }

            var res = [];
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];

                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (fun.call(thisArg, val, i, t)) {
                        res.push(val);
                    }
                }
            }

            return res;
        }
    }

    //Array build-in reduce sample
    console.log(ancestry.reduce(function (min, cur) {
        if (cur.born < min.born) {
            return cur
        }
        else {
            return min;
        }
    }));

    //composite Array build-in
    function average(array) {
        function plus(a, b) {
            return a + b;
        }

        return array.reduce(plus) / array.length;
    }

    function age(p) {
        return p.died - p.born;
    }

    function male(p) {
        return p.sex == "m";
    }

    function female(p) {
        return p.sex == "f";
    }

    console.log(average(ancestry.filter(male).map(age)));
    // → 61.67
    console.log(average(ancestry.filter(female).map(age)));
    // → 54.56

    //flattening
    var arrays = [
        [1, 2, 3],
        [4, 5],
        [6]
    ];
    console.log(arrays.reduce(function (min, cur) {
        return min.concat(cur);
    }));

    //every: first thought, I think it should use reduce, like following, but when second round reduce
    //if will execute f(true) or f(false). That's not expected.
    //    function every(arr, f) {
    //        return arr.reduce(function(min, cur) {
    //            console.log(min, cur);
    //            return f(min) && f(cur);
    //        })
    //    }

    // Your code here.
    function every(arr, f) {
        for (var i = 0; i < arr.length; i++) {
            if (!f(arr[i])) {
                return false;
            }
        }
        return true;
    }

    function some(arr, f) {
        for (var i = 0; i < arr.length; i++) {
            if (f(arr[i])) {
                return true;
            }
        }
        return false;
    }

    console.log(every([NaN, NaN, NaN], isNaN));
    // → true
    console.log(every([NaN, NaN, 4], isNaN));
    // → false
    console.log(some([NaN, 3, 4], isNaN));
    // → true
    console.log(some([2, 3, 4], isNaN));
    // → false

    //how to stop a loop
    var THRESHOLD = 12;
    var v = [5, 2, 16, 4, 3, 18, 20];
    var res;

    res = v.every(function (element, index, array) {
        console.log("element:", element);
        if (element >= THRESHOLD) {
            return false;
        }

        return true;
    });
    console.log("res:", res);
    // logs:
    // element: 5
    // element: 2
    // element: 16
    // res: false

    res = v.some(function (element, index, array) {
        console.log("element:", element);
        if (element >= THRESHOLD) {
            return true;
        }

        return false;
    });
    console.log("res:", res);
    // logs:
    // element: 5
    // element: 2
    // element: 16
    // res: true

}());