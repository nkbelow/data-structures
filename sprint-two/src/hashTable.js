

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //first check if anything is at index
  if (this._storage[index] === undefined) {
    //if empty add key and value array to index
    this._storage[index] = [[k, v]];
    //else check if same key was passed in 
  } else {
    var override = false;
    for (var i = 0; i < this._storage[index].length; i++) {
      //if so then overwrite value
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        override = true;
      }
      if (override === false) {
        this._storage[index].push([k, v]);
      }
    }
  }
  //check if key overwrite occurred
    //if not then push new key and value array
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
    // for (var j = 0; j < this._storage[index][j].length; j++) {
    //   if (this._storage[index][i][] === k) {
    //     console.log(this._storage[i][j]);
    //     return this._storage[index][i][1];
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


