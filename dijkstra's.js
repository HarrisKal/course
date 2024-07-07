// Dijkstra's Algorithm is used to find the shortest path to get from 
// one vertex to another in a weighted list (where the edges have values)

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

class Undirected_Weighted_Graph {
    // v = vertex

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        this.adjacencyList[v] = [];
        return this;
    }

    addEdge(v1, v2, weight) {
        const list = this.adjacencyList;
        if (list[v1] && list[v2]) {
            list[v1].push({ vertex: v2, weight });
            list[v2].push({ vertex: v1, weight });
        }
        return this;
    }

    dijkstras(start, end) {
        const nodes = new PriorityQueue();
        const distances = {}; // key = vertex, value = distance
        const previous = {}; // key = vertex, value = how we got there
        const list = this.adjacencyList;
        let path = [];

        // Build the initial state.
        for (let v in list) {
            distances[v] = (v == start) ? 0 : Infinity;
            nodes.enqueue(v, distances[v]);
            previous[v] = null;
        }

        while (nodes.values.length) {
            var smallest = nodes.dequeue().val;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {

                for (let i in list[smallest]) {
                    let next = list[smallest][i];
                    let candidate = distances[smallest] + next.weight;

                    if (candidate < distances[next.vertex]) {
                        distances[next.vertex] = candidate;
                        previous[next.vertex] = smallest;
                        nodes.enqueue(next.vertex, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}



let g = new Undirected_Weighted_Graph()
    .addVertex('A')
    .addVertex('B')
    .addVertex('C')
    .addVertex('D')
    .addVertex('E')
    .addVertex('F')
    .addEdge('A', 'B', 4)
    .addEdge('A', 'C', 2)
    .addEdge('B', 'E', 3)
    .addEdge('C', 'D', 2)
    .addEdge('D', 'E', 3)
    .addEdge('C', 'F', 4)
    .addEdge('D', 'F', 1)
    .addEdge('E', 'F', 1);

console.log(g.dijkstras('A', 'E'));