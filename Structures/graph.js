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
}

g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Francisco");
g.addEdge("San Francisco", "Tokyo");
g.addVertex("Berlin");
g.addEdge("Tokyo", "Berlin");
g.addEdge("San Francisco", "Berlin");
g.addVertex("Dublin");
g.addEdge("Dublin", "Berlin");
g.addEdge("Dublin", "San Francisco");
