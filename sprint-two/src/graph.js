

// Instantiate a new graph
var Graph = function() {
  //have array of nodes
  //have edges array 
  //inside edges array are subarrays with node endpoints
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.vertices[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertices[node];
  for (var vertex in this.vertices) {
    if (this.vertices[vertex].includes(node)) {
      var indexToDelete = this.vertices[vertex].indexOf(node);
      this.vertices[vertex].splice(indexToDelete, 1);
    }
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.vertices[fromNode].includes(toNode) && this.vertices[toNode].includes(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].push(toNode);
  this.vertices[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var firstNode = this.vertices[fromNode];
  var endNode = this.vertices[toNode];
  firstNode.splice(firstNode.indexOf(toNode), 1);
  endNode.splice(endNode.indexOf(fromNode, 1));
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.vertices);
  nodes.forEach(function(node) {
    cb(+node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


