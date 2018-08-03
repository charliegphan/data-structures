

// Instantiate a new grph
var Graph = function() {
    this.nodes = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    var newNode = {};
    newNode.value = node;
    newNode.connections = [];
    this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === node) {
            return true;
        } 
    }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    var connections;
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === node) {
            connections = this.nodes[i].connections;
            this.nodes.splice(i,1);
        }
    }

    for (var i = 0; i < this.nodes.length; i++) {
        for (var j = 0; j < this.nodes[i].connections.length; j++) {
            if (this.nodes[i].connections[j] === node) {
                this.nodes[i].connections.splice(j, 1);
            }
        }
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === fromNode) {
            for (var j = 0; j < this.nodes[i].connections.length; j++) {
                if (this.nodes[i].connections[j] === toNode) {
                    return true;
                }
            }
        }
    }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === fromNode) {
            this.nodes[i].connections.push(toNode);
        }
        if (this.nodes[i].value === toNode) {
            this.nodes[i].connections.push(fromNode);
        }
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === fromNode) {
            this.nodes[i].connections.splice(i, 1);
        }
        if (this.nodes[i].value === toNode) {
            this.nodes[i].connections.splice(i, 1);
        }
    }
};

Graph.prototype.howManyEdges = function() {
    var counter = 0;
    for (var i = 0; i < this.nodes.length; i++) {
        counter += this.nodes[i].connections.length;
    }
    return counter / 2
}

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var i = 0; i < this.nodes.length; i++) {
        cb(this.nodes[i].value);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - O(1)
 * contains - O(n)
 * removeNode - O(n)
 * hasEdge - O() //n or n^2
 * addEdge - O(n)
 * forEachNode - O(n)
 * howManyEdges - 0(n)
 */


