/**
 * Problem: given an array of arrays of table cells, builds up a string that contains a nicely
 *          laid out table—meaning that the columns are straight and the rows are aligned.
 *
 *          name           height country
 *          -------------- ------ -------------
 *          Kilimanjaro      5895 Tanzania
 *          Everest          8848 Nepal
 *          Mount Fuji       3776 Japan
 *          Mont Blanc       4808 Italy/France
 *          Vaalserberg       323 Netherlands
 *          Mount McKinley   6168 United States
 *          Popocatepetl     5465 Mexico
 * User: JackyZhang213
 * Date: 14-1-10
 */

(function () {

    var MOUNTAINS = [
        {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
        {name: "Everest", height: 8848, country: "Nepal"},
        {name: "Mount Fuji", height: 3776, country: "Japan"},
        {name: "Mont Blanc", height: 4808, country: "Italy/France"},
        {name: "Vaalserberg", height: 323, country: "Netherlands"},
        {name: "Mount McKinley", height: 6168, country: "United States"},
        {name: "Popocatepetl", height: 5465, country: "Mexico"}
    ];

    /*
     this function is used to calculated the row height. cell.minHeight is a polymorphism sample.
     @rows [[UnderLinedCell, UnderLinedCell, UnderLinedCell], [TextCell, TextCell, TextCell] ...]
     */
    function rowHeights(rows) {
        return rows.map(function (row) {
            return row.reduce(function (max, cell) {
                return Math.max(max, cell.minHeight());
            }, 0);
        });
    }

    /*
     this function is used to calculated the column width. we use row[0] is because we just want to use
     the index. In this sample, we just want to loop the first row(three columns)
     */
    function colWidths(rows) {
        return rows[0].map(function (_, i) {
            return rows.reduce(function (max, row) {
                return Math.max(max, row[i].minWidth());
            }, 0);
        });
    }

    function drawTable(rows) {
        var heights = rowHeights(rows);
        var widths = colWidths(rows);

        /*
         this function is used to join each block with one space,
         @blocks like ["Everest       ", "8848  ", "Nepal        "]
         @lineNo 0, for header, contains two lines, so the line No should be 0, 1
         */
        function drawLine(blocks, lineNo) {
            //console.log("Return from drawLine:", blocks.map(function (block) {
            //  return block[lineNo];
            //}).join(" "));
            return blocks.map(function (block) {
                return block[lineNo];
            }).join(" ");
        }

        /*
         this function convert each cell with correct align.
         @row [TextCell, TextCell, TextCell] or [UnderlinedCell, UnderlinedCell, UnderlinedCell]

         for header, blocks convert to [["name    ", "--------"], ["height", "-----"], ["country     ","-------"]]
         for body, blocks convert to [["Kilimanjaro   "], ["5895  "], ["Tanzania    "]]
         */
        function drawRow(row, rowNum) {
            //console.log("row:", row);
            var blocks = row.map(function (cell, colNum) {
                return cell.draw(widths[colNum], heights[rowNum]);
            });
            //console.log("blocks:", blocks);
            return blocks[0].map(function (_, lineNo) {
                return drawLine(blocks, lineNo);
            }).join("\n");
        }

        return rows.map(drawRow).join("\n");
    }

    function repeat(string, times) {
        var result = "", i;
        for (i = 0; i < times; i++) {
            result += string;
        }
        return result;
    }

    function TextCell(text) {
        this.text = text.split("\n");
    }

    TextCell.prototype.minWidth = function () {
        return this.text.reduce(function (width, line) {
            return Math.max(width, line.length);
        }, 0);
    };
    TextCell.prototype.minHeight = function () {
        return this.text.length;
    };

    TextCell.prototype.draw = function (width, height) {
        var i, result = [];
        for (i = 0; i < height; i++) {
            var line = this.text[i] || "";
            result.push(line + repeat(" ", width - line.length));
        }
        return result;
    };
    function UnderlinedCell(inner) {
        this.inner = inner;
    }

    UnderlinedCell.prototype.minWidth = function () {
        return this.inner.minWidth();
    };
    UnderlinedCell.prototype.minHeight = function () {
        return this.inner.minHeight() + 1;
    };
    UnderlinedCell.prototype.draw = function (width, height) {
        return this.inner.draw(width, height - 1)
            .concat([repeat("-", width)]);
    };
    function dataTable(data) {
        var keys = Object.keys(data[0]);
        var headers = keys.map(function (name) {
            return new UnderlinedCell(new TextCell(name));
        });
        var body = data.map(function (row) {
            return keys.map(function (name) {
                return new TextCell(String(row[name]));
            });
        });
        console.log("Return from dataTable", [headers].concat(body));
        return [headers].concat(body);
    }

    console.log(drawTable(dataTable(MOUNTAINS)));
}());
