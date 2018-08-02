class Queue {
  constructor() {
    this.counter = 0;
    this.storage = {};
    // this.keys = Object.keys(this.storage);
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  dequeue() {
    if (Object.keys(this.storage).length === 0) {
      return 0;
    }

    var dequeued = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
