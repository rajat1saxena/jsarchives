/*eslint-env node*/
// Algorithm to find connected components, as seen in CLRS
// Chapter 21.
'use strict';

const dsf = require('./disjoint_set_forest')();

const connected_components = function () {
    const that = {};
    
    const find = function (graph) {
        // Make trees with individual nodes
        let make_set = dsf.make_set(graph);
        
        // we are going to iterate over adjacency list, so even if there is
        // a nested 'forEach', we will get O(E) complexity for the following
        // steps, as adjancency list will traverse all edges in O(E) time.
        Object.keys(make_set).forEach(function (u) {
            const v = make_set[u].adj;
            v.forEach(function (v) {
                if (dsf.find_set(u, make_set) !== dsf.find_set(v, make_set)) {
                    make_set = dsf.union(u, v, make_set);                    
                }
            });
        });
        
        return make_set;
    };
    
    that.find = function (graph) {
        return find(graph);
    };
    
    return that;
};

const obj = connected_components();
console.log(obj.find(require('./connected_graph')));

