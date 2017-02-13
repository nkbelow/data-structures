var DoublyLinkedList = function() {

  this.size = 0;
  this.head = null;
  this.tail = null;

};

var Nose = function(value) {
  this.next = null;
  this.previous = null;
  this.value = value;
};

DoublyLinkedList.prototype.addHead = function(value) {
  if (this.head === null) {
    this.head = new Nose(value);
    this.tail = this.head;
  } else if (this.size === 1) {
    var oldHead = this.head;
    this.head = new Nose(value);
    this.tail = oldHead;
    this.tail.previous = this.head;
    this.head.next = oldHead;
  } else {
    var oldHead = this.head;
    this.head = new Nose(value);
    this.head.next = oldHead;
  }
  this.size++;
  //create new node as we're adding in a new head
  //we create an old head parameter to provide linkage for new value/head
  //we assign the new head to the former head using the next property

};

DoublyLinkedList.prototype.addTail = function(value) {
//check if tail is null
//create new node for argument
//create oldTail parameter to hold old tail node
//link it to new node using .next property
  var nose = new Nose(value);
  if (this.tail === null) {
    this.tail = nose;
    this.head = nose;
  // } else if (this.size === 1) {
  //   var oldTail = this.tail;
  //   this.tail = new Nose(value);
  //   this.tail.previous = this.head;
  //   this.head = oldTail;
  //   this.head.next = this.tail;
  } else {
    this.tail.next = nose;
    this.tail.previous = this.head;
  }
  this.size++;

};

DoublyLinkedList.prototype.removeHead = function() {
  //first check if head is null
  //assign heads next property to be new head
  //store value of current head
  //remove the head nose
  //return value of previous head nose
  
  if (this.head === null) {
    return;
  } else {
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;

  }
  this.size--;


};

DoublyLinkedList.prototype.removeTail = function() {
  //check to see if tail is null
  //if true then return nothing
  //else assign old tail to current tail value
  //return oldtail value
  
  if (this.tail === null) {
    return;
  } else {
    var oldTail = this.tail;
    this.tail = this.tail.previous;
    return oldTail.value;
  }
  this.size--;

};

DoublyLinkedList.prototype.contains = function(target) {
  var currentNode = this.head;
  if (!this.head) {
    return false;
  } else if (currentNode.value === target) {
    return true;
  } else {
    currentNode = currentNode.next;
    return currentNode.contains(target);  
  }
  //if (this.next.value === target) {
  //   return true;
  // } else if (!this.next) {
  //   return false;
  // } else {
  //   return this.contains(target);

};
DoublyLinkedList.prototype.isEmpty = function () {
  this.size = 0;
};