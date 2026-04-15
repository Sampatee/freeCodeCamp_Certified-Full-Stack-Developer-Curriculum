const dfs = (graph, root) => {
  const nodes = graph.length;
  const stack = [];
  const visited = new Array(nodes).fill(false);
  const reachableNodes = [];

  stack.push(root); //start at root

  while (stack.length > 0) {
    const node = stack.pop();
    visited[node] = true;
    reachableNodes.push(node);

    //if neighbour nodes are connected and not yet visited, add to stack
    for (let neighbour = 0; neighbour < nodes; neighbour++) {
      if (graph[node][neighbour] !== 0 && !visited[neighbour]) {
        stack.push(neighbour);
      }
    }
  }

  return reachableNodes;
};
