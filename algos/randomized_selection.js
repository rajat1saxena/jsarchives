// Algorithm to select Kth smallest element in O(n) average case time
var randomized = function () {
    var that = {};
    
    var swap = function (arr, source, target) {
        var temp;
        if (source === target) {
            return arr;
        }
        temp = arr[source];
        arr[source] = arr[target];
        arr[target] = temp;
        return arr;
    };
    
    var partition = function (arr, p, r) {
        var obj = {};
        var i, j, key;
        
        i = p - 1;
        key = arr[r];
        for (j = p; j < r; j++) {
            if (arr[j] <= key) {
                i += 1;
                // exchange arr[i] with arr[j]
                arr = swap (arr, i, j);
            } 
        }
        // exchange arr[i] with arr[r]
        i += 1;
        arr = swap (arr, i, r);
        
        obj['arr'] = arr;
        obj['i'] = i;
        
        return obj;
    };
    
    var randomized_partition = function (arr, p, r) {
        var random = Math.floor(Math.random() * (r - p + 1)) + p;
        arr = swap (arr, random, r);
        var q =  partition(arr, p, r); 
        return q;
    }; 
    
    var selection = function (arr, p, r, i) {
        var q, k;
        if (p === r) {
            return arr[p];
        }
        q = randomized_partition(arr, p, r);
        arr = q.arr;
        q = q.i;
        k = q - p + 1;
        if (i === k) {
            return arr[q];
        } else if (i < k) {
            return selection(arr, p, q - 1, i);
        } else {
            return selection(arr, q + 1, r, i - k);
        }
    };
    
    that.selection = function (arr, k) {
        return selection (arr, 0, arr.length - 1, k);
    };
    
    return that;
};

var rsel = randomized ();
console.log(rsel.selection([3, 2, 1, 6, -1], 3));