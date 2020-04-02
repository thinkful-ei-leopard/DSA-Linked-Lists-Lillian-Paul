'use strict';
// QUESTION 1

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // start at the head
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while (currNode.value !== item) {
      // return null if it's the end of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        // otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // found it
    return currNode;
  }

  remove(item) {
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, nextItem){
    // if the list is empty
    if (!this.head) {
      this.insertFirst(item);
    }

    //finds the spot where the next node === the value of nextItem
    let tempNode = this.head;
    let previousNode = this.head;
    while(tempNode.next.value !== nextItem) {
      previousNode = tempNode;
      tempNode = tempNode.next;
    }
    previousNode.next = new _Node(item, tempNode.next);
  }

  insertAfter(item, prevItem){
    // if the list is empty
    if (!this.head) {
      this.insertFirst(item);
    }

    //finds where previous value is the previous item, sets the previous pointer to a new node with the old previous pointer used in the new node
    let nextNode = this.head;
    let previousNode = this.head;
    while(previousNode.value !== prevItem) {
      previousNode = nextNode;
      nextNode = previousNode.next;
    }
    previousNode.next = new _Node(item, previousNode.next);
  }

  insertAt(item, index){
    //if you're inserting at the front
    if(index === 0){
      this.insertFirst(item);
    }

    /* while you're in a valid node, check to see if it's the position before index, then point to new node, which points at old node's pointer */ 
    let currentNode = this.head;
    let i = 0;
    while((currentNode !== null) && (i < index - 1)){
      currentNode = currentNode.next;
      i++;
    }
    if(currentNode === null){
      return undefined;
    } else {
      currentNode.next = new _Node(item, currentNode.next);
    }
  }


}



function main(){
  const SLL = new LinkedList();

  //2
  // SLL.insertFirst('Starbuck');
  // SLL.insertFirst('Husker');
  // SLL.insertFirst('Helo');
  // SLL.insertFirst('Boomer');
  // SLL.insertFirst('Apollo');
  // SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 2);
  // SLL.remove('Tauhida');

  return SLL;
}

console.log(main());
