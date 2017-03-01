// Breadth first search, as seen in CLRS
/*eslint-env node */
let queuesource = require('./queue.js');
let queue = queuesource.queue(50);

let bfs = function () {
    
    // adj - adjency list of a graph
    // it is in form
    // {'a':[], 'b': ['a']}
    let perform = function (adj, source) {
        // bfs result 
        // it will be in form:
        // {'a': ['GRAY', 'c', 1], 'b': ['BLACK', null, 0]}
        let bfsresult = {};
        for (let element in adj) {
            if (adj.hasOwnProperty(element)) {
                let emptyarr = [];
                // notice the explicit assignment of index, so that 
                // JS don't mess things up
                emptyarr[0] = 'WHITE';
                emptyarr[1] = null;
                emptyarr[2] = Infinity;
                bfsresult[element] = emptyarr;
            }
        }
        let s = [];
        s[0] = 'GRAY';
        s[1] = null;
        s[2] = 0;
        // set this object in result array
        bfsresult[source] = s;
        queue.enqueue(source);
        while (!queue.isEmpty()) {
            let e = queue.dequeue();
            adj[e].forEach(function (ele) {
                if (bfsresult[ele][0] === 'WHITE') {
                    bfsresult[ele][1] = 'GRAY';
                    bfsresult[ele][1] = e;
                    bfsresult[ele][2] = bfsresult[e][2] + 1;
                    queue.enqueue(ele);
                }
            });
            bfsresult[e][0] = 'BLACK';
        }
        return bfsresult;
    };
    
    // print the shortest path, from u to v
    let printpath = function (bfsresult, u, v) {
        if (v == u) {    // termination condition
            console.log(v);
        } else if (bfsresult[v][1] === null) {
            console.log('No path exists between ' + u + ' and ' + v);
        } else {
            printpath (bfsresult, u, bfsresult[v][1]);        
            console.log(v + '→');    
        }
    };
    
    // Using some JS ninja chops ;)
    let printpath2 = (bfsresult, u, v, buffer = '') => 
                v === u ? 
                    buffer + v : 
                    bfsresult[v][1] === null ? 
                                        buffer = 'No path exists':
                                        printpath2(bfsresult, u, 
                                            bfsresult[v][1], buffer + v + '←');
                                            
    return {
        perform: perform,
        printpath: printpath,
        printlambda: printpath2
    };
};

var graph = {
    '1': ['2','4'],
    '2': ['5'],
    '3': ['6', '5'],
    '4': ['2'],
    '5': ['4'],
    '6': ['6']
};
var bfsed = bfs();
console.log(bfsed.printlambda(bfsed.perform(graph, '3'), '3', '2'));

