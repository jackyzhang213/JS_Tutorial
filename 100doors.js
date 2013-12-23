/**
 * Problem: You have 100 doors in a row that are all initially closed.
 *          You make 100 passes by the doors. The first time through,
 *          you visit every door and toggle the door (if the door is closed,
 *          you open it; if it is open, you close it). The second time you
 *          only visit every 2nd door (door #2, #4, #6, ...).
 *          The third time, every 3rd door (door #3, #6, #9, ...), etc,
 *          until you only visit the 100th door.
 *
 * Question: What state are the doors in after the last pass? Which are open, which are closed?
 * User: JackyZhang
 * Date: 13-12-23
 */

(function () {
    var i,
        j,
        n = 100,
        doors = [];

    for (i = 1; i <= n; i++) {
        for (j = i; j <= n; j += i) {
            doors[j] = !doors[j];
        }
    }

    for(i = 1; i < n; i++) {
        if(doors[i]) {
            console.log("The " + i + " door opened");
        }
    }
}());