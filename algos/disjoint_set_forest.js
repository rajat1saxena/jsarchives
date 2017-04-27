/*eslint-env node*/
'use strict';

// Disjoint set forest as seen in CLRS. 
// Uses 'union by rank' and 'path compression' heuristics.

// Accepts graph as adjacency list
module.exports = function () {
    const that = {};
    
    // Returns a forest of trees with only one node.
    // Augments the input graph with new properties ('p' and 'rank') and 
    // returns a new graph, in following form:
    // {
    //    a: {adj: ['b'], p: 'a', rank: 0},
    //    ...
    // }
    const make_set = function (graph) {
        const set = {};
        Object.keys(graph).forEach(function (item) {
            const obj = {};
            obj.adj = graph[item];
            obj.p = item;
            obj.rank = 0;
            set[item] = obj;
        });
        return set;
    };
    
    // returns the parent node
    // this works in two passes, read CLRS: 571 page
    const find_set = function (x, aug_graph) {
        if (x !== aug_graph[x].p) {
            aug_graph[x].p = find_set(aug_graph[x].p, aug_graph);
        }
        return aug_graph[x].p;
    };
    
    const link = function (xroot, yroot, aug_graph) {
        if (aug_graph[xroot].rank > aug_graph[yroot].rank) {
            aug_graph[yroot].p = xroot;
        } else {
            aug_graph[xroot].p = yroot;
            if (aug_graph[xroot].rank === aug_graph[yroot].rank)
                aug_graph[yroot].rank = aug_graph[yroot].rank + 1;
        }
        return aug_graph;
    };
    
    const union = function (x, y, aug_graph) {
        return link(find_set(x, aug_graph), find_set(y, aug_graph), aug_graph);
    };
    
    that.make_set = function (graph) {
        return make_set(graph);
    };
    
    that.find_set = function (x, aug_graph) {
        return find_set(x, aug_graph);
    };
    
    that.union = function (x, y, aug_graph) {
        return union(x, y, aug_graph);
    };
    
    return that;
};