var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    count: 0,
    currentIndex: 0,
    storage: {}
  };
  _.extend(obj, queueMethods);
  
  return obj;
};

var queueMethods = {

  enqueue: function() {
    this.storage[this.currentIndex];
    this.count++;
    this.currentIndex++;

  },

  dequeue: function() {
    if (this.count !== 0) {
      this.count--;
    }
    var firstOut = this.storage[Math.min.apply(null, Object.keys(this.storage))];
    console.log(firstOut);
    delete this.storage[Math.min.apply(null, Object.keys(this.storage))];
    return this.firstOut;

  },

  size: function() {
    return this.count;
  }

};


