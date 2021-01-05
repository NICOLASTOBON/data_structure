class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head

        this.lenght = 1
    }
    append(value) {
        const newNode = new Node(value)

        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode

        this.lenght += 1

        return this
    }
    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode

        this.lenght += 1

        return this
    }
    insert(index, value) {
        const newNode = new Node(value)
        let current = this.head

        if (index === 0) {
            return this.prepend(value)
        }

        for (let i = 0; current !== null; i++) {
            if (i === (index - 1)) {
                newNode.next = current.next
                newNode.prev = current
                
                if (current.next !== null) {
                    current.next.next.prev = newNode
                } else {
                    this.tail = newNode
                }
                current.next = newNode

                this.lenght += 1

                return this

            }
            current = current.next
        }

        return undefined
    }
}

let dublyLinkedList = new DoublyLinkedList(1)