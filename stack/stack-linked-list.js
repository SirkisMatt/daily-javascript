const LinkedList = require("../linked-list/linked-list")

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.deleteHead()
    }

    isEmpty() {
        return !this.list.head
    }

    toArray() {
        return this.list.toArray()
    }

}

const stack = new Stack()

stack.push('Cook dinner!')
stack.push('Wash dishes')
stack.push('Buy ingredients')

console.log(stack.toArray())

stack.pop()
stack.pop()

console.log(stack.toArray())