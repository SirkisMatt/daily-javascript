const LinkedList = class LinkedList {
  constructor() {
    this.head = null; // first element of the list
    this.tail = null; // last element of the list
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue)

    if(existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode
    }
  }

  find(value) {
    if(!this.head) {
      return null;
    }

    let curNode = this.head

    while(curNode) {
      if(curNode.value === value) {
        return curNode
      }
      curNode = curNode.next
    }

    return null
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  deleteHead() {
    if(!this.head) {
      return null
    }

    const deletedItem = this.head

    if(this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedItem
  }

  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("Hello");
linkedList1.append(true);
linkedList1.append(true);
linkedList1.append(12.45);
linkedList1.prepend(42);
linkedList1.delete(42);
linkedList1.delete(12.45);

console.log(linkedList1.toArray());
console.log(linkedList1.find("Hello"))
console.log(linkedList1.find('matt'))

linkedList1.insertAfter("new Value", "Hello")
linkedList1.insertAfter("new Value", "erf")

console.log(linkedList1.toArray())

module.exports = LinkedList