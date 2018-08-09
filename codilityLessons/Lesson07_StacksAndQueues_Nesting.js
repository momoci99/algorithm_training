// Lesson07_StacksAndQueues_Nesting
// https://app.codility.com/demo/results/trainingZ7767D-ECP/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = S.length;
    if (len % 2 !== 0) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < len; i++) {
        if (S[i] === '(') {
            count += 1
        } else {
            count -= 1
            if (count < 0) count = 0
        }
    }
    
    return count === 0 ? 1 : 0;
}