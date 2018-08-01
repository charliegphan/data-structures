var Queue = function () {
  var instance = {};

  instance.storage = {};
  instance.counter = 0;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

  return instance;
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
