var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  counter = 0;
  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function () {

  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
