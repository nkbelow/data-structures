var Queue = function() {
  var someInstance = {};
  var count = 0;
  var currentTopIndex = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentTopIndex] = value;
    count++;
    currentTopIndex++;
  };

  someInstance.dequeue = function() {
    if(count !== 0){
      count--;
    }
    var firstOut = storage[Math.min.apply(null, Object.keys(storage))];
    //console.log(firstOut);
    delete storage[Math.min.apply(null, Object.keys(storage))];
    return firstOut;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
