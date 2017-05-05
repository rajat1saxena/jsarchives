// DFS implementation, as seen in CLRS

/*eslint-env node*/

const dfs = () => {
    const NODE_WHITE = 'white';
    const NODE_GRAY = 'gray';
    const NODE_BLACK = 'black';
    let time = 0;
    // dfs result will be in form:
    // {node: [color, parent, discoverytime, finishtime]}
    // i.e. :
    // {'a': ['gray', 'c', 1], 'b': ['white', null, 0]}
    // !!! Use of free variable
    const dfsresult = {};
    
    // 'dfsstruct' will be in form
    // {'a': ['GRAY', 'c', 1], 'b': ['BLACK', null, 0]}
    const dfs_visit = (graph, node, vertex_finish_hook) => {
        time = time + 1;
        dfsresult[node][0] = NODE_GRAY;
        dfsresult[node][2] = time;
        const node_adj_list = graph[node];
        for (let i = 0; i < node_adj_list.length; i++) {
            let adj_node = node_adj_list[i];
            if (dfsresult[adj_node][0] === NODE_WHITE) {
                dfsresult[adj_node][1] = node;
                dfs_visit(graph, adj_node, vertex_finish_hook);
            }
        }
        dfsresult[node][0] = NODE_BLACK;
        time += 1;
        dfsresult[node][3] = time;
	// call post processing hooks, if any
	vertex_finish_hook && vertex_finish_hook(node);
    };
    
    return {
        // graph: graph as adjacency list
	// vertex_finish_hook: a callback which can be used
	// to perform additional actions once a vertex is marked
	// black, as in topological sort.
        perform: (graph, vertex_finish_hook = null) => {
            for (let element in graph) {
                if (graph.hasOwnProperty(element)) {
                    let emptyarr = [];
                    // notice the explicit assignment of index, so that 
                    // JS doesn't mess things up.
                    emptyarr[0] = NODE_WHITE;
                    emptyarr[1] = null;
                    emptyarr[2] = Infinity;
                    emptyarr[3] = Infinity;
                    dfsresult[element] = emptyarr;
                }
            }
            const keys = Object.keys(dfsresult);
            for (let i = 0; i < keys.length; i++) {
                let node_props = dfsresult[keys[i]];
                if (node_props[0] === NODE_WHITE) {
                    dfs_visit(graph, keys[i], vertex_finish_hook);
                }
            }
            
            return dfsresult;
        }
    };
};

module.exports = dfs;

//let graph = {
//    '1': ['2','4'],
//    '2': ['5'],
//    '3': ['5', '6'],
//    '4': ['2'],
//    '5': ['4'],
//    '6': ['6']
//};
//
//let depthfirst = dfs();
//console.log(depthfirst.perform(graph));
