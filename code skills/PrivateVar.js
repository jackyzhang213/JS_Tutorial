/**
 * Problem: Putting Closure to work, OOP, private variable
 *
 * User: JackyZhang213
 * Date: 14-2-3
 */
(function () {
    function Ninja() {
        var feints = 0;
        this.getFeints = function(){
        return feints;
        };
    this.feint = function(){
        feints++;
        };
    }
    var ninja = new Ninja();
    ninja.feint();
    if (ninja.getFeints() === 1) {
        console.log("We're able to access the internal feint count.");
    }

    if (ninja.feints === undefined) {
        console.log("And the private data is inaccessible to us.");
    }
}())