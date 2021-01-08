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
            const holdingPointer = this.last
            this.last = newNode
            this.last.next = holdingPointer
        }
        this.length += 1

        return this
    }
    dequeue() {
        let current = this.last

        if (this.length === 1) {
            this.last = this.first = null
            this.length -= 1
        } else {
            const holdingPointer = this.first

            while(current.next.next) {
                current = current.next
            }
            this.first = current
            this.first.next = holdingPointer.next

            this.length -= 1

            return holdingPointer
        }
        return current
    }
}

const queue = new Queue()