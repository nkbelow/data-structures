var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var queue = Object.create(queueMethods);
  queue.head = 0;
  queue.tail = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
	enqueue : function(value) {
	    this.storage[this.tail] = value;
		this.tail++;
	},

	dequeue : function() {
		//check if head size is less than tail
		//if so save poped value in variable
		//delete head
		//move head up by one to next value
		if (this.head < this.tail) {
			var toBePoped = this.storage[this.head];
			delete this.storage[this.head];
			this.head++;
			return toBePoped;
		}
	},

	size: function() {
		return this.tail - this.head;
	}
};


