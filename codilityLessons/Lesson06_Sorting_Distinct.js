// Lesson06_Sorting_Distinct
// https://app.codility.com/demo/results/trainingMSMNZU-9WC/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution (A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const n = A.length;
    if (n === 0) return 0
    let res = 1
    A.sort((a, b) => a - b)
    for (let i = 1; i < n; i++) {
        if (A[i] !== A[i - 1])
            res += 1
    }
    return res
}