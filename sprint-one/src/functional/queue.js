var Queue = function() {
  var someInstance = {};
  var count = 0;
  var head = 0;
  var tail = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //set tail value to passedin value
    //increase tail to increase storage key
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    //check the queue size 
    //remove head
    //increase head
    if (head < tail) {
    var deHead = storage[head];
    delete storage[head];
    head++;
    return deHead;
    }
    
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
