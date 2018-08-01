var Queue = function () {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function () {
  if (Object.keys(this.storage).length === 0) {
    return 0;
  }

  var dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];

  return dequeued;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

