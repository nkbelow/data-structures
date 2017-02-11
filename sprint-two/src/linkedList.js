var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //new node creates a node connected to previous node
    //new node becomes tail node
    var node = Node(value);
    if(list.head === null){
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    //check if list is empty
    //remove head
    //assign head to the next node that it is linked to
    if (list.head !== null) {
      var oldHead = list.head;
      var newHead = list.head.next;
      delete list.head;
      list.head = newHead;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    //check each node to see if target equals value if so return true
    //if no nodes contain target return false
    var currentNode = list.head;
    if (currentNode.value === target) {
      return true;
    } else {
      for (currentNode in list) {
        if (list[currentNode].value === target) {
          return true;
        }
      }
    } 
    return false;
    // while(currentNode.next){
    //   if(currentNode.value === target){
    //     return true;
    //   } else {
    //     currentNode = currentNode.next;
    //   }
    // }
    // return false;
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
 */
