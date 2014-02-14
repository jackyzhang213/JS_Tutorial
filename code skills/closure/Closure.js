/**
 * Problem: Closure
 *
 * User: JackyZhang213
 * Date: 14-2-3
 */
(function () {
    var outerValue = 'ninja';
    var later;
    function outerFunction() {
        var innerValue = 'samurai';
        function innerFunction(paramValue) {
            if(outerValue) {
                console.log("Inner can see the ninja.");
            }
            if(innerValue) {
                console.log("Inner can see the samurai");
            }

            /*
            Function parameters are included in the closure of that function. (Seems obvious,
            but now we’ve said it for sure.)
            */
            if(paramValue) {
                console.log("Inner can see the wakizashi.");
            }
            /*
              All variables in an outer scope, even those declared after the function declaration,
              are included.
            * */
            if(tooLate) {
                console.log("Inner can see the ronin.");
            }
        }
        later = innerFunction;
    }

    /*
     Within the same scope, variables not yet defined cannot be forward-referenced.
     */
    if(!tooLate) {
        console.log("Outer can't see the ronin.");
    }

    var tooLate = 'ronin';
    outerFunction();
    later('wakizashi');

}())