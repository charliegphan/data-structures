var Queue = function () {
  var queue = Object.create(queueMethods);
  queue.counter = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.queue = function (value) {

};

queueMethods.dequeue = function () {

};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
