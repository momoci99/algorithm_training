// Lesson02_Arrays_CyclicRotation
// https://app.codility.com/demo/results/training45SYHR-HQ7/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    K = K % A.length;
    var temp = A.splice(A.length-K, K);
    A = temp.concat(A);
    return A;
}