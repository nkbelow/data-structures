

// Instantiate a new graph
var Graph = function() {
  //have array of nodes
  //have edges array 
  //inside edges array are subarrays with node endpoints
  this.nodes = [];
  this.edgeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.nodes.includes(node)){
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes.includes(node)) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes.includes(fromNode) && this.nodes.includes(toNode)) {
    return this.edgeList.includes(fromNode) && this.edgeList.includes(toNode);
    
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes.includes(fromNode) && this.nodes.includes(toNode)) {
    this.edgeList.push(fromNode, toNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.edgeList.splice(this.edgeList.indexOf(fromNode, 1));
    this.edgeList.splice(this.edgeList.indexOf(toNode, 1));

  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  return _.map(this.nodes, function(node) {
    return cb(node);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


