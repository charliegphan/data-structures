class Queue {
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    counter++;
  }

  deqeueue() {

  }

  size() {
    return Object.keys(this.storage).length;
  }

}
