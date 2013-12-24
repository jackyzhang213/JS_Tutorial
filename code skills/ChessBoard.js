/**
 * Problem: Write a program that creates a string that represents an 8×8 grid,
 *          by using newline characters to separate lines. At each position of the grid
 *          there is either a space or a ‘#’ character, in such a way that the characters form a chess board.

 *          Passing this string to console.log should look like this:
 *
 *          # # # #
 *           # # # #
 *          # # # #
 *           # # # #
 *          # # # #
 *           # # # #
 *          # # # #
 *           # # # #
 *          When it works, define a variable size = 8, and change the program so that it works for any size,
 *          outputting a grid of the given width and height.           *
 * User: JackyZhang
 * Date: 13-12-23
 */

(function () {

    function printChessBoard(size) {
        var i, j, stringPattern1 = "", stringPattern2 = "";

        for (i = 0; i < size; i++) {
            if (i % 2 === 0) {
                stringPattern1 += "#";
                stringPattern2 += "_";
            } else {
                stringPattern1 += "_";
                stringPattern2 += "#";
            }
        }

        console.log("stringPattern1 = " + stringPattern1);
        console.log("stringPattern2 = " + stringPattern2);
        console.log("Print result for version 1:");

        for (j = 0; j < size; j++) {
            if (j % 2 === 0) {
                console.log(stringPattern1);
            } else {
                console.log(stringPattern2);
            }
        }
    }

    function printChessBoardV2(size) {
        var i, j, tempString = "";

        for (i = 0; i < size; i++) {
            for (j = 0; j < size; j++) {
                if ((i + j) % 2 === 0) {
                    tempString += "#";
                } else {
                    tempString += "_";
                }
            }

            tempString += "\n";
        }

        console.log("Print result for version 2:");
        console.log(tempString);
    }


    printChessBoard(8);
    printChessBoardV2(8);

}());