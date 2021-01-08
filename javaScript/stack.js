class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peak() {
        return this.top
    }
    push(item) {
        const newNode = new Node(item)

        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length += 1

        return this
    }
    pop() {
        let current = this.top

        if (this.length === 1) {
            this.top = this.bottom = null
        } else {
            this.top = this.top.next
        }

        this.length -= 1

        return current
    }
}

const stack = new Stack()