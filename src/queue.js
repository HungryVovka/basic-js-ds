const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue{
  constructor(){
    this.prior = null;
    this.length = 0;
  }

  getUnderlyingList(){
    return this.prior;
  }

  enqueue(value) {
    if (this.length == 0){
      this.prior = new ListNode(value);
    } else {
      let instant = this.prior;
      while (instant.next){
        instant = instant.next;
      }
      instant.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    let ending = this.prior;
    this.prior = this.prior.next;
    return ending.value;
  }
}

class ListNode {
  constructor(i){
    this.value = i;
    this.next = null;
  }
}

module.exports = {
  Queue
};

