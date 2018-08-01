var Queue = function () {
  var queue = Object.create(queueMethods);
  queue.counter = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function () {
  if (Object.keys(this.storage).length === 0) {
    return 0;
  }

  var dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];

  return dequeued;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
