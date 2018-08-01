var Queue = function () {
  var instance = {};

  instance.storage = {};
  instance.push = queueMethods.push;
  instance.pop = queueMethods.pop;
  instance.size = queueMethods.size;

  return instance;
};

var queueMethods = {};

queueMethods.push = function () {

};

queueMethods.pop = function () {

};

queueMethods.size = function () {

};
