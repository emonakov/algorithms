class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = this.tail;
    }
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (!this.length) {
      this.tail = this.head;
    }
    return current;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const head = this.head;
      this.head = node;
      this.head.next = head;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx => 0 && idx < this.length) {
      let counter = 0;
      let current = this.head;
      while (counter <= idx) {
        if (counter === idx) {
          return current;
        }
        current = current.next;
        counter++;
      }
    }

    return null;
  }

  set(idx, val) {
    const updateNode = this.get(idx);
    if (updateNode) {
      updateNode.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    let result = false;
    if (idx === this.length - 1) {
      this.push(val);
      result = true;
    } else if (idx === 0) {
      this.unshift(val);
      result = true;
    } else {
      const prev = this.get(idx - 1);
      const node = new Node(val);
      const current = prev.next;
      prev.next = node;
      node.next = current;
      result = true;
    }
    if (result) {
      this.length++;
    }

    return result;
  }

  remove(idx) {
    if (this.length === 0 || idx < 0 || idx > this.length) {
      return false;
    }

    let result = false;
    if (idx === this.length - 1) {
      this.pop();
      result = true;
    } else if (idx === 0) {
      this.shift();
      result = true;
    } else {
      const prev = this.get(idx - 1);
      const current = prev.next;
      const next = current.next;
      prev.next = next;
      result = true;
      this.length--;
    }

    return result;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null, prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  *traverse() {
    let current = this.head;

    while (current !== null) {
      yield current.val;
      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.traverse();
  }
}
