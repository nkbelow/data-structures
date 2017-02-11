var BinarySearchTree = function(value) {
  var BST = {};
  BST.left = null;
  BST.right = null;
  BST.value = value;
  _.extend(BST, binarySearchMethods);

  return BST;

};

var binarySearchMethods = {

  insert: function(value) {
    //see if lesser or greater than previous node
    //if smaller assign to left property
    //else assign it to the right

    if (value < this.value) {
      if (!this.left) {
        this.left = (BinarySearchTree(value));
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = (BinarySearchTree(value));
      } else {
        this.right.insert(value);
      }
    }

  },

  contains: function(value) {
    //check if node value contains value
      //if not check if number if value is less than parent node
        //check if left branch is null
        //if not then call function on left branch and return
      //if number is more than parent value
        //check if right branch is null
        //if not then call function on right branch and return
    if (this.value === value) {
      console.log(this.value);
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  },

  depthFirstLog: function(callback) {

  }


};
/*
 * Complexity: What is the time complexity of the above functions?
 */
