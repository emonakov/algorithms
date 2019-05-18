class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WheightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }

    return this.adjacencyList;
  }

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }

    return this.adjacencyList;
  }

  shortestPath(start, target) {
    const nodes = new PriorityQueue;
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    for (let vertex of Object.keys(this.adjacencyList)) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === target) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== infinity) {
        for (const nextNode of this.adjacencyList[smallest]) {
          let canditate = distances[smallest] + nextNode.weight;
          if (canditate < distances[nextNode.node]) {
            distances[nextNode.node] = canditate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, canditate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

g = new WheightedGraph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
