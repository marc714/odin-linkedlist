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
  constructor(head = null) { 
    this.head = head;
  }
  
  append(value) {
    let n = this.head; 
    let prior = null;
    
    let tempNode = new Node(value);
    tempNode.setValue(value)
    
    while(n != null) {
      prior = n;
      n = n.nextNode;
    }
    prior.nextNode = tempNode; 
  }
  
  prepend(value) {
    let tempNode = new Node(value);
    tempNode.setValue(value);
    
    let oldNode = this.head;
    this.head = tempNode;
    this.head.nextNode = oldNode;
  }

  size() {
    let n = this.head;
    if(n == null) return 0;
    
    let count = 0;
    while(n != null) {
      count++;
      n = n.nextNode;
    }
    return count    
  }
  
  headNode() {
    let n = this.head;
    if(n == null) return "there is no first node";
    return n.value;    
  }
  
  tail() {
    let n = this.head;
    let prior = null;
    
    while(n != null) {
      prior = n;
      n = n.nextNode;
    }
    return prior.value;
  }

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
        prior = n; 
      }
      n = n.nextNode; 
    }
    prior.nextNode = null;
  }
  
  contains(value) {
    let n = this.head;
    
    while(n != null) {
      if(JSON.stringify(n.value) == JSON.stringify(value)) return true;  
      n = n.nextNode;
    }
    return false
  }

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
  
  insertAt(value, index) {
    let n = this.head;
    let count = -1;
    
    while(n != null) {
      count++;
      if(count === index) {
        let afterString = JSON.stringify(n);
        let afterObj = JSON.parse(afterString);
        n.value = value; 
        n.nextNode = afterObj;
      }
      n = n.nextNode;
    }
  }
  
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