//3.1 하나의 배열을 사용해 세 개의 스택을 구현하는 방법을 설명하라.
const stackSize = 100
const buffer = new Array(stackSize * 3)
const stackPointer = [-1, -1, -1]

function stackIsEmpty(stackNum) {
    return stackPointer[stackNum] === -1
}

function stackIsFull(stackNum) {
    return stackPointer[stackNum] === stackSize - 1
}

function absTopOfStack(stackNum) {
    return stackSize * stackNum + stackPointer[stackNum]
}

function peek(stackNum) {
    let index = absTopOfStack(stackNum)
    return buffer[index]
}

function push(stackNum, element) {
    if (typeof stackNum !== 'number') throw new Error("not number")
    if (stackIsFull(stackNum)) throw new Error(stackNum + " stack is full")
    const top = absTopOfStack(stackNum)
    buffer[top + 1] = element
    stackPointer[stackNum] += 1
}

function pop(stackNum) {
    if (typeof stackNum !== 'number') throw new Error("not number")
    if (stackIsEmpty(stackNum)) throw new Error(stackNum +" stack is Empty")
    const result = peek(stackNum)
    stackPointer[stackNum] -= 1
    return result
}

module.exports = {
    pop,
    push
}