var Stack = function () {
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function () {
  if (this.counter === 0) {
    return 0;
  }
  var popped = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter--;
  return popped;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};


