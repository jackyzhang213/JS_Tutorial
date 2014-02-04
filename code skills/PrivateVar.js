/**
 * Problem: Putting Closure to work, OOP, private variable
 *
 * User: JackyZhang213
 * Date: 14-2-3
 */
(function () {
    function Ninja() {
        var feints = 0;
        this.getFeints = function () {
            return feints;
        };
        this.feint = function () {
            feints++;
        };
    }

    var ninja = new Ninja();
    ninja.feint();
    if (ninja.getFeints() === 1) {
        console.log("We're able to access the internal feint count.");
    }
    /*
     even though the constructor in which it’s declared has finished executing and gone
     out of scope, the feints variable is bound into the closure (think protective bubble)
     created by the declaration of the feint() method, and is available to that method.
     */
    if (ninja.feints === undefined) {
        console.log("And the private data is inaccessible to us.");
    }
}())