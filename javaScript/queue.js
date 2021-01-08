class Node {
    constructor(value) {
        this.value = value
        this.next  = null
    }
}

class Queue {
    constructor() {
        this.last   = null
        this.first  = null
        this.length = 0
    }
    peak() {
        return this.first
    }
    enqueue(item) {
        const newNode = new Node(item)

        if (this.length === 0) {
            this.first = newNode
            this.last  = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length += 1

        return this
    }
    dequeue() {
        let current = this.first

        if (this.length === 1) {
            this.first = this.last = null
        } else {
            this.first = this.first.next
        }
        this.length -= 1

        return current
    }
}

const queue = new Queue()