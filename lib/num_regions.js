function numRegions(graph) {
    let visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (_depthFirstRecur(node, graph, visited)) count++;
    }
    return count;
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return false;

    // console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });

    return true;
}

module.exports = {
    numRegions
};

// function depthFirst(graph) {
//     let visited = new Set();
        // let count = 0;
//     for (let node in graph) {
//         if (_depthFirstRecur(node, graph, visited)) count++;
//     }
// }

// function _depthFirstRecur(node, graph, visited) {
//     if (visited.has(node)) return false;

//     console.log(node);
//     visited.add(node);

//     graph[node].forEach(neighbor => {
//         _depthFirstRecur(neighbor, graph, visited);
//     });
//     return true;
// }