const Node = require('./Node')

class Stack {
    constructor() {
        this.top = null   
    }

    push(item) {
        let n = new Node(item)
        n.next = this.top
        this.top = n
    }

    pop() {
        if (this.top !== null) {
            let res = this.top
            this.top = this.top.next
            return res.data
        }
        return null
    }
}

module.exports = Stack

