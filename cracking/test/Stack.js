const assert = require('assert')
const Stack = require('../Stack')
const Node = require("../Node")

describe("Stack", () => {
    it("new Stack", () => {
        let s = new Stack()
        assert.deepEqual(s, { top: null })      
    })
    describe("#push()", () => {
        it("push a element", () => {
            let s = new Stack()
            s.push(1)
            let t = { top: null }
            t.top = new Node(1)
            assert.deepEqual(s, t)
        })
        it("push two elements", () => {
            let s = new Stack()
            s.push(1)
            s.push(2)
            let t = { top: null }
            t.top = new Node(2)
            t.top.appendToTail(1)
            assert.deepEqual(s, t)
        })
    })
    describe("#pop()", () => {
        it("pop from empty Stack", () => {
            let s = new Stack()
            assert.equal(s.pop(), null)
            assert.deepEqual(s, { top: null })
        })
        it("pop from from Stack has a element", () => {
            let s = new Stack()
            s.push(0)
            assert.equal(s.pop(), 0)
            assert.deepEqual(s, { top: null })
        })
        it("pop from from Stack has two elements", () => {
            let s = new Stack()
            s.push(0)
            s.push(1)
            assert.equal(s.pop(), 1)
            assert.deepEqual(s, { top: { data: 0, next: null } })
        })
    })
})