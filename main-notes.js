// https://www.theodinproject.com/lessons/javascript-linked-lists

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
  setValue(value) {
    this.value = value;
  }
}

class LinkedList {
  //makes head null unless theres a value.
  constructor(head = null) { 
    this.head = head;
  }
  
  //append(value) adds a new node containing value to the end of the list
  append(value) {
    let n = this.head; // using 'alpha' as our eg.,  n = alpha.head
    let prior = null;
    
    let tempNode = new Node(value);
    tempNode.setValue(value)
    
    // while inside the LinkedList object, first property is "head"
    // alpha[head] = {value: a, nextNode: null}
    // remember, 'this' refers to the calling object https://www.w3schools.com/js/js_this.asp
    // get to last node. once n.nextNode = null, while loop will break before prior becomes new n. So prior keeps last node data.
    while(n != null) {
      prior = n;
      n = n.nextNode;
    }
    // console.log(prior) // confirming prior is last node. 
    // console.log(prior.nextNode) // confirming prior.NextNode = null;
    prior.nextNode = tempNode; // adding new node.
  }
  
  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    let tempNode = new Node(value);
    tempNode.setValue(value);
    
    let oldNode = this.head;
    this.head = tempNode;
    this.head.nextNode = oldNode;
  }

  //size returns the total number of nodes in the list
  size() {
    let n = this.head;
    if(n == null) return 0;
    
    let count = 0;
    while(n != null) {
      count++;
      n = n.nextNode;
    }
    return count    
    // n = this.head
    // n = 'this.head'.nextNode   // n is now reassigned to n(which was 'this.head').next
    // n = 'this.head.nextNode'.nextNode   // n is now reassigned to n(which was 'this.head.next').next
    // n = 'this.head.nextNode.nextNode'.nextNode // null    
  }
  
  //headNode returns the first node in the list. 'head' gets uncaught type error.
  headNode() {
    let n = this.head;
    if(n == null) return "there is no first node";
    return n.value;    
  }
  
  //tail returns the last node in the list
  tail() {
    let n = this.head;
    let prior = null;
    
    while(n != null) {
      prior = n;
      n = n.nextNode;
    }
    return prior.value;
  }
  //at(index) returns the node at the given index
  at(index) {
    let n = this.head;
    let count = -1;
    while(n != null) {
      count++
      if(index == count) {
        return n.value;
      }
      n = n.nextNode;
    }
    
  }
  
  pop() {
    let n = this.head;   
    let prior = null;
    
    if(n == null) {
      return console.log("link list is empty")
    }
    
    if(this.head.nextNode == null) {
      this.head = null;
      return
    }
    
    while(n != null) {  
      if(n.nextNode != null) {
        prior = n; // prior = the node youre currently on
      }
      n = n.nextNode; // n jumps to next node. problem is n is head node.
    }
    prior.nextNode = null;
  }
  
  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  //https://www.tutorialspoint.com/how-to-compare-two-objects-in-javascript
  contains(value) {
    let n = this.head;
    
    while(n != null) {
      if(JSON.stringify(n.value) == JSON.stringify(value)) return true; // recall strings are primitive, objects are not. 
      n = n.nextNode;
    }
    return false
  }
  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let n = this.head;
    let count = -1;
    
    while (n != null) {
      count++;
      if(JSON.stringify(n.value) == JSON.stringify(value)) {
        return count;
      }
      n = n.nextNode;
    }
    return "no match found"
  }
  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let n = this.head;
    let string = "";
    
    while(n != null) {
      string += `(${n.value}) -> `;
      n = n.nextNode;
    }
    string += "null";
    return string;
  }
  
  // that inserts a NEW NODE with the provided value at the given index.
  insertAt(value, index) {
    let n = this.head;
    let count = -1;
    
    while(n != null) {
      count++;
      if(count === index) {
        let afterString = JSON.stringify(n);
        let afterObj = JSON.parse(afterString);
        n.value = value; // this also changes after, since it's pass by reference. so we have to stringify it.
        n.nextNode = afterObj;
      }
      n = n.nextNode;
    }
  }
  
  // that removes the node at the given index.
  removeAt(index) {
    let n = this.head;
    let count = -1;
    let prior = null;
    
    if(n == null) return "List already empty";
    while(n != null) {
      count++;     
      if(count === index) {  
        let nextNodeString = JSON.stringify(n.nextNode);
        let nextNodeObj = JSON.parse(nextNodeString);
        if(count === 0) {
          this.head = nextNodeObj;
        } else {
          prior.nextNode = nextNodeObj;
        }
      }
      prior = n;
      n = n.nextNode;
    }
  }
}

/* deep dive
removeAt(1)
count 0 ->  prior=n aka this.head  ->  n = this.head.nextNode
count 1 ->  if(1===1){prior.nextNode = nodeObj}  -> this.head=nodeObj -> ....null
*/



const alpha = new LinkedList();
// console.log(alpha) // {head: null}


// console.log(alpha) // {head: {value: a, nextNode: null}}
// console.log(alpha.head) // {value: a, nextNode: null}
//console.log(alpha.head.value) // a
alpha.prepend({brand: "sony", model: "ps4"})
alpha.prepend({brand: "sega", model: "dreamcast"})
console.log(alpha.size())
alpha.append("new append")
console.log(alpha.at(0))
console.log(alpha.tail())
console.log(alpha.headNode())
console.log(alpha)
console.log(alpha.contains("new append"))
console.log(alpha.contains({brand: "sony", model: "ps4"}))
console.log(alpha.find({brand: "sony", model: "ps4"}))
console.log(alpha.find({brand: "sony", model: "ps5"}))
console.log(alpha.toString())
alpha.insertAt("at index 0", 0)
console.log(alpha)
alpha.removeAt(1)
console.log(alpha)