const Queue = require('./queue.js')
const BinarySearchTree = require('./tree.js')

function traverse(tree) {
    if (!(tree instanceof BinarySearchTree)) return;

    let node = tree.root;
    let data = []

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

let tree = new BinarySearchTree()
    .insert(3)
    .insert(2)
    .insert(9)
    .insert(23)
    .insert(10)
    .insert(4);
console.log(traverse(tree))