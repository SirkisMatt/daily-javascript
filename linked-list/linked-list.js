class LinkedList {
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
