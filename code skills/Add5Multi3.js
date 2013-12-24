/**
 * Problem: By starting from the number 1 and repeatedly either adding 5 or multiplying by 3,
 *          an infinite amount of new numbers can be produced. How would you write a function that,
 *          given a number, tries to find a sequence of additions and multiplications
 *          that produce that number? For example, the number 13 could be reached by
 *          first multiplying by 3 and then adding 5 twice. The number 15 cannot be reached at all.
 *
 * Note:    it doesn’t necessarily find the shortest sequence of operations—it is satisfied
 *          when it finds any sequence at all.
 *
 * Solution: Let us look at a the calls to find that are made when searching for a solution for the number 13:

         find(1, "1")
            find(6, "(1 + 5)")
                find(11, "((1 + 5) + 5)")
                    find(16, "(((1 + 5) + 5) + 5)")
                        too big
                    find(33, "(((1 + 5) + 5) * 3)")
                        too big
                find(18, "((1 + 5) * 3)")
                    too big
            find(3, "(1 * 3)")
                find(8, "((1 * 3) + 5)")
                    find(13, "(((1 * 3) + 5) + 5)")
                        found!
 * User: JackyZhang
 * Date: 13-12-24
 */
(function () {
    function findSolution(goal) {
        function find(start, history) {
            if (start == goal)
                return history;
            else if (start > goal)
                return null;
            else
                return find(start + 5, "(" + history + " + 5)") ||
                    find(start * 3, "(" + history + " * 3)");
        }
        return find(1, "1");
    }

    console.log(findSolution(24));

}());