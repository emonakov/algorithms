class Node {
  constructor(value, priority) {
      this.value = value;
      this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
      this.values = [];
  }

  enqueue(value, priority = 100) {
      const node = new Node(value, priority);
      this.values.push(node);
      if (this.values.length > 1) {
          this.bubbleUp();
      }

      return this.values;
  }

  bubbleUp() {
      let insertedIndex = this.values.length - 1;
      let node = this.values[insertedIndex];
      while(true) {
          let parentIndex = Math.floor((insertedIndex - 1) / 2);
          let parent = this.values[parentIndex];
          if (parent && node.priority < parent.priority) {
              this.values[insertedIndex] = parent;
              this.values[parentIndex] = node;
              insertedIndex = parentIndex;
          } else {
              break;
          }
      }
  }

  dequeue() {
      let startIdx = 0;
      const value = this.values[0];
      const last = this.values.pop();
      const length = this.values.length;
      if (length) {
          const lastIndex = this.values.length - 1;
          this.values[startIdx] = last;

          const swap = (currentIdx, swapIdx) => {
              const swap = this.values[swapIdx];
              const current = this.values[currentIdx];
              this.values[currentIdx] = swap;
              this.values[swapIdx] = current;
              return swapIdx;
          }

          while(true) {
              let leftIndex = 2 * startIdx + 1;
              let rightIndex = 2 * startIdx + 2;
              let left;
              let right;
              let swapIdx = null;

              if (leftIndex < length) {
                  left = this.values[leftIndex];
                  if (left.priority < last.priority) {
                      swapIdx = leftIndex;
                  }
              }

              if (rightIndex < length) {
                  right = this.values[rightIndex];
                  if ((!swapIdx && right.priority < last.priority)
                      || right.priority < left.priority
                  ){
                      swapIdx = rightIndex;
                  }
              }

              if (!swapIdx) {
                  break;
              }

              startIdx = swap(startIdx, swapIdx);
          }
      }

      return value;
  }
}

let queue = new PriorityQueue;
queue.enqueue(41);
queue.enqueue(39);
queue.enqueue(33);
queue.enqueue(18, 1);
queue.enqueue(27, 2);
queue.enqueue(12, 1);
