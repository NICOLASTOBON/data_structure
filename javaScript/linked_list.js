class Node {
    constructor(value) {
        this.value = value
        this.next  = null
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head

        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode

        this.length +=1
    
        return this
    }
    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode

        this.length += 1

        return this
    }
    insert(index, value) {
        const newNode = new Node(value)
        let current = this.head

        if (index === 0) {
           return this.prepend(value)
        }

        for (let i = 0; current != null; i++) {
            if (i === (index - 1)) {
                newNode.next = current.next
                current.next = newNode

                this.length += 1

                return this
            }
            current = current.next
        }
        return undefined

    }
    remove(index) {
        let current = this.head

        if (index === 0) {
            this.head = current.next
            this.length -= 1

            return this
        }

        for (let i = 0; current !== null; i++) {
            if ((i === (index - 1)) && current.next !== null) {
                current.next = current.next.next
                this.length -= 1

                if (current.next === null) {
                    this.tail = current
                }

                return this
            }
            current = current.next
        }
        return undefined
    }
}

let myLinkedList = new MySinglyLinkedList(1) 