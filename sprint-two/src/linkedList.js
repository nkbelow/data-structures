var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new node
    //check if head exists
      //assign newNode to head if list is empty
    //else assign the next of current tail to newNode
    //assign newNode to current tail
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
   };

  list.removeHead = function() {
    //check if head node exists
      //if so remove node
      //assign new head value 
      //return deleted node value
    if (list.head !== null) {
      var oldHead = list.head;
      delete list.head;
      list.head = oldHead.next;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    //check if current node contains value
    //if not check each following node until null value is reached
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  //create node that has value and next prop
  var node = {};
  node.value = value;
  node.next = null;


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
