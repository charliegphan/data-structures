var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);



  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true
  }
  var result = false;
  for (var i = 0; i < this.children.length; i++) {
    var result = result || this.children[i].contains(target);
  }
  return result;
};

treeMethods.each = function(cb) {
  if (this.value !== undefined) {
    cb(this.value);
  }

  for (var i =0; i < this.children.length; i++) {
    this.children[i].each(cb);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1)
 * contains - O(n)
 */
