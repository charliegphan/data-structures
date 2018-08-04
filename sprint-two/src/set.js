var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return true
  }

  return false;
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

setPrototype.removeAll = function() {
  for (var key in this._storage) {
    delete this._storage[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(1)
 * contains - O(n)
 * remove - O(n)
 * removeAll - O(n)
 */
