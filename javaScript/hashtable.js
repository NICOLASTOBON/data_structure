class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }
    hashMethod(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
    set(key, value) {
        const address = this.hashMethod(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])

        return this.data
    }
    get(key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key ) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }
    remove(key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]

        for(let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
                const deleted = currentBucket[i]
                delete currentBucket[i]
                return deleted
            }
        }
        return undefined
    }
    keys() {
        const currentBucket = this.data
        const allKeys = []

        currentBucket.forEach(element => {
            element.forEach(item => {
                allKeys.push(item[0])
            })
        });

        return allKeys
    }
}

const myHashTable = new HashTable(50);