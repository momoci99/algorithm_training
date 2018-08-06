class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }

    appendToTail(value) {
        var end = new Node(value)
        var n = this
        while (n.next !== null) {
            n = n.next
        }
        n.next = end
    }
}

Node.deleteNode = function (head, value) {
    var n = head

    if (head.data === value) {
        return head.next
    }

    while (n.next !== null) {
        if (n.next.data === value) {
            n.next = n.next.next
            return head
        }
        n = n.next
    }
    return head
}

module.exports = Node