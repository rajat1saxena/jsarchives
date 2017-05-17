// A Directed Acyclic Graph, lifted from Page 656 of CLRS
'use strict';


// notation:
// u: [[v, w(u,v)], ...]
module.exports = {
    'r': [['s', 5], ['t', 3]],
    's': [['t', 2], ['x', 6]],
    't': [['x', 7], ['y', 4], ['z', 2]],
    'x': [['y', -1], ['z', 1]],
    'y': [['z', -2]],
    'z': []
};