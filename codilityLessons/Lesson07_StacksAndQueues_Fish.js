// Lesson07_StacksAndQueues_Fish
// https://app.codility.com/demo/results/trainingZJX4TM-ENA/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = A.length;
    const stack = [];
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (B[i] === 1) {
            stack.push(A[i]);
        } else {
            while (stack.length > 0) {
                let peek = stack[stack.length - 1];
                if (peek < A[i]) {
                    stack.pop();
                } else {
                    break;
                }
            }
        }
        if (stack.length === 0) {
            count += 1;
        }
    }

    return count + stack.length;
}