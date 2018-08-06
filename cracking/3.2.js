// 3.2
// push와 pop의 두가지 연산뿐아니라, 최솟값을 갖는 원소를 반환하는 
// min 연산을 갖춘 스택은 어떻게 구현할 수 있겠는가?
// push, pop, 그리고 min은 공히 O(1) 시간에 처리되어야 한다.

const max = 100
const buffer = new Array(max)
const minBuffer = new Array(max)
let top = -1

function pop() {
    if (top === -1) throw new Error("empty")
    const result = buffer[top]
    top -= 1
    return result
}

function push(element) {
    if (top >= max - 1) throw new Error("full")
    buffer[top + 1] = element
    minBuffer[top + 1] = top === -1 ? element : Math.min(minBuffer[top], element)
    top += 1
}

function min() {
    if (top === -1) throw new Error("empty")
    return minBuffer[top]
}

module.exports = {
    pop,
    push,
    min
}