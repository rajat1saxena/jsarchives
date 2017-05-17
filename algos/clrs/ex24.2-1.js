'use strict'; 
// INCOMPLETE: This example assumes that the DAG is already topologically sorted, so we need to plugin the TOPO. SORT logic.

//const dag = require('../dag');
const dag = {
    's': ['t'],
    't': [],
    'r': ['s', 't']
};
const tsort = require('../topological_sort')();

const allpaths = function () {
    const initialize = function (dag) {
        const parents = {};
        for (let u of Object.keys(dag)) {
            parents[u] = 0;       
        }
        return parents;
    };
    
    const allValSum = obj => Object.keys(obj).map((i) => obj[i]).reduce((acc, val) => acc + val);
    
    return {
        count (dag) {
            // sort the dag vertices in topological order
            const tsorted = tsort.perform(dag);
           let paths = initialize(dag);  // O(V)
           // Following loop has O(V+E)
           for (let u of tsorted) {
               for (let v of dag[u]) {
                   paths[v[0]] = paths[u] + paths[v[0]] + 1;
               }
           }
           
           return allValSum(paths);
        }
    };
};

const ap = allpaths();
console.log(ap.count(dag));