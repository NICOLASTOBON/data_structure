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
        if (this.length > 0) {
            const holdingPointer = this.top
            this.top = holdingPointer.next

            this.length -= 1

            if (!this.top) this.bottom = this.top

            return holdingPointer
        }
        return this
    }
}

const stack = new Stack()