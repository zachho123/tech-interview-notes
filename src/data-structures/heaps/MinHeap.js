class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(val) {
    // Add to end ("bottom") of heap
    this.heap.push(val);

    // If there are other items in the heap, make sure heap property is held
    if (this.heap.length > 1) {
      let currIdx = this.heap.length - 1;
      let parentIdx = Math.floor(currIdx / 2);

      while (currIdx > 1 && this.heap[parentIdx] < this.heap[currIdx]) {
        // Swap nodes, here using ES6 destructuring syntax
        [this.heap[currIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currIdx]];
        currIdx = parentIdx;
      }
    }
  }
}