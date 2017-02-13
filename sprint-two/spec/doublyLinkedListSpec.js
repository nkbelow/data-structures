describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it ('should have methods addHead, addTail, removeHead, removeTail, and contains', function() {
    expect(doublyLinkedList.addHead).to.be.a('function');
    expect(doublyLinkedList.addTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it ('should have head and tail properties', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it ('should add a new head when new nodes are added', function() {
    doublyLinkedList.addHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
  });

  it ('should add a new tail when new nodes are added', function() {
    doublyLinkedList.addTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addTail(7);
   // console.log(doublyLinkedList);
    expect(doublyLinkedList.tail.value).to.equal(7);
  });

  it ('should remove old head and reassign head', function() {
    doublyLinkedList.addHead(3);
    //console.log(doublyLinkedList);
    doublyLinkedList.addHead(5);
    //console.log(doublyLinkedList);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.removeHead()).to.equal(5);
    //console.log(doublyLinkedList);
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it ('should remove old tail and reassign tail', function() {
    doublyLinkedList.addTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
    expect(doublyLinkedList.tail).to.equal(null);
  });

  it ('should contain a value that was added', function() {
    doublyLinkedList.addHead(5);
    //console.log(doublyLinkedList);
    doublyLinkedList.addTail(3);
    //console.log(doublyLinkedList);
    doublyLinkedList.addTail(9);
    doublyLinkedList.addTail(8);
    doublyLinkedList.addTail(4);
    doublyLinkedList.addTail(76);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(8)).to.equal(true);
    expect(doublyLinkedList.contains(65)).to.equal(false);
  });
});
