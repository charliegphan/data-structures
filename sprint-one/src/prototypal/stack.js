var Stack = function () {
  var stack = Object.create(stackMethods);
  stack.counter = 0;
  stack.storage = {};
  return stack;
};

stackMethods = {};

stackMethods.push = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function () {
  if (this.counter === 0) {
    return 0;
  }
  var popped = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter--;

  return popped;
};

stackMethods.size = function () {
  return this.counter;
};



