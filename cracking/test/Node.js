const assert = require('assert')
const Node = require('../Node')

describe("Node", () => {
    describe("#constructor()", () => {
        it("create new Node", () => {
            assert.deepEqual(new Node(1), { data: 1, next: null })
        })
    })
    describe("#appendToTail()", () => {
        it("create [0,1,2,3]", () => {
            let n = new Node(0)
            n.appendToTail(1)
            n.appendToTail(2)
            n.appendToTail(3)
            let t = { data: 0, next: { data: 1, next: { data: 2, next: { data: 3, next: null } } } }
            assert.deepEqual(n, t)
        })
    })
    describe("#deleteNode()", () => {
        const getNode = () => {
            let node = new Node(0)
            node.appendToTail(1)
            node.appendToTail(2)
            node.appendToTail(3)
            return node
        }
        it("[0,1,2,3] => [1,2,3]", () => {
            let node = getNode()
            n = Node.deleteNode(node, 0)
            let t = { data: 1, next: null }
            t.next = { data: 2, next: null }
            t.next.next = { data: 3, next: null }
            assert.deepEqual(n, t)
        })
        it("[0,1,2,3] => [0,2,3]", () => {
            let node = getNode()
            n = Node.deleteNode(node, 1)
            let t = { data: 0, next: null }
            t.next = { data: 2, next: null }
            t.next.next = { data: 3, next: null }
            assert.deepEqual(n, t)
        })
        it("[0,1,2,3] => [0,1,2]", () => {
            let node = getNode()
            n = Node.deleteNode(node, 3)
            let t = { data: 0, next: null }
            t.next = { data: 1, next: null }
            t.next.next = { data: 2, next: null }
            assert.deepEqual(n, t)
        })
    })
})