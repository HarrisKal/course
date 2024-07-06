// A graph consists of a finite set of nodes and connections with either:
//  - a set of unordered pairs of nodes, making an undirected graph.
//  - a set of ordered pairs of nodes, making a directed graph.

// A vertex is a node in the graph.
// An edge is a connection between two verteces
// An undirected graph has no direction as to the edges.
// A directed graph has direction between the vertices.
// A weighted graph has a numeric value associated with each egde.
// An unweighted graph has no values associated with each edge.

// A matrix is a 2d array used to represent graphs.
// An adjacency matrix shows if there is an edge between two verteces.
// An adjacency list is an array of subarrays. Each subarray represents 
// one vertex and contains all other verticies that it connects to.

// Big O of Adj List vs Adj Matrix.
// Add Vertex:  O(1)      O(v^2) 
// Add Edge:    O(1)      O(1) 
// Remove V.:   O(v+e)    O(v^2) 
// Remove Edge: O(e)      O(1) 
// Search:      O(v+e)    O(1) 
// Storage:     O(v+e)    O(v^2) 

class Undirected_Unweighted_Graph {
   constructor() {
      this.adjacencyList = {};
   }

   addVertex(v) {
      this.adjacencyList[v] = [];
      return this;
   }

   addEdge(v, w) {
      if (this.adjacencyList[v] && this.adjacencyList[w]) {
         this.adjacencyList[v].push(w);
         this.adjacencyList[w].push(v);
      }
      return this;
   }

   removeVertex(v) {
      for (let key in this.adjacencyList) this.removeEdge(key, v);
      delete this.adjacencyList[v];
      return this;
   }

   removeEdge(v, w) {
      if (v && w) {
         this.adjacencyList[v] = this.adjacencyList[v].filter(i => i !== w);
         this.adjacencyList[w] = this.adjacencyList[w].filter(i => i !== v);
      }
      return this;
   }

   traverse = () => Object.keys(this.adjacencyList);

   // Recursive Depth First Traversal
   RDFT(sv = this.traverse()[0]) {
      // sv = starting vertex
      let result = [];
      const adjL = this.adjacencyList;

      (function helper(v) {
         result.push(v);
         adjL[v].forEach(
            i => !result.includes(i) ? helper(i) : null
         );
      })(sv)

      return result;
   }

   // Iterative Depth First Traversal
   IDFT(sv = this.traverse()[0]) {
      const stack = [sv];
      const visited = [sv];
      const result = [];

      while (stack.length) {
         let last = stack.pop();
         result.push(last);

         this.adjacencyList[last].forEach(i => {
            if (!visited.includes(i)) {
               visited.push(i);
               stack.push(i)
            }
         });
      }
      return result;
   }

   // Breadth First Traversal
   BFT(sv = this.traverse()[0]) {
      const queue = [sv];
      const visited = [sv];
      const result = [];

      while (queue.length) {
         let first = queue.shift();
         result.push(first);
         this.adjacencyList[first].forEach(i => {
            if (!visited.includes(i)) {
               visited.push(i);
               queue.push(i);
            }
         })
      }
      return result;
   }
}

let g = new Undirected_Unweighted_Graph()
   .addVertex('A')
   .addVertex('B')
   .addVertex('C')
   .addVertex('D')
   .addVertex('E')
   .addVertex('F')
   .addEdge('A', 'B')
   .addEdge('A', 'C')
   .addEdge('B', 'D')
   .addEdge('C', 'E')
   .addEdge('D', 'E')
   .addEdge('D', 'F')
   .addEdge('E', 'F');

// console.log(g.BFT());