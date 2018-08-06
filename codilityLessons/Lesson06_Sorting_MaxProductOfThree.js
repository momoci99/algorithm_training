// Lesson06_Sorting_MaxProductOfThree
// https://app.codility.com/demo/results/trainingZ2E9JY-HCD/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const n = A.length
    A.sort((a, b) => a - b)

    const cases = [
        [0, 1, n-1],
        [n-1, n-2, n-3]
    ]

    function getMulti(idxList) {
        return idxList.map(i => A[i]).reduce((acc, curr) => acc * curr, 1)
    }

    return Math.max(getMulti(cases[0]), getMulti(cases[1]))
}