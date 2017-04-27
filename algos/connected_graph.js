/*eslint-env node*/
'use strict';

// A graph with four connected components. Refer CLRS Page 563 for visuals.
//
// the adjancy lists are sorted in alphabetical order.
module.exports = {
    'a': ['b', 'c'],
    'b': ['a', 'c', 'd'],
    'c': ['a', 'b'],
    'd': ['b'],
    'e': ['f', 'g'],
    'f': ['e'],
    'g': ['e'],
    'h': ['i'],
    'i': ['h'],
    'j': []
};