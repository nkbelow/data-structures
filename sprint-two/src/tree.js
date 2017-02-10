var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create node and currentNode to keep track of node
  this.children.push(Tree(value)); 

};

treeMethods.contains = function(target, parent) {
  //first check if tree has value
  //if not check if children have value
  //parent is base node
  //for each child of parent check if child contains value
  //else return false
  parent = parent || this;
  if (parent.value === target) {
    return true;
  } 
  for (var i = 0; i < parent.children.length; i++) {
    if (this.children[i].contains(target, parent.children[i])) {
      return true;
    }
  }
  
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
