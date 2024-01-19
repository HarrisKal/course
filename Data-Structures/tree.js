// Trees are a data structure that consist of nodes in a 
// parent/child relationship. Terminology:

// Root: The topnode in a tree.
// Child: Node connected to another node by moving from the root.
// Parent: The node connected to by a  node.
// Siblings: A group of nodes with the same parent.
// Leaf: A node that does not have any ren.
// Edge: The connection between two nodes.

// A Binary Tree is just like a regular tree except for:
// Every node must have from 0 to 2 ren, no more, no less.

// A Binary Search Tree is just like a regular Binary Tree, but
// every node left of a parent is always less than the parent,
// and every node right of a parent is always greater to it.

// Insertion: O(log n)
// Searching: O(log n)

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);
		let curr = this.root;
		if (!curr) {
			this.root = newNode;
			return this;
		}
		while (curr) {
			if (newNode.val > curr.val) {
				if (curr.right) curr = curr.right;
				else {
					curr.right = newNode;
					break;
				}
			} else if (newNode.val < curr.val) {
				if (curr.left) curr = curr.left;
				else {
					curr.left = newNode;
					break;
				}
			} else return this;
		}

		return this;
	}

	contains(val) {
		let curr = this.root;
		if (!curr || !val) return false;
		while (curr) {
			if (val > curr.val) {
				if (curr.right) curr = curr.right;
			}
			else if (val < curr.val) {
				if (curr.left) curr = curr.left;
			}
			else return true;
		}
		return false;
	}

	// Breadth first traversal goes through each node in 
	// order from root to then left to right in layers.

	BFS_Traverse() {
		let node = this.root;
		let data = [];
		let queue = [];
		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}

	// Depth first traversal PreOrder goes through each node starting
	// from the root and for each node, traverse through its left, 
	// then right side. Once we hit a dead end, change side.

	DFS_PreOrderTraverse() {
		let visited = [];
		let curr = this.root;

		function traverse(node) {
			visited.push(node.val);

			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(curr);
		return visited;
	}

	// Depth first traversal PostOrder goes through each node starting
	// from the root, going to the leftest child, and traversing its
	// sibling, and then going up. In order to recognise a node, all 
	// of its children have to be visited.

	DFS_PostOrderTraverse() {
		let visited = [];
		let curr = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);

			visited.push(node.val);
		}

		traverse(curr);
		return visited;
	}

	// Depth first traversal InOrder goes through each node starting
	// from the root, going to the leftest child, and traversing its
	// parent, then the siblings and its children. In order to 
	// recognise a node, all of its left children have to be visited.
	// Returns array in ascending order

	DFS_InOrderTraverse() {
		let visited = [];
		let curr = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			visited.push(node.val);

			if (node.right) traverse(node.right);

		}

		traverse(curr);
		return visited;
	}
}


// let tree = new BinarySearchTree()
// 	.insert(10)
// 	.insert(6)
// 	.insert(15)
// 	.insert(8)
// 	.insert(3)
// 	.insert(20);

// tree.DFS_PreOrderTraverse() [10,6,3,8,15,20]
// tree.DFS_PostOrderTraverse()[3,8,6,20,15,10]
// tree.DFS_InOrderTraverse()  [3,6,8,10,15,20]

