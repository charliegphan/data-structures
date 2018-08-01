var Queue = function () {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function (value) { };

Queue.prototype.dequeue = function () {

};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

