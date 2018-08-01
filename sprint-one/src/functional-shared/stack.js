var Stack = function () {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function () {
  if (this.counter === 0) {
    return 0;
  }

  var popped = this.storage[this.counter - 1];

  delete this.storage[this.counter];

  this.counter--;

  return popped;
};

stackMethods.size = function () {
  return this.counter;
};


