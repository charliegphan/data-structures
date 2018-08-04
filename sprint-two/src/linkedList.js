var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }

    list.tail.next = node;
    list.tail = node;
    
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    if (list.head.next === null) {
      list.head = null;
    } else {
      var previousHeadValue = list.head.value;
      list.head = list.head.next;
      return previousHeadValue;
    }
  };

  list.contains = function(target) {
    var notFound = true;
    var currentNode = list.head;
    while (notFound) {
      if (currentNode.value === target) {
        return true;
      } else if (currentNode.next === null) {
        return false;
      } else 
      {
        currentNode = currentNode.next
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};


  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail - O(1)
 * removeHead - O(1)
 * contains - O(n)
 */

