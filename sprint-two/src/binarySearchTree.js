var BinarySearchTree = function(value) {
    var searchTree = {};
    searchTree.value = value;
    searchTree.left = null;
    searchTree.right = null;
    searchTree.insert = function(value) {
        if (value > searchTree.value) {
            if (searchTree.right === null) {
                searchTree.right = BinarySearchTree(value);
            } else {
                searchTree.right.insert(value);
            }
        } else {
            if (searchTree.left === null) {
                searchTree.left = BinarySearchTree(value);
            } else {
                searchTree.left.insert(value);
            }
        }
    };
    searchTree.contains = function(value) {
        if (searchTree.value === value) {
            return true;
        } 
        if (value > searchTree.value) {
            if (searchTree.right === null) {
                return false;
            }
            return searchTree.right.contains(value); 
        }
        if (value < searchTree.value) {
            if (searchTree.left === null) {
                return false;
            }
            return searchTree.left.contains(value); 
        }
        
    };
    searchTree.depthFirstLog = function(cb) {
        cb(searchTree.value);
        if (searchTree.left !== null) {
            searchTree.left.depthFirstLog(cb);
        }
        if (searchTree.right !== null) {
            searchTree.right.depthFirstLog(cb);
        }
        
    };
    return searchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
