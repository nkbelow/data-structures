var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    head: 0,
    tail: 0,
    storage: {}
  };
  _.extend(obj, queueMethods);
  
  return obj;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
    
  },

  dequeue: function() {
    //check to make sure that queue is not empty
    //store head value to be beheaded in a variable
    //delete head key value pair
    //return the deleted head
    if (this.head < this.tail) {
      var toBeDequeued = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return toBeDequeued;
    }
  },

  size: function() {
    return this.tail - this.head;
  }

};


