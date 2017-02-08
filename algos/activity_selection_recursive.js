// An activity selection recursive algorithm, as seen in CLRS (Chapter 16)
/*eslint-env node */
var activity_sel = function () {
    var that = {};
    
    var recursive = function (a, k, result) {
        var m = k + 1;
        var n = a.length;
        while (m <= n-1 && a[m].s < a[k].f) {
            m = m + 1;
        }
        if (m <= n-1) {
           result.push(a[m]);
           recursive(a, m, result);
        } 
        return result;
    };
    
    that.select = function (a, method) {
        method = method || 'rec';
        switch (method) {
            case 'rec':
                return recursive(a, 0, []);
            case 'iter':
                break;
        }
    };
    
    return that;
};

var activities = [
{s: 0, f: 0}, // fictitious activity so that subproblem S0 is entire set of activities
{s: 1, f: 4},
{s: 3, f: 5},
{s: 0, f: 6},
{s: 5, f: 7},
{s: 3, f: 9},
{s: 5, f: 9},
{s: 6, f: 10},
{s: 8, f: 11},
{s: 8, f: 12},
{s: 2, f: 14},
{s: 12, f: 16}
];
var selector = activity_sel();
console.log(selector.select(activities));