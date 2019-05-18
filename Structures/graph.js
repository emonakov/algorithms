class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }

    return this.adjacencyList;
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }

    return this.adjacencyList;
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].reduce((acc, val) => {
        val !== v2 && acc.push(val);
        return acc;
      }, []);
      this.adjacencyList[v2] = this.adjacencyList[v2].reduce((acc, val) => {
        val !== v1 && acc.push(val);
        return acc;
      }, []);
    }

    return this.adjacencyList;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(edgeVertex => {
        this.removeEdge(vertex, edgeVertex);
      });

      delete this.adjacencyList[vertex];
    }

    return this.adjacencyList;
  }

  dfsRecursive(vertex) {
    const result = [];
    const visitedList = {};
    if (!this.adjacencyList[vertex]) {
      return null;
    }

    const dfs = vertex => {
      if (!vertex) {
        return null;
      }

      visitedList[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visitedList[neighbor]) {
          dfs(neighbor);
        }
      });
    }

    dfs(vertex);

    return result;
  }

  dfsIterative(vertex) {
    const S = [];
    const result = [];
    const visited = {};
    if (!this.adjacencyList[vertex]) {
      return null;
    }
    let currentVertex;
    S.push(vertex);
    visited[vertex] = true;
    while (S.length) {
      currentVertex = S.pop(vertex);
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          S.push(neighbor);
        }
      });
    }

    return result;
  }

  bfs(vertex) {
    const Q = [];
    const result = [];
    const visited = {};

    if (!this.adjacencyList[vertex]) {
      return null;
    }

    Q.push(vertex);
    visited[vertex] = true;

    while (Q.length) {
      let vertex = Q.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          Q.push(v);
        }
      });
    }

    return result;
  }
}

g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
