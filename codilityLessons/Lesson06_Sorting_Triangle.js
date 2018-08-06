// Lesson06_Sorting_Triangle
// https://app.codility.com/demo/results/trainingTMCGKN-7C7/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b)
    const n = A.length
    for(let i = 2; i < n; i++) {
        const x = A[i],  y = A[i - 1], z = A[i - 2]
        if (x + y > z && x + z > y && z + y > x)
            return 1
    }
    return 0
}