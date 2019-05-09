class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const left = Symbol("left");
const right = Symbol("right");

class BinarySearchTree {
  constructor() {
    this.root = null;
    this[left] = "left";
    this[right] = "right";
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return node;
    }

    let current = this.root;

    if (value === current.value) {
      return false;
    }

    let leaf = null;
    let side = this.RIGHT;
    while (current) {
      leaf = current;
      if (node.value > current.value) {
        side = this[right];
        current = current[side];
      } else {
        side = this[left];
        current = current[side];
      }
    }

    leaf[side] = node;

    return leaf;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      }

      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  bfs() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  dfsPreOrder() {
    const data = [];
    const traverse = node => {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);

    return data;
  }

  dfsPostOrder() {
    const data = [];
    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    };
    traverse(this.root);

    return data;
  }

  dfsInOrder() {
    const data = [];
    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);

    return data;
  }
}

var btree = new BinarySearchTree();
btree.insert(10);
btree.insert(6);
btree.insert(15);
btree.insert(3);
btree.insert(8);
btree.insert(20);
