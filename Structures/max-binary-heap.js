class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    if (!this.values.length) {
      return this.values;
    }

    this.bubbleUp();
  }

  bubbleUp() {
    let insertedIndex = this.values.length - 1;
    let value = this.values[insertedIndex];
    while (true) {
      let parentIndex = Math.floor((insertedIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (value > parent) {
        this.values[insertedIndex] = parent;
        this.values[parentIndex] = value;
        insertedIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
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

      while (true) {
        let leftIndex = 2 * startIdx + 1;
        let rightIndex = 2 * startIdx + 2;
        let left;
        let right;
        let swapIdx = null;

        if (leftIndex < length) {
          left = this.values[leftIndex];
          if (left > last) {
            swapIdx = leftIndex;
          }
        }

        if (rightIndex < length) {
          right = this.values[rightIndex];
          if ((!swapIdx && right > last)
            || right > left
          ) {
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

let heap = new MaxBinaryHeap;
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
