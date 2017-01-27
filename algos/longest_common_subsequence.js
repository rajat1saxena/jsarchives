// Longest common subsequence, as seen in CLRS
// Following keys are used for direction arrows:
// 0: diagonal
// 1: top
// 2: left
/*eslint-env node */
var lcs = function () {
    var that = {};
    
    var find = function (xarr, yarr) {
        var d = [];
        var c = [];
        var i, a, b;
        // initilize arrays
        for (i = 0; i <= xarr.length; i++) {
            c[i] = [];
            d[i] = [];
        }
        for (i = 0; i <= xarr.length; i++) {
            c[i][0] = 0;
        }
        for (i = 0; i <= yarr.length; i++) {
            c[0][i] = 0;
        }
        console.log(d, c);
        for (a = 1; a <= xarr.length; a++) {
            for (b = 1; b <= yarr.length; b++) {
                // adjust index according to JS, i.e indexes are counted from
                // zero, not one.
                if (xarr[a-1] === yarr[b-1]) {
                    c[a][b] = c[a-1][b-1] + 1;
                    d[a][b] = 0;
                } else if (c[a-1][b] >= c[a][b-1]) {
                    c[a][b] = c[a-1][b];
                    d[a][b] = 1;
                } else {
                    c[a][b] = c[a][b-1];
                    d[a][b] = 2;
                }
            }
        }
        return [d, c];
    };
    
    var print = function (backtrackarr, xarr, i, j) {
        var result = '';
        if (i === 0 || j === 0) { return; }
        else if (backtrackarr[i][j] === 0) {
            print (backtrackarr, xarr, i-1, j-1);
            console.log(xarr[i-1]);
        } else if (backtrackarr[i][j] === 1) {
            print (backtrackarr, xarr, i-1, j);
        } else {
            print (backtrackarr, xarr, i, j-1);
        }
    };
    
    var procss = function (xarr, yarr) {
        var ret = find (xarr, yarr);
        console.log(ret);
        print(ret[0], xarr, xarr.length, yarr.length);
    };
    
    that.procss = function (xarr, yarr) { procss(xarr, yarr); }
    
    return that;
};


var lcser = lcs();
lcser.procss('ABCBDAB', 'BDCABA'); // sequence from CLRS

