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
  //create new tree
  //push new tree into childs array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, parent) {
  //check if current tree has value
  //iterate over all children to check if they have value
  //continue to iterate until tree no longer has children
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
