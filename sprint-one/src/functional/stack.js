var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    // counter++;
    someInstance[Object.keys(someInstance).length + 3] = value;
  };

  someInstance.pop = function () {
    delete someInstance[Object.keys(someInstance).length - 3];

  };

  someInstance.size = function () {

    return Object.keys(someInstance).length - 3;
  };

  return someInstance;
};
