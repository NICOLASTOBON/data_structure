class Node {
    constructor(value) {
        this.value = value
        this.left  = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(item) {
        const newNode = new Node(item)

        if(this.root === null) {
            this.root = newNode
        } else {
            let current = this.root

            while(true) {
                if (item < current.value) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                } else {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        }
        return this
    }
    search(item) {
        if (this.root) {
            let current = this.root

            while(true) {
                if (item < current.value) {
                    current = current.left
                } else if (item > current.value) {
                    current = current.right
                }

                if (current) {
                    if (item === current.value) {
                        return current
                    }
                } else {
                    return "Not found"
                }
            }
        }
    }
}

const tree = new BinarySearchTree()