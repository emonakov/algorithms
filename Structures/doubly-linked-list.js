class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const tail = this.tail;
    const prev = tail.prev;
    this.tail = prev;
    if(this.tail) {
        this.tail.next = null;
    }
    this.length--;
    if (!this.length) {
        this.head = null;
        this.tail = null;
    }
    tail.prev = null;
    return tail;
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
    } else {
        this.head.prev = null;
    }
    current.next = null;
    current.prev = null;

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
      node.next = head;
      head.prev = node;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx => 0 && idx < this.length) {
        const mid = Math.round(this.length / 2);
        if (idx => mid) {
          let counter = this.length - 1;
          let current = this.tail;
          while (counter >= idx) {
            if (counter === idx) {
              return current;
            }
            current = current.prev;
            counter--;
          }
        }

        if (idx < mid) {
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
      const node = new Node(val);
      const current = this.get(idx);
      const prev = current.prev;

      current.prev = node;
      prev.next = node;
      node.next = current;
      node.prev = prev;

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
      const current = this.get(idx);
      const prev = current.prev;
      const next = current.next;

      next.prev = prev;
      prev.next = next;

      result = true;
      this.length--;
    }

    return result;
  }

  reverse() {
    if(!this.head) {
      return this;
    }
    this.head.prev = this.head.next;
    this.head.next = null;
    while (this.head.prev) {
      this.head = this.head.prev;
      const temp = this.head.next;
      this.head.next = this.head.prev;
      this.head.prev = temp;
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
