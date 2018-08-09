// Lesson07_StacksAndQueues_Brackets
// https://app.codility.com/demo/results/training92AT8U-QBH/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = S.length;
    if (len % 2 !== 0) {
        return 0;
    }
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];
    for (let i = 0; i < len; i++) {
        if (pair.hasOwnProperty(S[i])) {
            const char = stack.pop();
            if (char !== pair[S[i]]) {
                return 0;
            }
        } else {
            stack.push(S[i]);
        }
    }

    return stack.length === 0 ? 1 : 0;
}