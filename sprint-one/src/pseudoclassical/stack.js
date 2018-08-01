var Stack = function () {
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {

};

Stack.prototype.pop = function () { };

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};


