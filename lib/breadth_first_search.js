function breadthFirstSearch(startingNode, targetVal) {
    // if (visited.has(startingNode.val)) return;

    // if (startingNode.val === targetVal) return startingNode;
    // visited.add(startingNode.val);

    // startingNode.neighbors.forEach(neighbor => breadthFirstSearch(neighbor, targetVal, visited));
    // // a : [b, c]
    // // b : 
    // // c : 

    let visited = new Set();
    let queue = [startingNode];

    while (queue.length) {
        let node = queue.shift();
        if (node.val === targetVal) return node;
        // if this node has already been visited, then skip this node
        if (visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored
        queue.push(...node.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};