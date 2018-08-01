var Stack = function () {
  var stack = Object.create(Stack.prototype);
  // stack.counter = 0;
  // stack.storage = {};
  return stack;
};

var stackMethods = {}; // why need stack Methods object?

Stack.prototype.counter = 0;
Stack.prototype.storage = {};

Stack.prototype.push = function (value) {

};

Stack.prototype.pop = function () {

};

Stack.prototype.size = function () {
  return this.counter;
};



