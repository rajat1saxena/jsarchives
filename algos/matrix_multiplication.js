var matrix_multiplication = function () {
    var that = {};
    
    var matrix_chain_order = function (p, i, j) {
        var r = [];
        var s = [];
        var l, u, v, q, k, temp, temparr;
        // initialize 2-D arrays
        for (var y = i; y <= j; y++) {
            temparr = [];
            temparr[y] = 0;
            r[y] = temparr;
        }
        for (var y = i; y <=j; y++) {
            temparr = [];
            s[y] = temparr;
        }
        console.log(r, s);
        for (l = 2; l <= j; l++) {
            for (u = 1; u <= j - l + 1; u++) {
                v = u + l - 1;
                q = Infinity;
                for (k = u; k <= v-1; k++) {
                    temp = r[u][k] + r[k+1][v] + p[u-1]*p[k]*p[v];
                    if (temp < q) {
                        q = temp;
                        r[u][v] = q;
                        s[u][v] = k;
                    }
                }
            }   
        }
        console.log(s);
        return s;
    };
    
    that.orderify = function (p) {
        return matrix_chain_order(p, 1, p.length - 1);
    };
    
    return that;
}

var matrix = matrix_multiplication();
console.log(matrix.orderify([30,35,15,5,10,20,25]));