const { NotImplementedError } = require("../extensions/index.js");

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

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.linkedList = new ListNode(null);
  }

  getUnderlyingList() {
    return this.linkedList;
  }

  enqueue(value) {
    let current = this.linkedList;
    if (!current.value) {
      this.linkedList = new ListNode(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }

    // console.log(queue.linkedList);
  }

  dequeue() {
    let deleteElem = this.linkedList.value;
    this.linkedList = this.linkedList.next;
    return deleteElem;
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.getUnderlyingList());
// console.log(queue);
module.exports = {
  Queue,
};
