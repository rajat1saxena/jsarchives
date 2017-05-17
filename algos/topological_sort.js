// Topological Sort implementation 
// As seen in CLRS
// This implement is built upon dfs module
//
// Here we are storing topologically sorted
// nodes in an array, but ideally linked list should
// be used (refer: CLRS). Here we are exposing the fact 
// that our array can ensure linked list behavior by 
// taking adjacent list of all individual nodes in account
// i.e. get an element from topo. sorted array and
// then get the adjacency list for that element from 
// graph and we can easily draw something similar to
// the topologically sorted graph shown in CLRS.
'use strict';
const dfs = require('./dfs')();

const tsort = () => ({
	perform(graph) {
		const sorted = [];
		dfs.perform(graph, (node) => {
			sorted.push(node);
		});
		return sorted;
	}
});

const graph = {
    '1': ['2','4'],
    '2': ['5'],
    '3': ['5', '6'],
    '4': [],
    '5': ['4'],
    '6': ['6']
};
const ts = tsort();
console.log(ts.perform(graph));
