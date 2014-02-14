/**
 * Problem: Write a function arrayToList that builds up a data structure like
 *          the one above when given [1, 2, 3] as argument, and a listToArray function
 *          that produces an array from a list. Also write the helper functions prepend,
 *          which takes an element and a list, and creates a new list that adds the
 *          element to the front of the input list, and nth, which takes a list and a number,
 *          and returns the element at the given position in the list, or undefined when
 *          there is no such element. If you hadn’t already, also write a recursive version of nth.
 *
 * User: JackyZhang213
 * Date: 13-12-26
 */
(function () {

    // Your code here.
    function arrayToList(arr) {
        var i, list;
        for (i = arr.length - 1; i >= 0; i--) {
            if (i == arr.length - 1) {
                list = {value:arr[i], rest:null};
            } else {
                list = {value:arr[i], rest:list};
            }
        }

        return list;
    }

    function listToArray(list) {
        var arr = [];
        for (var node = list; node; node = node.rest) {
            arr.push(node.value);
        }

        return arr;

    }

    function prepend(value, list) {
        return {value:value, rest:list};
    }

    function nth(list, position) {
        var i, node;

        for (var node = list, i = position; node && (position > 0); node = node.rest, position--) {

        }

        if (node) {
            return node.value;
        } else {
            return undefined;
        }

    }

    console.log(arrayToList([1, 2]));
// → {value: 1, rest: {value: 2, rest: null}}
    console.log(listToArray(arrayToList([1, 2])));
// → [1, 2, 3]
    console.log(prepend(1, prepend(2, null)));
// → {value: 1, rest: {value: 2, rest: null}}
    console.log(nth(arrayToList([1, 2, 3]), 5));
// → 2
}());