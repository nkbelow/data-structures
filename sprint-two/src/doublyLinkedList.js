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
  var newNode = new Nose(value);
  var currentHead = this.head;
  if (this.head) {
    this.head.previous = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
  this.head.next = currentHead;
  this.size++;
};

DoublyLinkedList.prototype.addTail = function(value) {
  var newNode = new Nose(value);
  var currentTail = this.tail;
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
  this.tail.previous = currentTail;
  this.size++;
};

DoublyLinkedList.prototype.removeHead = function() {
  var newHead = this.head.next;
  var currentHead = this.head;
  if (currentHead) {
    delete this.head;
  }
  this.head = newHead;
  this.head.previous = null;
  this.size--;
  return currentHead.value;
};

DoublyLinkedList.prototype.removeTail = function() {
  var newTail = this.tail.previous;
  var oldTail = this.tail;
  if (oldTail) {
    delete this.tail;
  }
  this.tail = newTail;
  this.size--;
  return oldTail.value;
};

DoublyLinkedList.prototype.contains = function(target) {
};

DoublyLinkedList.prototype.isEmpty = function () {
  this.size = 0;
};