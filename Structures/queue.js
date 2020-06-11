class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;

    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    let current = this.first;
    this.first = current.next;
    this.size--;
    if (!this.size) {
      this.last = this.first;
    }
    current.next = null;

    return current.value;
  }
}

const node = new Node(Math.round(Math.random() * 10) + 1);
const queue = new Queue();
queue.enqueue(node);
queue.enqueue(node);
queue.enqueue(node);

console.log(queue);
