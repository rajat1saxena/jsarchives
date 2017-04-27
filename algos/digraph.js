/*eslint-env node */
'use strict';

// A directed graph with connected components. Lifted directly from CLRS (Chapter 22)
//
// It is an adjacency list representation.
//
// To be consumed by connected components algorithms.
module.exports = {
    'a': ['b'],
    'b': ['c','e','f'],
    'c': ['d','g'],
    'd': ['c','h'],
    'e': ['a','f'],
    'f': ['g'],
    'g': ['f','h'],
    'h': ['h']
};